import './Voting.css';
import SearchPanel from '../SearchPanel/SearchPanel';

import { Link } from 'react-router-dom';


const Voting = () => {
    return (
        <div className="Voting">
        <SearchPanel />
            <div className='choice-wrapper'>
                <div className='flex-wrapper-back'>
                    <Link to="/"><img className="btn-back" src="../images/voting/back.svg" alt="search" /></Link>
                    <div className='voting-lable'>voting</div>
                </div>
                <div className="show-cat">
                    <div><img src="./images/voting/like-white.svg" alt="like" /></div>
                    <div><img src="./images/voting/favourites-white.svg" alt="favourites" /></div>
                    <div><img src="./images/voting/dislike-white.svg" alt="dislike" /></div>
                </div>
                <div className="users-action">
                    <div className="user">
                        <div>22:35</div>
                        <p>Image ID: <span>fQSunHvl8</span> was added to Favourites</p>
                        <img src="./images/voting/favourites-small.svg" alt="favourites" />
                    </div>
                    <div className="user">
                        <div>22:35</div>
                        <p>Image ID: <span>HJd0XecNX</span> was added to Likes</p>
                        <img src="./images/voting/like-small.svg" alt="like" />
                    </div>
                    <div className="user">
                        <div>22:35</div>
                        <p>Image ID: <span>BbMFS3bU</span> was added to Dislikes</p>
                        <img src="./images/voting/dislike-small.svg" alt="dislike" />
                    </div>
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

export default Voting;