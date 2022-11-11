import React from 'react'
import styles from "./UserGameInfo.module.css";


export default function UserGameInfo({ img, name, level }) {
  return (
    <div className={styles.user}>
      <img src={`${process.env.PUBLIC_URL}/assets/images/user2.jpeg`} alt="user" />
      <div>
        <h4> Kanish Bodhwani </h4>
        <p> Level 5 </p>
      </div>
    </div>
  )

}