import './VotingInfo.scss';

const VotingInfo = ({ time, imageId, blockName, srcImage }) => {

    return (
        <>
            <div className="user">
                <div>{time}</div>
                <p>Image ID: <span>{imageId}</span> was added to {blockName}</p>
                <img src={srcImage} alt={blockName} />
            </div>
        </>

    );
}

export default VotingInfo;