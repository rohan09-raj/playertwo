import React from 'react'
import styles from "./Header.module.css";


export default function Header() {
  return (
    <header className={styles.header}>
        <nav className={styles.navbar}>
          <div className={styles.player_two}>
            {/* logo */}
            <h3> Player Two </h3>
          </div>
          <ul>
            <li> Home </li>
            <li> Players </li>
            <li> Games </li>
            <li> Explore </li>
          </ul>
          <button className={styles.createAccount__button}> Create Account </button>
        </nav>
    </header> 
  )
};

