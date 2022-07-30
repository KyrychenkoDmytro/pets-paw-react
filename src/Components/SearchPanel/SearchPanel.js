import './SearchPanel.css';

import { NavLink, Link } from 'react-router-dom';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';

import { searchValue } from '../../store/slices/search/searchPanelSlice';

const SearchPanel = () => {
    const valueRef = useRef();
    const dispatch = useDispatch();

    return (
        <div className="SearchPanel">
            <input type="text" placeholder='Search for breeds by name' ref={valueRef} />
            <Link to="/search" onClick={() => dispatch(searchValue(valueRef.current.value))}><button className="btn-search"><img src="../images/voting/search.svg" alt="search" /></button></Link>
            <nav>
                <NavLink to="/likes"><img src="/images/voting/like.svg" alt="like" /></NavLink>
                <NavLink to="/favourites"><img src="/images/voting/favourites.svg" alt="favourites" /></NavLink>
                <NavLink to="/dislikes"><img src="/images/voting/dislike.svg" alt="dislike" /></NavLink>
            </nav>
        </div>
    );
}

export default SearchPanel;