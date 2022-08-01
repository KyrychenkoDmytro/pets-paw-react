import './Favourite.css';
import SearchPanel from '../SearchPanel/SearchPanel';

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const api_key = "c4ead829-65a6-45da-afc9-4c5a1391c8ef";


const Favourite = () => {
    const [allBreeds, setAllBreeds] = useState([]);
    const greedRowCount = Math.ceil(allBreeds.length * 0.6) >= 3 ? Math.ceil(allBreeds.length * 0.6) : 3;
    useEffect(() => {
        fetch('https://api.thecatapi.com/v1/favourites', {
            // method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': api_key
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                data = data.filter((item) => item.image.url !== undefined);
                console.log(data);
                setAllBreeds(data);
            })
    }, [])

    const deleteFavourite = (id) => {
        fetch(`https://api.thecatapi.com/v1/favourites/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': api_key
            }
        })
            .then(response => response.json())
            .then(data => console.log(data))
    }
   
    return (
        <div className="Favourite">
            <SearchPanel />
            <div className='choice-wrapper'>
                <div className='flex-wrapper-back'>
                    <Link to="/"><img className="btn-back" src="../images/voting/back.svg" alt="search" /></Link>
                    <div className='voting-lable'>favourites</div>
                </div>
                <div className="container-grid" style={{ gridTemplateRows: `repeat(${greedRowCount}, 140px )` }}>
                    {allBreeds.map((item, index) =>
                        <div onClick={() => deleteFavourite(item.id)}
                            key={item.id}
                            style={{ background: `url(${item.image.url}) 0% 0% / cover` }}
                            className={`item grid-${index + 1}`}>
                        </div>)
                    }
                </div>
                {/* <div className="users-action">
                    <div className="user">
                        <div>22:35</div>
                        <p>Image ID: <span>fQSunHvl8</span> was added to Favourites</p>
                        <img src="./images/voting/favourites-small.svg" alt="favourites" />
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default Favourite;