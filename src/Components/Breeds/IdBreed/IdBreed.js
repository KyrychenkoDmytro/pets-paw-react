import './IdBreed.css';
import Breed from './Breed/Breed';

import { Link, NavLink, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const IdBreed = () => {
    const api_key = "DEMO_API_KEY";

    let { breedsId } = useParams();

    const [breed, setBreed] = useState('');
    const [url, setUrl] = useState('');
    const [id, setId] = useState('');
    const [weight, setWeight] = useState('');

    useEffect(() => {
        fetch(`https://api.thecatapi.com/v1/breeds`,
            {
                headers: {
                    'x-api-key': api_key
                }
            })
            .then(response => response.json())
            .then(data => {
                data = data.filter(item => item.id === breedsId)
                console.log(data);
                setBreed(...data);
                setUrl(data[0].image.url);
                setId(data[0].id);
                setWeight(data[0].weight.imperial);
            });
    }, [breedsId]);
    console.log(breed);
    return (

        <div className="IdBreed">
            <input type="text" placeholder='Search for breeds by name' />
            <div className="btn-search"><img src="../images/voting/search.svg" alt="search" /></div>
            <nav>
                <NavLink to="/likes"><img src="../images/voting/like.svg" alt="like" /></NavLink>
                <NavLink to="/favourites"><img src="../images/voting/favourites.svg" alt="favourites" /></NavLink>
                <NavLink to="/dislikes"><img src="../images/voting/dislike.svg" alt="dislike" /></NavLink>
            </nav>
            <div className='choice-wrapper'>
                <div className='flex-wrapper-back'>
                    <Link to="/breeds"><img className="btn-back" src="../images/voting/back.svg" alt="search" /></Link>
                    <div className='voting-lable'>breeds</div>
                    <div className='show-id-breed'>{id}</div>
                </div>
                <Breed url={url} breed={breed} weight={weight}/>
            </div>

        </div>
    );
}

export default IdBreed;