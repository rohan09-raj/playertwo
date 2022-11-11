import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BasicInfo from './BasicInfo/BasicInfo';
import GamesInfo from './GamesInfo/GamesInfo';

import styles from './profileForm.module.css';

const ProfileForm = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    picture: `${process.env.PUBLIC_URL}/assets/images/profile_picture.svg`,
    games: [],
  });

  const FormTitles = ["Basic Info", "Games Info"];

  const PageDisplay = () => {
    if (page === 0) {
      return <BasicInfo formData={formData} setFormData={setFormData} />;
    } else {
      return <GamesInfo formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className={styles.form}>
      <div className={styles.progressbar}>
        <div
          style={{ width: page === 0 ? "50.0%" : "100%" }}
        ></div>
      </div>
      <div className={styles.form__container}>
        <div className={styles.header}>
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className={styles.body}>{PageDisplay()}</div>
        <div className={styles.footer}>
          <button
            disabled={page === 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          <button
            onClick={() => {
              if (page === FormTitles.length - 1) {
                navigate('../dashboard')
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileForm