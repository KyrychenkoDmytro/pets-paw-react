import './Gallery.css';
import { Link } from 'react-router-dom';

const Gallery = () => {
    return(
        <div className="Gallery">
<input type="text" placeholder='Search for breeds by name' />
            <div className="btn-search"><img src="../images/voting/search.svg" alt="search" /></div>
            <nav>
                <Link to="#"><img src="./images/voting/like.svg" alt="like" /></Link>
                <Link to="#"><img src="./images/voting/favourites.svg" alt="favourites" /></Link>
                <Link to="#"><img src="./images/voting/dislike.svg" alt="dislike" /></Link>
            </nav>
            <div className='choice-wrapper'>
                <div className='flex-wrapper-back'>
                    <Link to="/"><img className="btn-back" src="../images/voting/back.svg" alt="search" /></Link>
                    <div className='voting-lable'>gallery</div>
                    <button className='gallery-upload'><img className="upload-grid" src="./images/gallery/upload.svg" alt="upload" />upload</button>
                </div>
                <div className='select-wrapper'>
                    <label>
                    <select name="breeds" id="breeds-select" className='breeds-select'>
                        <option>Random</option>
                        <option>Desc</option>
                        <option>Asc</option>
                    </select>
                    </label>
                    <select name="breeds" id="breeds-select" className='breeds-select'>
                        <option>All</option>
                        <option>Static</option>
                        <option>Animated</option>
                    </select>
                    <select name="breeds" id="breeds-select" className='breeds-select'>
                        <option>None</option>
                        <option>Abyssinian</option>
                        <option>Bengal</option>
                        <option>Aegean</option>
                        <option>American Bobtail</option>
                        <option>American Shorthair</option>
                        <option>American Wirehair</option>
                        <option>...</option>
                    </select>
                    <select name="breeds" id="breeds-select-limit" className='breeds-select select-limit'>
                        <option>5 items per page</option>
                        <option>10 items per page</option>
                        <option>15 items per page</option>
                        <option>20 items per page</option>
                    </select>
                    <button className="gallery-update"><img src="./images/gallery/update.svg" alt="update" /></button>
                </div>
                <div className="container-grid">
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

export default Gallery;