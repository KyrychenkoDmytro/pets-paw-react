import './IdBreed.scss';
import SearchPanel from '../../SearchPanel/SearchPanel';
import Breed from './Breed/Breed';

import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const IdBreed = () => {
    const api_key = "c4ead829-65a6-45da-afc9-4c5a1391c8ef";

    let { breedsId } = useParams();
    console.log(breedsId);

    const [breed, setBreed] = useState([]);
    const [id, setId] = useState('');
    const [weight, setWeight] = useState('');
    const [allUrl, setAllUrl] = useState([]);

    useEffect(() => {
        fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedsId}&limit=5`,
            {
                headers: {
                    'x-api-key': api_key
                }
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setBreed(data[0].breeds[0]);
                // setUrl(data[0].url);
                setId(data[0].breeds[0].id);
                setWeight(data[0].breeds[0].weight.metric);
                data = data.reduce((accum, item) => {
                    accum.push(item.url);
                    return accum;
                }, [])
                setAllUrl(data);
            });
    }, [breedsId]);

console.log(allUrl);

    return (

        <div className="IdBreed">
            <SearchPanel />
            <div className='choice-wrapper'>
                <div className='flex-wrapper-back'>
                    <Link to="/breeds"><img className="btn-back" src="../images/voting/back.svg" alt="search" /></Link>
                    <div className='voting-lable'>breeds</div>
                    <div className='show-id-breed'>{id}</div>
                </div>

                <Breed urls={allUrl} breed={breed} weight={weight} />
            </div>

        </div>
    );
}

export default IdBreed;