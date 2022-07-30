import './Search.css';
import SearchPanel from '../SearchPanel/SearchPanel';

import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { breedNames } from '../../store/slices/search/searchPanelSlice';

const api_key = "c4ead829-65a6-45da-afc9-4c5a1391c8ef";

const Search = () => {
    const [allBreeds, setAllBreeds] = useState([]);
    const value = useSelector(state => state.search.value);
    const breeds = useSelector(state => state.search.breeds);
    const dispatch = useDispatch();

    const greedRowCount = Math.ceil(allBreeds.length * 0.6) >= 3 ? Math.ceil(allBreeds.length * 0.6) : 3;

    useEffect(() => {
        fetch('https://api.thecatapi.com/v1/breeds')
            .then(response => response.json())
            .then(data => {
                data = data.reduce((accum, item) => {
                    accum[item.name] = item.id;
                    return accum;
                },{})
                console.log(data);
                dispatch(breedNames(data));
            })
    },[])

    useEffect(() => {
        fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breeds[value]}&limit=5`, {
            headers: {
                'x-api-key': api_key
            }
        })
            .then(response => response.json())
            .then(data => {
                data = data.filter((item) => item['breeds'][0].name === value);
                console.log(data);
                setAllBreeds(data);
            })
    }, [value, breeds])

    return (
        <div className="Search">
            <SearchPanel />
            <div className='choice-wrapper'>
                <div className='flex-wrapper-back'>
                    <Link to="/"><img className="btn-back" src="../images/voting/back.svg" alt="search" /></Link>
                    <div className='voting-lable'>search</div>
                </div>
                <div className="search-result">
                    <div>Search result for: </div>
                    <span>{value}</span>
                </div>
                <div className="container-grid" style={{ gridTemplateRows: `repeat(${greedRowCount}, 140px )` }}>
                    {allBreeds.length !== 0 ?
                        allBreeds.map((item, index) =>
                            <div
                                key={item.id}
                                style={{ background: `url(${item.url}) 0% 0% / cover` }}
                                className={`item grid-${index + 1}`}>
                            </div>)
                        : <div className='no-items'>No item found</div>}
                </div>
            </div>
        </div>
    );
}

export default Search;