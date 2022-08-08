import './Dislike.scss';
import SearchPanel from '../SearchPanel/SearchPanel';
import GridItem from '../GridItem/GridItem';

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const api_key = "c4ead829-65a6-45da-afc9-4c5a1391c8ef";

const Dislike = () => {

    const [allDisliked, setAllDisliked] = useState([]);
    const [noItemFaound, setNoItemFound] = useState(false);
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
                data = data.filter((item) => item.value === 0);
                if (data.length === 0) {
                    setNoItemFound(true);
                } else {
                    setNoItemFound(false);
                    setAllDisliked(data);
                    console.log(data);
                }
            })
    }, [])

    const deleteImage = (id) => {
        fetch(`https://api.thecatapi.com/v1/votes/${id}`, {
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
        <div className="Dislike">
            <SearchPanel />
            <div className='choice-wrapper'>
                <div className='flex-wrapper-back'>
                    <Link to="/"></Link>
                    <div className='voting-lable'>Dislikes</div>
                </div>
                {noItemFaound && <div className='no-items'>No item found</div>}
                <div className="container-grid" style={{ gridTemplateRows: `repeat(${greedRowCount}, 140px )` }}>
                    {allDisliked.map((item, index) =>
                        <GridItem
                            key={item.id}
                            url={item.image.url}
                            index={index}
                            deleteImage={() => deleteImage(item.id)}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Dislike;