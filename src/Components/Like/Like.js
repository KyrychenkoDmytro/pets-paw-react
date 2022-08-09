import './Like.scss';
import SearchPanel from '../SearchPanel/SearchPanel';
import GridItem from '../GridItem/GridItem';

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
const api_key = "c4ead829-65a6-45da-afc9-4c5a1391c8ef";

const Like = () => {
    const [allLiked, setAllLiked] = useState([]);
    const [noItemFaound, setNoItemFound] = useState(false);
    const greedRowCount = Math.ceil(allLiked.length * 0.6) >= 3 ? Math.ceil(allLiked.length * 0.6) : 3;
    let AllImage = {};
    if (allLiked.length) {
        AllImage = allLiked.reduce((accum, item) => {
            accum[item.image_id] = item.id;
            return accum;
        }, {})
    }
    console.log(AllImage);

    useEffect(() => {
        fetch('https://api.thecatapi.com/v1/votes', {
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': api_key
            },
        })
            .then(response => response.json())
            .then(data => {
                data = data.filter((item) => item.value === 1)
                if (data.length === 0) {
                    setNoItemFound(true);
                } else {
                    setNoItemFound(false);
                    setAllLiked(data);
                    console.log(data);
                }
            })
    }, [])

    const deleteImage = (e, id) => {
        if (AllImage[id]) {
            e.target.classList.remove('no-active');

            fetch(`https://api.thecatapi.com/v1/votes/${AllImage[id]}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': api_key
                }
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    delete AllImage[id];
                    console.log(AllImage);
                })
        } else {
            e.target.classList.add('no-active');

            fetch('https://api.thecatapi.com/v1/votes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': api_key
                },
                body: JSON.stringify({
                    "image_id": `${id}`,
                    "sub_id": "my-sub-id-123321",
                    "value": 1
                })
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    if (data.message === 'SUCCESS') AllImage[id] = data.id;
                    console.log(AllImage);
                })
        }

    }

    return (
        <div div className="Like" >
            <SearchPanel />
            <div className='choice-wrapper'>
                <div className='flex-wrapper-back'>
                    <Link to="/"></Link>
                    <div className='voting-lable'>likes</div>
                </div>
                {noItemFaound && <div className='no-items'>No item found</div>}
                <div className="container-grid" style={{ gridTemplateRows: `repeat(${greedRowCount}, 140px )` }}>
                    {allLiked.map((item, index) =>
                        <GridItem
                            key={item.id}
                            url={item.image.url}
                            index={index}
                            Image={AllImage[item.image_id]}
                            deleteImage={(e) => deleteImage(e, item.image_id)}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Like;