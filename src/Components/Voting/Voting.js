import './Voting.scss';
import SearchPanel from '../SearchPanel/SearchPanel';
import VotingInfo from './VotingInfo/VotingInfo';

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const api_key = "c4ead829-65a6-45da-afc9-4c5a1391c8ef";

const Voting = () => {
    let date = new Date();
    let timeIsNow = `${date.getHours()}:${date.getMinutes()}`;

    const [image, setImage] = useState([]);
    const [arr, setArr] = useState([]);

    if (arr.length > 4) {
        arr.reverse();
        arr.length = 4;
        arr.reverse();
        setArr(arr);
    }

    const newImage = () => {
        fetch('https://api.thecatapi.com/v1/images/search')
            .then(response => response.json())
            .then(data => {
                data = data.filter(item => item.id !== undefined)
                setImage(data);
                console.log(data);
            })
    }
    useEffect(() => {
        newImage();
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

                if (data.message === 'SUCCESS') {
                    newImage();
                    setArr([...arr, { time: timeIsNow, imageId: id, blockName: 'Likes', srcImage: './images/voting/like-small.svg' }]);
                    console.log(data);
                }
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
                if (data.message === 'SUCCESS') {
                    newImage();
                    setArr([...arr, { time: timeIsNow, imageId: id, blockName: 'Favourites', srcImage: './images/voting/favourites-small.svg' }]);
                    console.log(data);
                }
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
                if (data.message === 'SUCCESS') {
                    newImage();
                    setArr([...arr, { time: timeIsNow, imageId: id, blockName: 'Dislikes', srcImage: './images/voting/dislike-small.svg' }]);
                    console.log(data);
                }
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
                    {arr.map((item) => <VotingInfo key={item.imageId} time={item.time} imageId={item.imageId} blockName={item.blockName} srcImage={item.srcImage} />)}
                </div>
            </div>
        </div>
    );
}

export default Voting;