import React from 'react';
import Login from '../../pages/login/login';

import styles from './Header.module.css';

export default function Header({open, setOpen}) {
  const handleClick = () => setOpen(!open);
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.player_two}>
          {/* logo */}
          <h3> Player Two </h3>
        </div>
        <ul>
          <li>
            <a href='#home'>Home</a>
          </li>
          <li>
            <a href='#players'>Players</a>
          </li>
          <li>
            <a href='#games'>Games</a>
          </li>
          <li>
            <a href='#explore'>Explore</a>
          </li>
        </ul>
        <button className={styles.createAccount__button} onClick={handleClick}>
          Create Account
        </button>
        <Login open={open} setOpen={setOpen} />
      </nav>
    </header>
  );
}
