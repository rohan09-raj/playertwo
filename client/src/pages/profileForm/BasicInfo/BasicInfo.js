import React from "react";
import FileBase64 from 'react-file-base64';

import styles from './BasicInfo.module.css';

const BasicInfo = ({ formData, setFormData }) => {
  const handleUpload = (file) => {
    setFormData({ ...formData, picture: file });
  }

  return (
    <div className={styles.basic__container}>
      <div className={styles.preview__container}>
        <img src={formData.picture} alt="profile" className={styles.preview} />
        <FileBase64 onDone={(file) => handleUpload(file.base64)} />
      </div>
      <input
        type="text"
        placeholder="Enter your Name"
        value={formData.name}
        onChange={(event) =>
          setFormData({ ...formData, name: event.target.value })
        }
      />
      <input
        type="text"
        placeholder="Enter your Username"
        value={formData.username}
        onChange={(event) =>
          setFormData({ ...formData, username: event.target.value })
        }
      />
    </div>
  );
}

export default BasicInfo;