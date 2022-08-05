import './SearchPanel.css';

import { NavLink, Link } from 'react-router-dom';
import { useRef, useState} from 'react';
import { useDispatch } from 'react-redux';

import { searchValue } from '../../store/slices/search/searchPanelSlice';

const SearchPanel = () => {
    const [clearValue, setClearValue] = useState('');
    const valueRef = useRef();
    const dispatch = useDispatch();

const handleSearch = () => {
    let value = valueRef.current.value;
    valueRef.current.focus();
    dispatch(searchValue(value));
    console.log(value);
    setClearValue('');
}

    return (
        <div className="SearchPanel">
            <input type="text" placeholder='Search for breeds by name' ref={valueRef} value={clearValue} onChange={(e)=>setClearValue(e.target.value)} />
            <Link to="/search" onClick={handleSearch}><button className="btn-search"><img src="../images/voting/search.svg" alt="search" /></button></Link>
            <nav>
                <NavLink to="/likes"><img src="/images/voting/like.svg" alt="like" /></NavLink>
                <NavLink to="/favourites"><img src="/images/voting/favourites.svg" alt="favourites" /></NavLink>
                <NavLink to="/dislikes"><img src="/images/voting/dislike.svg" alt="dislike" /></NavLink>
            </nav>
        </div>
    );
}

export default SearchPanel;