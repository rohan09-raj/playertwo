import React from 'react';
import Login from '../../pages/login';

import styles from './Header.module.css';

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => setOpen(!open);
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
        <button className={styles.createAccount__button} onClick={handleClick}>
          Create Account
        </button>
        <Login open={open} setOpen={setOpen} />
      </nav>
    </header>
  );
}
