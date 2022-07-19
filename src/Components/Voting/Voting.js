import './Voting.css';
import { Link } from 'react-router-dom';

const Voting = () => {
    return (
        <div className="Voting">
            <input type="text" placeholder='Search for breeds by name' />
            <div className="btn-search"><img src="../images/voting/search.svg" alt="search" /></div>
            <nav>
                <Link to="#"><img src="./images/voting/like.svg" alt="like" /></Link>
                <Link to="#"><img src="./images/voting/favourites.svg" alt="favourites" /></Link>
                <Link to="#"><img src="./images/voting/dislike.svg" alt="dislike" /></Link>
            </nav>
            <div className='choice-wrapper'>
                <div className='flex-wrapper-back'>
                    <img className="btn-back" src="../images/voting/back.svg" alt="search" />
                    <div className='voting-lable'>voting</div>
                </div>
            </div>
        </div>
    );
}

export default Voting;