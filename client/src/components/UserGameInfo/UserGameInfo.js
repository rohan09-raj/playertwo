import React from 'react'
import styles from "./UserGameInfo.module.css";


export default function UserGameInfo({ img, name, level }) {
  return (
   <div className={styles.user}> 
        <img src={img} alt="user" />
        <div>
            <h4> {name} </h4>
            <p> {level} </p>
        </div>
    </div>
  )

}