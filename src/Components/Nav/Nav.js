import './Nav.css';
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="Nav">
            <div className="nav-logo">
                <img src="./logo.svg" alt="logo" />
            </div>
            <h1>Hi intern!</h1>
            <p>Welcome to MI 2022 Front-end test</p>
            <h2>Lets start using The Cap API</h2>
            <nav>
                <ul>
                    <li><Link to="#"><img src="./images/vote-table.png" alt="vote-table" /></Link></li>
                    <li><Link to="#"><img src="./images/pet-breeds.png" alt="pet-breeds" /></Link></li>
                    <li><Link to="#"><img src="./images/images-search.png" alt="images-search" /></Link></li>
                </ul>
            </nav>
            <div className='wrapper'>
                <div>VOTING</div>
                <div>BREEDS</div>
                <div>GALLERY</div>
            </div>
        </div>
    );
}

export default Nav;