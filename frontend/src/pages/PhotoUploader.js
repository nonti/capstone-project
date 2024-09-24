import React, { useState } from 'react';
import axios from 'axios';
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

const PhotoUploader = ({ addedPhotos = [], onChange }) => { // Default to empty array
  const [photoLink, setPhotoLink] = useState('');

  const addPhotoByLink = async (e) => {
    e.preventDefault();
    const { data: filename } = await axios.post('/upload-by-link', { link: photoLink });
    onChange(prev => [...prev, filename]);
    setPhotoLink('');
  };

  const uploadPhoto = (e) => {
    const files = e.target.files;
    const data = new FormData();
    for (let i = 0; i < files.length; i++) {
      data.append('photos', files[i]);
    }

    axios.post('/upload', data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(response => {
      const { data: filenames } = response;
      onChange(prev => [...prev, ...filenames]);
    });
  };

  const removePhoto = (e, filename) => {
    e.preventDefault();
    onChange([...addedPhotos].filter(photo => photo !== filename));
  };

  const selectAsMainPhoto = (e, filename) => {
    e.preventDefault();
    onChange([filename, ...addedPhotos.filter(photo => photo !== filename)]);
  };

  return (
    <div>
      <div className="inputs upload">
        <input
          type="text"
          placeholder={"Add images by link"}
          value={photoLink}
          onChange={e => setPhotoLink(e.target.value)}
        />
        <div  variant="outlined" onClick={addPhotoByLink}>
          <AddIcon className="icons-add" />
        </div>
      </div>
      {addedPhotos.length > 0 && addedPhotos.map(link => (
        <div key={link}>
          <img className='img-upload' src={'http://localhost:4000/uploads/' + link} alt='' />
          <Button variant="outlined" onClick={e => removePhoto(e, link)}>
            <CancelOutlinedIcon className="icons" />
          </Button>
          <Button variant="outlined" onClick={e => selectAsMainPhoto(e, link)}>
            {link === addedPhotos[0] ? (
              <span className="selected-main-photo">Main Photo</span>
            ) : (
              <span className="not-selected-main-photo">Set as main photo</span>
            )}
          </Button>
        </div>
      ))}
      <div className="file-input-container">
      <input
        type="file"
        id="file-upload"
        className="file-input"
        onChange={uploadPhoto}
        accept="image/*"
        multiple
      />
      <label htmlFor="file-upload" className="file-input-label">
        <span className="upload-text">Upload Files</span>
        <span className="upload-icon-container">
          <UploadFileIcon className="upload-icon" />
        </span>
      </label>
    </div>
    </div>
  );
};

export default PhotoUploader;
