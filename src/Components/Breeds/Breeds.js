import './Breeds.css';
import { Link } from 'react-router-dom';

const Breeds = () => {
    return (
        <div className="Breeds">
            <input type="text" placeholder='Search for breeds by name' />
            <div className="btn-search"><img src="../images/voting/search.svg" alt="search" /></div>
            <nav>
                <Link to="#"><img src="./images/voting/like.svg" alt="like" /></Link>
                <Link to="#"><img src="./images/voting/favourites.svg" alt="favourites" /></Link>
                <Link to="#"><img src="./images/voting/dislike.svg" alt="dislike" /></Link>
            </nav>
            <div className='choice-wrapper'>
                <div className='flex-wrapper-back'>
                    <Link to="/"><img className="btn-back" src="../images/voting/back.svg" alt="search" /></Link>
                    <div className='voting-lable'>breeds</div>
                    <select name="breeds" id="breeds-select" className='breeds-select'>
                        <option>All breeds</option>
                        <option>Abyssinian</option>
                        <option>Aegean</option>
                        <option>American Bobtail</option>
                        <option>American Curl</option>
                        <option>American Shorthair</option>
                        <option>American Wirehair</option>
                        <option>...</option>
                    </select>
                    <select name="breeds" id="breeds-select-limit" className='breeds-select select-limit'>
                        <option>Limit: 5</option>
                        <option>Limit: 10</option>
                        <option>Limit: 15</option>
                        <option>Limit: 20</option>
                        <option>...</option>
                    </select>
                    <div className="breeds-sort"><img src="./images/breeds/z-a.svg" alt="z-a" /></div>
                    <div className="breeds-sort"><img src="./images/breeds/a-z.svg" alt="a-z" /></div>
                </div>
                <div className="container-grid">
                    <div className="item grid-1"></div>
                    <div className="item grid-2"></div>
                    <div className="item grid-3"></div>
                    <div className="item grid-4"></div>
                    <div className="item grid-5"></div>
                    <div className="item grid-6"></div>
                    <div className="item grid-7"></div>
                    <div className="item grid-8"></div>
                    <div className="item grid-9"></div>
                </div>
            </div>
        </div>
    );
}

export default Breeds;