import './Gallery.css';
import SearchPanel from '../SearchPanel/SearchPanel'

import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const api_key = "c4ead829-65a6-45da-afc9-4c5a1391c8ef";

const Gallery = () => {
    const [listBreeds, setListBreeds] = useState([{ name: 'none', id: '' }]);
    const [breed, setBreed] = useState('');
    const [allImages, setAllImages] = useState([]);
    const [selectedLimit, setSelectedLimit] = useState('limit=5');
    const [order, setOrder] = useState('order=RANDOM');
    const [mimeTypes, setMimeTypes] = useState('');

    const greedRowCount = selectedLimit.replace(/\D/g, '') * 0.6;

    useEffect(() => {
        fetch('https://api.thecatapi.com/v1/breeds', {
            headers: {
                'x-api-key': api_key
            }
        })
            .then((response) => response.json())
            .then((data) => {
                data = data.reduce((accum, item) => {
                    accum.push({ name: `${item.name}`, id: `${item.id}`, key: `${item.reference_image_id}` });
                    return accum;
                }, [])
                setListBreeds(data);
            });
    }, []);

    useEffect(() => {
        fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breed}&${selectedLimit}&${order}&${mimeTypes}`, {
            headers: {
                'x-api-key': api_key
            }
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.length === 0) console.log('empty');
                console.log(data);
                setAllImages(data);
            });
    }, [selectedLimit, order, breed, mimeTypes]);

    return (
        <div className="Gallery">
            <SearchPanel />
            <div className='choice-wrapper'>
                <div className='flex-wrapper-back'>
                    <Link to="/"><img className="btn-back" src="../images/voting/back.svg" alt="search" /></Link>
                    <div className='voting-lable'>gallery</div>
                    <button className='gallery-upload'><img className="upload-grid" src="./images/gallery/upload.svg" alt="upload" />upload</button>
                </div>
                <div className='select-wrapper'>
                    <label>
                        <select name="breeds" id="breeds-select" className='breeds-select' onChange={(e) => setOrder(e.target.value)}>
                            <option value="order=RANDOM">Random</option>
                            <option value="order=DESC">Desc</option>
                            <option value="order=ASC">Asc</option>
                        </select>
                    </label>
                    <select name="breeds" id="breeds-select" className='breeds-select' onChange={(e) => setMimeTypes(e.target.value)}>
                        <option value="">All</option>
                        <option value="mime_types=jpg&mime_types=png">Static</option>
                        <option value="mime_types=gif">Animated</option>
                    </select>
                    <select name="breeds" id="breeds-select" className='breeds-select' onChange={(e) => setBreed(e.target.value)}>
                        <option value="">None</option>
                        {listBreeds.map((item) => <option value={item.id} key={item.key + item.id}>{item.name}</option>)}
                    </select>
                    <select name="breeds" id="breeds-select-limit" className='breeds-select select-limit' onChange={(e) => setSelectedLimit(e.target.value)}>
                        <option value="limit=5">5 items per page</option>
                        <option value="limit=10">10 items per page</option>
                        <option value="limit=15">15 items per page</option>
                        <option value="limit=20">20 items per page</option>
                    </select>
                    <button className="gallery-update" onClick={() => window.location.reload()}><img src="./images/gallery/update.svg" alt="update" /></button>
                </div>
                <div className="container-grid" style={{ gridTemplateRows: `repeat(${greedRowCount}, 140px )` }}>
                    {allImages.map((item, index) =>
                        <div
                            key={item.id}
                            style={{ background: `url(${item.url}) 0% 0% / cover` }}
                            className={`item grid-${index + 1}`}>
                            <div className='grid-hover'>
                                <button><img src="./images/voting/favourites-small.svg" alt="favourites" /></button>
                            </div>
                        </div>)}
                </div>
            </div>
        </div>
    );
}


export default Gallery;