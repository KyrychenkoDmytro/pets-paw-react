import './Like.css';
import SearchPanel from '../SearchPanel/SearchPanel';

import { Link } from 'react-router-dom';

const Like = () => {
    return (
        <div className="Like">
            <SearchPanel />
            <div className='choice-wrapper'>
                <div className='flex-wrapper-back'>
                    <Link to="/"><img className="btn-back" src="../images/voting/back.svg" alt="search" /></Link>
                    <div className='voting-lable'>likes</div>
                </div>
                <div className="container-grid">
                    <div className="item grid-1"></div>
                    <div className="item grid-2"></div>
                </div>
            </div>
        </div>
    );
}

export default Like;