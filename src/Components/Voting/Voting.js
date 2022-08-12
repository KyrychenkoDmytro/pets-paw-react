import './Voting.scss';
import SearchPanel from '../SearchPanel/SearchPanel';
import VotingInfo from './VotingInfo/VotingInfo';
import axios from '../../axios';

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Voting = ({ fetchLikeAndDislike, fetchFavourites }) => {

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

    const newImage = async () => {
        let { data } = await axios.get('images/search');
        data = data.filter(item => item.id !== undefined)
        setImage(data);
    }
    useEffect(() => {
        newImage();
    }, [])

    const addToLikes = async (id) => {
        const params = {
            "image_id": `${id}`,
            "sub_id": "my-sub-id-123321",
            "value": 1
        };
        const response = await axios.post(fetchLikeAndDislike, params);
        if (response.status >= 200 && response.status <= 299) {
            newImage();
            setArr([...arr, { time: timeIsNow, imageId: id, blockName: 'Likes', srcImage: './images/voting/like-small.svg' }]);
            console.log(response.data);
        }
    }

    const addToFavourites = async (id) => {
        const params = {
            "image_id": `${id}`,
            "sub_id": "my-sub-id-123321"
        };
        const response = await axios.post(fetchFavourites, params);
        if (response.status >= 200 && response.status <= 299) {
            newImage();
            setArr([...arr, { time: timeIsNow, imageId: id, blockName: 'Favourites', srcImage: './images/voting/favourites-small.svg' }]);
            console.log(response.data);
        }
    }

    const addToDislikes = async (id) => {
        const params = {
            "image_id": `${id}`,
            "sub_id": "my-sub-id-123321",
            "value": 0
        };
        const response = await axios.post(fetchLikeAndDislike, params);
        if (response.status >= 200 && response.status <= 299) {
            newImage();
            setArr([...arr, { time: timeIsNow, imageId: id, blockName: 'Likes', srcImage: './images/voting/like-small.svg' }]);
            console.log(response.data);
        }
    }

    return (
        <div className="Voting">
            <SearchPanel />
            <div className='choice-wrapper'>
                <div className='flex-wrapper-back'>
                    <Link to="/"></Link>
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