import './Voting.css';
import SearchPanel from '../SearchPanel/SearchPanel';

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const api_key = "c4ead829-65a6-45da-afc9-4c5a1391c8ef";

const Voting = () => {
    let date = new Date();
    let timeIsNow = `${date.getHours()}:${date.getMinutes()}`;

    const [image, setImage] = useState([]);
    const [likeInfo, setLikeInfo] = useState('');


    const newImage = () => {
        fetch('https://api.thecatapi.com/v1/images/search')
            .then(response => response.json())
            .then(data => {
                setImage(data);
                console.log(data);
            })
    }
    useEffect(() => {
        newImage()
    }, [])

    const addToLikes = (id) => {
        fetch('https://api.thecatapi.com/v1/votes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': api_key
            },
            body: JSON.stringify({
                "image_id": `${id}`,
                "sub_id": "my-sub-id-123321",
                "value": 1
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.message === 'SUCCESS') newImage();
            })
    }

    const addToFavourites = (id) => {
        fetch('https://api.thecatapi.com/v1/favourites', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': api_key
            },
            body: JSON.stringify({
                "image_id": `${id}`,
                "sub_id": "my-sub-id-123321"
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.message === 'SUCCESS') newImage();
            })
    }

    const addToDislikes = (id) => {
        fetch('https://api.thecatapi.com/v1/votes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': api_key
            },
            body: JSON.stringify({
                "image_id": `${id}`,
                "sub_id": "my-sub-id-123321",
                "value": 0
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data.message === 'SUCCESS') newImage();
            })
    }

    return (
        <div className="Voting">
            <SearchPanel />
            <div className='choice-wrapper'>
                <div className='flex-wrapper-back'>
                    <Link to="/"><img className="btn-back" src="../images/voting/back.svg" alt="search" /></Link>
                    <div className='voting-lable'>voting</div>
                </div>
                {image.map((item) =>
                    <div className="show-cat"
                        style={{ background: `url(${item.url}) 0% 0% / cover` }}
                        key={item.id}
                    >
                        <button onClick={() => addToLikes(item.id)}><img src="./images/voting/like-white.svg" alt="like" /></button>
                        <button onClick={() => addToFavourites(item.id)}><img src="./images/voting/favourites-white.svg" alt="favourites" /></button>
                        <button onClick={() => addToDislikes(item.id)}><img src="./images/voting/dislike-white.svg" alt="dislike" /></button>
                    </div>
                )}
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

// fetch('https://api.thecatapi.com/v1/votes', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         'x-api-key': api_key
//     },
//     body: JSON.stringify({
//         "image_id": "2cyrHWduv",
//         "sub_id": "my-user-1234",
//         "value": 0
//     })

// })
//     .then(response => response.json())
//     .then(data => console.log(data))

export default Voting;