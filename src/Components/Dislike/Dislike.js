import './Dislike.css';
import SearchPanel from '../SearchPanel/SearchPanel';

import { Link } from 'react-router-dom';

const Dislike = () => {
    return (
        <div className="Dislike">
            <SearchPanel />
            <div className='choice-wrapper'>
                <div className='flex-wrapper-back'>
                    <Link to="/"><img className="btn-back" src="../images/voting/back.svg" alt="search" /></Link>
                    <div className='voting-lable'>likes</div>
                </div>
                <div className="container-grid">
                    <div className="item grid-1"></div>
                </div>
            </div>
        </div>
    );
}

export default Dislike;