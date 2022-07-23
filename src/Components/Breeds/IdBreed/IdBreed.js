import './IdBreed.css';
import { Link, NavLink } from 'react-router-dom';

const IdBreed = () => {
    return (
        <div className="IdBreed">
            <input type="text" placeholder='Search for breeds by name' />
            <div className="btn-search"><img src="../images/voting/search.svg" alt="search" /></div>
            <nav>
                <NavLink to="/likes"><img src="../images/voting/like.svg" alt="like" /></NavLink>
                <NavLink to="/favourites"><img src="../images/voting/favourites.svg" alt="favourites" /></NavLink>
                <NavLink to="/dislikes"><img src="../images/voting/dislike.svg" alt="dislike" /></NavLink>
            </nav>
            <div className='choice-wrapper'>
                <div className='flex-wrapper-back'>
                    <Link to="/breeds"><img className="btn-back" src="../images/voting/back.svg" alt="search" /></Link>
                    <div className='voting-lable'>breeds</div>
                    <div className='show-id-breed'>28</div>
                </div>
                <div className="show-cat">
                    <div className='wrapper-slides'>
                        <div className="slide-id"></div>
                        <div className="slide-id"></div>
                        <div className="slide-id"></div>
                        <div className="slide-id"></div>
                        <div className="slide-id"></div>
                    </div>
                </div>
                <h1 className='id-breed-title'>Basenji</h1>
                <div className='breed-info'>
                    <h2>Family companion cat</h2>
                    <div className="about-breed">
                        <div className='about-breed-left'>
                            <p>Temperament:</p>
                            <span>Active, Energetic, Independent, Intelligent, Gentle</span>
                        </div>
                        <div className='about-breed-right'>
                            <p>Origin: <span>United States</span></p>
                            
                            <p>Weight: <span>3 - 5 kgs</span></p>
                            
                            <p>Life span: <span>14 - 15 years</span></p>
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default IdBreed;