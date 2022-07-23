import './Breeds.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const breeds = ['All breeds', 'Abyssinian', 'Aegean', 'American Bobtail', 'American Curl', 'American Shorthair', 'American Wirehair', '...'];
const limits = ['Limit: 5', 'Limit: 10', 'Limit: 15', 'Limit: 20']

const Breeds = () => {
    const navigate = useNavigate();

    const [open, setOpen] = useState(false);
    const [openLimit, setOpenLimit] = useState(false);
    const [selected, setSelected] = useState(0);
    const [selectedLimit, setSelectedLimit] = useState(0);

    const selectLi = (i) => {
        setSelected(i);
        setOpen(false);
    }

    const selectLimit = (i) => {
        setSelectedLimit(i);
        setOpenLimit(false);
    }

    const idBreed = (e) => {
        if (e.target.classList.contains('item')) {
            navigate('id');
        }
    }

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
                    <button className='breeds-select select-limit'>
                        <span onClick={() => setOpenLimit(!openLimit)}>{limits[selectedLimit]}</span>
                        <img src="./images/breeds/arrow-down.svg" alt="arrow" />
                    </button>
                    {openLimit && (
                        <div id="popup-limits">
                            <ul>
                                {limits.map((item, i) => <li onClick={() => selectLimit(i)} key={item}>{item}</li>)}
                            </ul>
                        </div>
                    )}
                    <button className="breeds-sort"><img src="./images/breeds/z-a.svg" alt="z-a" /></button>
                    <button className="breeds-sort"><img src="./images/breeds/a-z.svg" alt="a-z" /></button>
                </div>
                <div className="container-grid" onClick={idBreed}>
                    <div className="item grid-1"></div>
                    <div className="item grid-2"></div>
                    <div className="item grid-3"></div>
                    <div className="item grid-4"></div>
                    <div className="item grid-5"></div>
                    <div className="item grid-6"></div>
                    <div className="item grid-7"></div>
                    <div className="item grid-8"></div>
                    <div className="item grid-9"></div>
                </div>
            </div>
        </div>
    );
}

export default Breeds;