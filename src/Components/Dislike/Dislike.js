import './Dislike.css';
import SearchPanel from '../SearchPanel/SearchPanel';

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const api_key = "c4ead829-65a6-45da-afc9-4c5a1391c8ef";

const Dislike = () => {
    
    const [allDisliked, setAllDisliked] = useState([]);
    const greedRowCount = Math.ceil(allDisliked.length * 0.6) >= 3 ? Math.ceil(allDisliked.length * 0.6) : 3;

    useEffect(() => {
        fetch('https://api.thecatapi.com/v1/votes', {
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': api_key
            },
        })
            .then(response => response.json())
            .then(data => {
                data = data.filter((item)=> item.value === 0)
                setAllDisliked(data);
                console.log(data);
            })
    }, [])

    return (
        <div className="Dislike">
            <SearchPanel />
            <div className='choice-wrapper'>
                <div className='flex-wrapper-back'>
                    <Link to="/"><img className="btn-back" src="../images/voting/back.svg" alt="search" /></Link>
                    <div className='voting-lable'>Dislikes</div>
                </div>
                <div className="container-grid" style={{ gridTemplateRows: `repeat(${greedRowCount}, 140px )` }}>
                    {allDisliked.map((item, index) =>
                        <div
                            key={item.id}
                            style={{ background: `url(${item.image.url}) 0% 0% / cover` }}
                            className={`item grid-${index + 1}`}>
                        </div>)}
                </div>
            </div>
        </div>
    );
}

export default Dislike;