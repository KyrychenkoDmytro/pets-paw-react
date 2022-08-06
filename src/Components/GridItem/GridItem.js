import './GridItem.scss';

const GridItem = ({ url, index, deleteImage }) => {
    return (
        <div
            style={{ background: `url(${url}) 0% 0% / cover` }}
            className={`item grid-${index + 1}`}
            onClick={() => deleteImage()}
        >
        </div>
    );
}

export default GridItem;