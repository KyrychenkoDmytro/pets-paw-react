import './Breed.scss';

import { useState } from 'react';

const Breed = ({ urls, breed, weight }) => {

    const [slideId, setSlideId] = useState(0);

    const previousSlide = () => {
        if (slideId === 0) setSlideId(urls.length - 1);
        else setSlideId(slideId - 1);
    }

    const nextSlide = () => {
        if (slideId === urls.length - 1) setSlideId(0);
        else setSlideId(slideId + 1);
    }

    return (
        <div className="Breed">
            <div className="show-cat" style={{ background: `url(${urls[slideId]}) top / cover no-repeat` }}>
                <button className='previous' onClick={previousSlide}></button>
                <button className='next' onClick={nextSlide}></button>
                <div className='wrapper-slides'>
                    {urls.map((item, index) =>
                        <div className={slideId === index ? "slide-id active" : "slide-id"}></div>
                    )}
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
                        <p>Weight: <span>{weight} kgs</span></p>
                        <p>Life span: <span>{breed.life_span} years</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Breed;