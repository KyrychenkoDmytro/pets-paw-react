import './Favourite.css';
import SearchPanel from '../SearchPanel/SearchPanel';

import { Link } from 'react-router-dom';

const Favourite = () => {
    return (
        <div className="Favourite">
            <SearchPanel />
            <div className='choice-wrapper'>
                <div className='flex-wrapper-back'>
                    <Link to="/"><img className="btn-back" src="../images/voting/back.svg" alt="search" /></Link>
                    <div className='voting-lable'>favourites</div>
                </div>
                <div className="container-grid">
                    <div className="item grid-1"></div>
                    <div className="item grid-2"></div>
                    <div className="item grid-3"></div>
                </div>
                <div className="users-action">
                    <div className="user">
                        <div>22:35</div>
                        <p>Image ID: <span>fQSunHvl8</span> was added to Favourites</p>
                        <img src="./images/voting/favourites-small.svg" alt="favourites" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Favourite;