import './SearchPanel.scss';
import requests from '../../requests';

import { NavLink, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from '../../axios';

import { searchValue, breedNames, breedId } from '../../store/slices/searchPanelSlice';

const SearchPanel = () => {
    const fetchBreeds = requests.fetchBreeds;
    const value = useSelector(state => state.search.value);
    const [listBreeds, setListBreeds] = useState([]);
    const [open, setOpen] = useState(false);
    const [clearValue, setClearValue] = useState('');
    const [id, setId] = useState({});
    const dispatch = useDispatch();


    useEffect(() => {
        const fetchData = async () => {
            let { data } = await axios.get(fetchBreeds);
            data = data.reduce((accum, item) => {
                accum.push({ name: item.name, id: item.id });
                return accum;
            }, [])
            setListBreeds(data);
            dispatch(breedNames(data));
        }
        fetchData();
    }, [dispatch, fetchBreeds]);

    let filterBreeds = listBreeds.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()));

    const handleSearch = () => {
        setOpen(false);
        dispatch(searchValue(clearValue));
        dispatch(breedId(id));
        setClearValue('');
    }

    const changeInput = (e) => {
        setOpen(true);
        setClearValue(e.target.value);
        dispatch(searchValue(e.target.value));
    }

    const listItemClick = (name, id) => {
        setOpen(false);
        setClearValue(name);
        setId({ name, id });
    }



    return (
        <div className="SearchPanel">
            <input type="text" placeholder='Search for breeds by name' value={clearValue} onChange={changeInput} />
            {
                open && (
                    <div id="popup-search">
                        <ul>
                            {filterBreeds.map((item) =>
                                <li onClick={() => listItemClick(item.name, item.id)} key={item.id}>
                                    {item.name}
                                </li>)}
                        </ul>
                    </div>
                )
            }
            <Link to="/search" onClick={handleSearch}>
                <button
                    className={`SearchPanel__btn ${clearValue === '' ? 'disabled' : ''}`}
                    disabled={clearValue === ''}
                ></button></Link>
            <nav>
                <NavLink to="/likes"><img src="/images/voting/like.svg" alt="like" /></NavLink>
                <NavLink to="/favourites"><img src="/images/voting/favourites.svg" alt="favourites" /></NavLink>
                <NavLink to="/dislikes"><img src="/images/voting/dislike.svg" alt="dislike" /></NavLink>
            </nav>
        </div>
    );
}


export default SearchPanel;