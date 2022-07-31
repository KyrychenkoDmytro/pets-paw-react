import './Voting.css';
import SearchPanel from '../SearchPanel/SearchPanel';

import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const api_key = "c4ead829-65a6-45da-afc9-4c5a1391c8ef";

const Voting = () => {

    useEffect(() => {
        fetch('https://api.thecatapi.com/v1/favourites', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': api_key
            },
            body: JSON.stringify({
                "image_id": "sxIXJax6h",
                "sub_id": "your-usesdasda"
            })
        })
            .then(response => response.json())
            .then(data => console.log(data))
    }, [])

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