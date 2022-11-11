import React from 'react'
import styles from "./Navbar.module.css";
import { AiTwotoneShop, AiFillDollarCircle } from 'react-icons/ai';
import { IoSettings, IoLibrarySharp, IoLogOut } from 'react-icons/io5';
import { ImDrive } from 'react-icons/im';
import { GiAchievement } from 'react-icons/gi';
import { BsPersonFill, BsPeopleFill } from 'react-icons/bs';
import { SiGooglemessages } from "react-icons/si";
import { IoIosPeople } from "react-icons/io";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav__logo}>
        <img
          src={`${process.env.PUBLIC_URL}/logo.svg`} height='50px' width='50px' alt='Player Two' />
        <h1 className={styles.nav__logo_text}>Player Two</h1>
      </div>
      <hr className={styles.divider1} />
      <div className={styles.navbar}>
        <button className={styles.nav__option}>
          <AiTwotoneShop size='2em' />
          <p className={styles.nav__option_text}>Games</p>
        </button>
        <button className={styles.nav__option}>
          <SiGooglemessages size='2em' />
          <p className={styles.nav__option_text}>Messages</p>
        </button>
        <button className={styles.nav__option}>
          <IoIosPeople size='2em' />
          <p className={styles.nav__option_text}>Squads</p>
        </button>
        <button className={styles.nav__option}>
          <GiAchievement size='2em' />{' '}
          <p className={styles.nav__option_text}>Achievements</p>
        </button>
        <button className={styles.nav__option}>
          <BsPeopleFill size='2em' />{' '}
          <p className={styles.nav__option_text}>Social</p>
        </button>
        <button className={styles.nav__option}>
          <IoSettings size='2em' />
          <p className={styles.nav__option_text}>Settings</p>
        </button>
      </div>
      <hr className={styles.divider2} />
      <div className={styles.logout}>
        <button className={styles.nav__option3}>
          <IoLogOut size='1.8em' />
          <p className={styles.nav__option_text}>Logout</p>
        </button>
      </div>
    </nav>
  )
};