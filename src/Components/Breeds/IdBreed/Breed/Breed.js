import './Breed.scss';

import { useEffect, useState } from 'react';

const Breed = (props) => {
    const [url, setUrl] = useState({});
    const [breed, setBreed] = useState('');
    const [weight, setWeight] = useState('');
    
    useEffect(() => {
        setUrl(props.url);
        setBreed(props.breed);
        setWeight(props.weight);
    }, [props]);

    return (
        <div className="Breed">
            <div className="show-cat" style={{ background: `url(${url}) 0% 0% / cover` }}>
                <div className='wrapper-slides'>
                    <div className="slide-id"></div>
                    <div className="slide-id"></div>
                    <div className="slide-id"></div>
                    <div className="slide-id"></div>
                    <div className="slide-id"></div>
                </div>
            </div>
            <h1 className='id-breed-name'>{breed.name}</h1>
            <div className='breed-info'>
                <h2>Family companion cat</h2>
                <div className="about-breed">
                    <div className='about-breed-left'>
                        <p>Temperament:</p>
                        <span>{breed.temperament}</span>
                    </div>
                    <div className='about-breed-right'>
                        <p>Origin: <span>{breed.origin}</span></p>
                        <p>Weight: <span>{weight}</span></p>
                        <p>Life span: <span>{breed.life_span}</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Breed;