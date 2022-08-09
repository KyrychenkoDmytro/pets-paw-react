import './GridItem.scss';

const GridItem = ({ url, index, image, deleteImage }) => {
    return (
        <div
            style={{ background: `url(${url}) 0% 0% / cover` }}
            className={`item grid-${index + 1}`}
        >
            <div className='grid-hover'>
                <button className={image ? '' : 'no-active'} onClick={(e) => deleteImage(e)}></button>
            </div>
        </div>
    );
}

export default GridItem;