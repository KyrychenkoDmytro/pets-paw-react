import './Search.scss';
import SearchPanel from '../SearchPanel/SearchPanel';
import axios from '../../axios';

import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { breedNames } from '../../store/slices/searchPanelSlice';

const Search = ({ fetchBreeds, fetchSearch }) => {

    const [allBreedImages, setAllBreedImages] = useState([]);
    const [noItemFaound, setNoItemFound] = useState(false);

    const value = useSelector(state => state.search.value);
    const breeds = useSelector(state => state.search.breeds);
    const dispatch = useDispatch();

    const greedRowCount = Math.ceil(allBreedImages.length * 0.6) >= 3 ? Math.ceil(allBreedImages.length * 0.6) : 3;

    useEffect(() => {
        const fetchData = async () => {
            let { data } = await axios.get(fetchBreeds);
            data = data.reduce((accum, item) => {
                accum[item.name] = item.id;
                return accum;
            }, {})
            console.log(data);
            dispatch(breedNames(data));
        }
        fetchData();
    }, [dispatch, fetchBreeds]);

    useEffect(() => {
        const fetchData = async () => {
            let { data } = await axios.get(`${fetchSearch}${breeds[value]}&limit=5`);
            data = data.filter((item) => item['breeds'][0].name === value);
            if (data.length === 0) {
                setNoItemFound(true);
            } else {
                setNoItemFound(false);
                setAllBreedImages(data);
                console.log(data);
            }
        }
        fetchData();
    }, [value, breeds, fetchSearch])

    return (
        <div className="Search">
            <SearchPanel />
            <div className='choice-wrapper'>
                <div className='flex-wrapper-back'>
                    <Link to="/"></Link>
                    <div className='voting-lable'>search</div>
                </div>
                <div className="search-result">
                    <div>Search result for: </div>
                    <span>{value}</span>
                </div>
                {noItemFaound && <div className='no-items'>No item found</div>}
                <div className="container-grid" style={{ gridTemplateRows: `repeat(${greedRowCount}, 140px )` }}>
                    {allBreedImages.map((item, index) =>
                        <div
                            key={item.id}
                            style={{ background: `url(${item.url}) 0% 0% / cover` }}
                            className={`item grid-${index + 1}`}>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
}

export default Search;