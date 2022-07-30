import './IdBreed.css';
import SearchPanel from '../../SearchPanel/SearchPanel';
import Breed from './Breed/Breed';

import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const IdBreed = () => {
    const api_key = "c4ead829-65a6-45da-afc9-4c5a1391c8ef";

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
    
    return (

        <div className="IdBreed">
           <SearchPanel />
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