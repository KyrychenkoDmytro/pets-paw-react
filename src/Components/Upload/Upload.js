import './Upload.css';

import { useState } from 'react';

const api_key = "c4ead829-65a6-45da-afc9-4c5a1391c8ef";

const Upload = ({ openUpload, setOpenUpload }) => {
    const [image, setImage] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [button, setButton] = useState(false);
    const [thanksBlock, setThanksBlock] = useState(false);
    const [errorBlock, setErrorBlock] = useState(false);

    const fileReader = new FileReader();
    fileReader.onloadend = () => {
        setImageUrl(fileReader.result);
    }

    const uploadImage = (e) => {
        e.preventDefault();
        setThanksBlock(false);
        setErrorBlock(false);
        if (e.target.files && e.target.files.length) {
            const file = e.target.files[0];
            console.log(file);
            setImage(file);
            setButton(true);
            fileReader.readAsDataURL(file);
        }
    }

    const dropImage = (e) => {
        e.preventDefault();
        setThanksBlock(false);
        setErrorBlock(false);
        if (e.dataTransfer.files && e.dataTransfer.files.length) {
            const file = e.dataTransfer.files[0];
            console.log(file);
            setImage(file);
            setButton(true);
            fileReader.readAsDataURL(file);
        }
    }

    const dragEnterImage = (e) => {
        e.preventDefault();
    }

    const dragOverImage = (e) => {
        e.preventDefault();
    }

    const uploadToServer = () => {
        const formData = new FormData();
        formData.append('file', image);
        fetch('https://api.thecatapi.com/v1/images/upload', {
            method: 'POST',
            headers: {
                // 'Content-Type': 'multipart/form-data',
                'x-api-key': api_key
            },
            body: formData
        })
            .then(response => {
                if (response.status >= 200 && response.status <= 299) {
                    return response.json();
                } else {
                    throw Error(response.statusText);
                }
            })
            .then(data => {
                console.log(data);
                setImageUrl('');
                setImage('');
                setThanksBlock(true);
                setButton(false);
            }).catch((error) => {
                console.log(error);
                setErrorBlock(true);
                setButton(false);
            })
    }

    return (
        <div className={openUpload ? 'Upload active' : 'Upload'} onClick={() => { setOpenUpload(false); setThanksBlock(false); setErrorBlock(false); }}>
            <div className="upload-container" onClick={(e) => e.stopPropagation()}>
                <button className='upload-close' onClick={() => { setOpenUpload(false); setThanksBlock(false); setErrorBlock(false); }}>&times;</button>
                <h1>Upload a .jpg or .png Cat Image</h1>
                <p>Any uploads must comply with the <a href="https://thecatapi.com/privacy">upload guidelines</a> or face deletion.</p>
                <label className={errorBlock ? 'error' : ''} onDrop={dropImage} onDragEnter={dragEnterImage} onDragOver={dragOverImage}>
                    <input type="file" accept='image/jpeg,image/png' onChange={(e) => uploadImage(e)} />
                    <img src={imageUrl ? imageUrl : "./images/gallery/phone-image.svg"} alt="your-img" />
                    {image ? '' : <span><b>Drag here</b> your file or <b>Click here</b> to upload</span>}
                </label>
                {image ? <p>Image File Name: {image.name}</p> : <p>No file selected</p>}
                {button ? <button onClick={uploadToServer} className='upload-photo'>upload photo</button> : ''}
                {thanksBlock ? <div className='thanks-block'>Thanks for the Upload - Cat found!</div> : ''}
                {errorBlock ? <div className='error-block'>No Cat found - try a different one</div> : ''}
            </div>
        </div>
    );
}

export default Upload;