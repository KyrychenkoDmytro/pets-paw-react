import './Favourite.scss';
import SearchPanel from '../../Components/SearchPanel/SearchPanel';
import GridItem from '../../Components/GridItem/GridItem'
import axios from '../../axios';

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Favourite = ({ fetchFavourites, api_key }) => {
    const [allFavourites, setAllFavourites] = useState([]);
    const [noItemFaound, setNoItemFound] = useState(false);
    const greedRowCount = Math.ceil(allFavourites.length * 0.6) >= 3 ? Math.ceil(allFavourites.length * 0.6) : 3;
    let AllImage = {};

    if (allFavourites.length) {
        AllImage = allFavourites.reduce((accum, item) => {
            accum[item.image_id] = item.id;
            return accum;
        }, {})
    }

    useEffect(() => {
        const fetchData = async () => {
            let { data } = await axios.get(fetchFavourites);
            data = data.filter((item) => item.image.url !== undefined);
            if (!data.length) setNoItemFound(true);
            else {
                setNoItemFound(false);
                setAllFavourites(data);
            }
        }
        fetchData();
    }, [fetchFavourites])

    
    const deleteImage = async (e, id) => {
        if (AllImage[id]) {
            await axios.delete(`https://api.thecatapi.com/v1/favourites/${AllImage[id]}`, {
                headers: { 'x-api-key': api_key }
            });
            delete AllImage[id];
            e.target.classList.remove('no-active');
        } else {
            const params = {
                "image_id": `${id}`,
                "sub_id": "my-sub-id-123321"
            };
            const response = await axios.post(fetchFavourites, params);
            if (response.status >= 200 && response.status <= 299) {
                AllImage[id] = response.data.id;
                e.target.classList.add('no-active');
            }
        }
    }

    return (
        <div className="Favourite">
            <SearchPanel />
            <div className='choice-wrapper'>
                <div className='flex-wrapper-back'>
                    <Link to="/"></Link>
                    <div className='voting-lable'>favourites</div>
                </div>
                {noItemFaound && <div className='no-items'>No item found</div>}
                <div className="container-grid" style={{ gridTemplateRows: `repeat(${greedRowCount}, 140px )` }}>
                    {allFavourites.map((item, index) =>
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

export default Favourite;