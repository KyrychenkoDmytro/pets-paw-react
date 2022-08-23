import './Nav.scss';
import { Link, NavLink } from "react-router-dom";

const Nav = () => {

    return (
        <div className="Nav">
            <div className="Nav-logo">
                <Link to="/"><img src="./logo.svg" alt="logo" /></Link>
            </div>
            <h1>Hi, Friend!</h1>
            <p>Welcome to cat gallery.</p>
            <h2>Lets start using The Cap API!</h2>
            <nav>
                <ul>
                    <li><Link to="/voting"><img src="./images/home/vote-table.png" alt="vote-table" /></Link></li>
                    <li><Link to="/breeds"><img src="./images/home/pet-breeds.png" alt="pet-breeds" /></Link></li>
                    <li><Link to="/gallery"><img src="./images/home/images-search.png" alt="images-search" /></Link></li>
                </ul>
            </nav>
            <div className='Nav-links'>
                <NavLink to="/voting">VOTING</NavLink>
                <NavLink to="/breeds">BREEDS</NavLink>
                <NavLink to="/gallery">GALLERY</NavLink>
            </div>
        </div>
    );
}

export default Nav;