import './Search.scss';
import SearchPanel from '../../Components/SearchPanel/SearchPanel';
import axios from '../../axios';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const Search = ({ fetchBreeds, fetchSearch }) => {

    const [allBreedImages, setAllBreedImages] = useState([]);
    const [noItemFaound, setNoItemFound] = useState(false);

    const breedId = useSelector(state => state.search.id);

    const greedRowCount = Math.ceil(allBreedImages.length * 0.6) >= 3 ? Math.ceil(allBreedImages.length * 0.6) : 3;

    useEffect(() => {
            const fetchData = async () => {
                try {
                    let { data } = await axios.get(`${fetchSearch}${breedId.id}&limit=10`);
                    if (data.length > 0) {
                        setNoItemFound(false);
                        setAllBreedImages(data);
                    } else {
                        setAllBreedImages([]);
                        setNoItemFound(true);
                    }
                } catch (err) {
                    throw err;
                }
            }
            fetchData();
    }, [breedId, fetchSearch])

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
                    <span>{breedId.name}</span>
                </div>
                {noItemFaound && <div className='no-items'>No item found</div>}
                <div className="container-grid" style={{ gridTemplateRows: `repeat(${greedRowCount}, 140px )` }}>
                    {allBreedImages.map((item, index) =>
                        <div
                            key={item.id}
                            style={{ background: `url(${item.url}) 0% 0% / cover` }}
                            className={`item grid-${index + 1}`}>
                            <div className='grid-hover'>
                                <div>{breedId.name}</div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
}

export default Search;