import './Dislike.css';
import { Link, NavLink } from 'react-router-dom';

const Dislike = () => {
    return(
        <div className="Dislike">
             <input type="text" placeholder='Search for breeds by name' />
            <div className="btn-search"><img src="../images/voting/search.svg" alt="search" /></div>
            <nav>
                <NavLink to="/likes"><img src="./images/voting/like.svg" alt="like" /></NavLink>
                <NavLink to="/favourites"><img src="./images/voting/favourites.svg" alt="favourites" /></NavLink>
                <NavLink to="/dislikes"></NavLink>
            </nav>
            <div className='choice-wrapper'>
                <div className='flex-wrapper-back'>
                    <Link to="/"><img className="btn-back" src="../images/voting/back.svg" alt="search" /></Link>
                    <div className='voting-lable'>likes</div>
                </div>
                <div className="container-grid">
                    <div className="item grid-1"></div>
                </div>
            </div>
        </div>
    );
}

export default Dislike;