import React from 'react'
import styles from "./GamingCard.module.css";

// `${process.env.PUBLIC_URL}/assets/images/valo__card.jpeg}`
// `${process.env.PUBLIC_URL}/assets/images/among_us.webp}`
// `${process.env.PUBLIC_URL}/assets/images/minecraft_card.png}`

export default function GamingCard({img}) {
  return (
    <div className={styles.gaming__card}>
        <img src={img} alt='cards' />
    </div>
  )
};

