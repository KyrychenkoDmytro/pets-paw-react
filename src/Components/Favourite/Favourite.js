import './Favourite.css';
import { Link, NavLink } from 'react-router-dom';

const Favourite = () => {
    return(
        <div className="Favourite">
 <input type="text" placeholder='Search for breeds by name' />
            <div className="btn-search"><img src="../images/voting/search.svg" alt="search" /></div>
            <nav>
                <NavLink to="/likes"><img src="./images/voting/like.svg" alt="like" /></NavLink>
                <NavLink to="/favourites"></NavLink>
                <NavLink to="/dislikes"><img src="./images/voting/dislike.svg" alt="dislike" /></NavLink>
            </nav>
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