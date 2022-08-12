import './Like.scss';
import SearchPanel from '../SearchPanel/SearchPanel';
import GridItem from '../GridItem/GridItem';
import axios from '../../axios';

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Like = ({ fetchLike, api_key }) => {
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
        const fetchData = async () => {
            let { data } = await axios.get(fetchLike);
            data = data.filter((item) => item.value === 1);
            if (!data.length) setNoItemFound(true);
            else {
                setNoItemFound(false);
                setAllLiked(data);
                console.log(data);
            }
        }
        fetchData();
    }, [fetchLike])

    const deleteImage = async (e, id) => {
        if (AllImage[id]) {
            const { data } = await axios.delete(`https://api.thecatapi.com/v1/votes/${AllImage[id]}`, {
                headers: { 'x-api-key': api_key }
            });
            console.log(data);
            delete AllImage[id];
            e.target.classList.remove('no-active');
            console.log(AllImage);
        } else {
            const params = {
                "image_id": `${id}`,
                "sub_id": "my-sub-id-123321",
                "value": 1
            };
            const response = await axios.post(fetchLike, params);
            console.log(response.data.message);
            if (response.status >= 200 && response.status <= 299) {
                AllImage[id] = response.data.id;
                e.target.classList.add('no-active');
                console.log(AllImage);
            }
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