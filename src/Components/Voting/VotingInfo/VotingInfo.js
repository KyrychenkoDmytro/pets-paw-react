import './VotingInfo.css';

const VotingInfo = (props) => {
    const { time, imageId, blockName, srcImage } = props;
    
    return (
        <div className="VotingInfo">
            <div className="user">
                <div>{time}</div>
                <p>Image ID: <span>{imageId}</span> was added to {blockName}</p>
                <img src={srcImage} alt={blockName} />
            </div>
        </div>

    );
}

export default VotingInfo;