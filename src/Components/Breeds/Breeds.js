import './Breeds.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const api_key = "DEMO_API_KEY";

const breeds = ['All breeds', 'Abyssinian', 'Aegean', 'American Bobtail', 'American Curl', 'American Shorthair', 'American Wirehair', '...'];
const limits = [{ name: 'Limit: 5', search: 'limit=5' }, { name: 'Limit: 10', search: 'limit=10' }, { name: 'Limit: 15', search: 'limit=15' }, { name: 'Limit: 20', search: 'limit=20' }];



const Breeds = () => {
    const navigate = useNavigate();

    const [allBreeds, setAllBreeds] = useState([]);
    const [open, setOpen] = useState(false);
    const [openLimit, setOpenLimit] = useState(false);
    const [selected, setSelected] = useState(0);
    const [selectedLimit, setSelectedLimit] = useState({ name: 'Limit: 5', search: 'limit=5' });

    useEffect(() => {
        fetch(`https://api.thecatapi.com/v1/images/search?${selectedLimit.search}`, {
            headers: {
                'x-api-key': api_key
            }
        })
            .then((response) => response.json())
            .then((data) => setAllBreeds(data));
    }, [selectedLimit]);

    const selectLi = (i) => {
        setSelected(i);
        setOpen(false);
    }

    const selectLimit = (item) => {
        setSelectedLimit(item);
        setOpenLimit(false);
    }

    const idBreed = (item) => {
        navigate(item.reference_image_id);
    }

    console.log(allBreeds);
    console.log(selectedLimit);

    return (
        <div className="Breeds">
            <input type="text" placeholder='Search for breeds by name' />
            <div className="btn-search"><img src="../images/voting/search.svg" alt="search" /></div>
            <nav>
                <NavLink to="/likes"><img src="./images/voting/like.svg" alt="like" /></NavLink>
                <NavLink to="/favourites"><img src="./images/voting/favourites.svg" alt="favourites" /></NavLink>
                <NavLink to="/dislikes"><img src="./images/voting/dislike.svg" alt="dislike" /></NavLink>
            </nav>
            <div className='choice-wrapper'>
                <div className='flex-wrapper-back'>
                    <Link to="/"><img className="btn-back" src="../images/voting/back.svg" alt="search" /></Link>
                    <div className='voting-lable'>breeds</div>
                    <button name="breeds" className='breeds-select' onClick={() => setOpen(!open)}>
                        <span>{breeds[selected]}</span>
                        <img src="./images/breeds/arrow-down.svg" alt="arrow" />
                    </button>
                    {
                        open && (
                            <div id="popup-breeds">
                                <ul>
                                    {breeds.map((item, i) => <li onClick={() => selectLi(i)} key={item}>{item}</li>)}
                                </ul>
                            </div>
                        )
                    }
                    <button className='breeds-select select-limit' onClick={() => setOpenLimit(!openLimit)}>
                        <span>{selectedLimit.name}</span>
                        <img src="./images/breeds/arrow-down.svg" alt="arrow" />
                    </button>
                    {openLimit && (
                        <div id="popup-limits">
                            <ul>
                                {limits.map((item) => <li onClick={() => selectLimit(item)} key={item.name}>{item.name}</li>)}
                            </ul>
                        </div>
                    )}
                    <button className="breeds-sort"><img src="./images/breeds/z-a.svg" alt="z-a" /></button>
                    <button className="breeds-sort"><img src="./images/breeds/a-z.svg" alt="a-z" /></button>
                </div>
                <div className="container-grid">
                    {allBreeds.map((item, index) => <div onClick={() => idBreed(item)} key={item.id} style={{ background: `url(${item.url}) 0% 0% / cover` }} className={`item grid-${index + 1}`}></div>)}
                </div>
            </div>
        </div>
    );
}

// style={{ background: `url(${item.image.url}) 0% 0% / cover` }}

export default Breeds;