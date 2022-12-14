import React from 'react'
import styles from "./Mesasge.module.css";

export default function Message({ left }) {
  return (
    <>
        {left 
        ? <div className={styles.message__left}>
            <img src={`${process.env.PUBLIC_URL}/assets/images/user2.jpeg`} alt=''/>    
            <div className={styles.message__name}>
                <h4> Kanish Bodhwani </h4>
                <div className={styles.messageBox}>
                    <p> I am messaging you this as a test!dasdasdasdsadasdasbdhjashddashdhasdbasbdoasb </p>
                </div>  
            </div>  
        </div> 
        : <div className={styles.message__right}>
            <img src={`${process.env.PUBLIC_URL}/assets/images/user2.jpeg`} alt=''/>    
            <div className={styles.message__nameRight}>
                <h4> Kanish Bodhwani </h4>
                <div className={styles.messageBox__right}>
                    <p> I am messaging you this as a test!dasdasdasdsadasdasbdhjashddashdhasdbasbdoasb </p>
                </div>  
            </div>  
        </div>} 
    </>
  )
}