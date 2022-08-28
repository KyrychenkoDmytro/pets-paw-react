import './IdBreed.scss';
import SearchPanel from '../../../Components/SearchPanel/SearchPanel';
import Breed from './Breed/Breed';
import axios from '../../../axios';

import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const IdBreed = ({ fetchBreedId }) => {

    let { breedsId } = useParams();

    const [breed, setBreed] = useState([]);
    const [id, setId] = useState('');
    const [weight, setWeight] = useState('');
    const [allUrl, setAllUrl] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            let { data } = await axios.get(`${fetchBreedId}${breedsId}`);
            console.log(data);
            setBreed(data[0].breeds[0]);
            setId(data[0].breeds[0].id);
            setWeight(data[0].breeds[0].weight.metric);
            data = data.reduce((accum, item) => {
                accum.push(item.url);
                return accum;
            }, [])
            setAllUrl(data);
            return data;
        }

        fetchData();
    }, [breedsId, fetchBreedId]);

    return (

        <div className="IdBreed">
            <SearchPanel />
            <div className='choice-wrapper'>
                <div className='flex-wrapper-back'>
                    <Link to="/breeds"><img className="btn-back" src="./images/voting/back.svg" alt="search" /></Link>
                    <div className='voting-lable'>breeds</div>
                    <div className='show-id-breed'>{id}</div>
                </div>

                <Breed urls={allUrl} breed={breed} weight={weight} />
            </div>

        </div>
    );
}

export default IdBreed;