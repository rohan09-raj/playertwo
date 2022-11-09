import {Input, InputAdornment} from '@mui/material';
import React from 'react';
import {AiTwotoneShop, AiFillDollarCircle} from 'react-icons/ai';
import {IoSettings, IoLibrarySharp, IoLogOut} from 'react-icons/io5';
import {ImDrive} from 'react-icons/im';
import {GiAchievement} from 'react-icons/gi';
import {RiSearchLine} from 'react-icons/ri';
import {BsPersonFill, BsPeopleFill} from 'react-icons/bs';

import styles from './dashboard.module.css';
import SwipeControls from '../../components/SwipeControls/SwipeControls';
import ProfileCard from '../../components/ProfileCard/ProfileCard';

const Dashboard = () => {
  return (
    <>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <div className={styles.nav__logo}>
            <img
              className={styles.nav__logo_img}
              src={`${process.env.PUBLIC_URL}/assets/images/skull.png`}
              alt='Player Two Logo'
            />
            <h1 className={styles.nav__logo_text}>Player Two</h1>
          </div>   
          <hr className={styles.divider1} />
          <div className={styles.navbar}>
            <button className={styles.nav__option}>
              <AiTwotoneShop size='2em' />
              <p className={styles.nav__option_text}>Games</p>
            </button>
            <button className={styles.nav__option}>
              <IoLibrarySharp size='2em' />
              <p className={styles.nav__option_text}>Library</p>
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
        <section className={styles.swipe}>
          <Input
            className={styles.swipe__search}
            type='text'
            placeholder='Tap To Search'
            aria-label='Search'
            startAdornment={
              <InputAdornment position='start'>
                <RiSearchLine color='#696b86' size='1.3em' />
              </InputAdornment>
            }
            style={{color: 'white'}}
          />
          <ProfileCard />
          {/* <SwipeControls /> */}
        </section>
        <section className={styles.messages}>
          <div className={styles.user}>
            <h4 className={styles.user__name}>Mad Dog</h4>
            <img
              className={styles.user__picture}
              src={`${process.env.PUBLIC_URL}/assets/images/avatar.jpg`}
              alt='User'
            />
          </div>
          <div className={styles.chats}>
            <h1>Recent Chats</h1>
            <div className={styles.messages__user}>
              <h4 className={styles.user__serial}>1.</h4>
              <img
                className={styles.user__picture}
                src={`${process.env.PUBLIC_URL}/assets/images/avatar.jpg`}
                alt='User'
              />
              <h4 className={styles.user__name}>Rohan</h4>
              <button className={styles.user__message}>Message</button>
            </div>
            <div className={styles.messages__user}>
              <h4 className={styles.user__serial}>2.</h4>
              <img
                className={styles.user__picture}
                src={`${process.env.PUBLIC_URL}/assets/images/avatar.jpg`}
                alt='User'
              />
              <h4 className={styles.user__name}>Kanish</h4>
              <button className={styles.user__message}>Message</button>
            </div>
            <div className={styles.messages__user}>
              <h4 className={styles.user__serial}>3.</h4>
              <img
                className={styles.user__picture}
                src={`${process.env.PUBLIC_URL}/assets/images/avatar.jpg`}
                alt='User'
              />
              <h4 className={styles.user__name}>Venkatesh</h4>
              <button className={styles.user__message}>Message</button>
            </div>
            <div className={styles.messages__user}>
              <h4 className={styles.user__serial}>4.</h4>
              <img
                className={styles.user__picture}
                src={`${process.env.PUBLIC_URL}/assets/images/avatar.jpg`}
                alt='User'
              />
              <h4 className={styles.user__name}>Raj</h4>
              <button className={styles.user__message}>Message</button>
            </div>
            <div className={styles.messages__user}>
              <h4 className={styles.user__serial}>5.</h4>
              <img
                className={styles.user__picture}
                src={`${process.env.PUBLIC_URL}/assets/images/avatar.jpg`}
                alt='User'
              />
              <h4 className={styles.user__name}>Shreyas</h4>
              <button className={styles.user__message}>Message</button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Dashboard;
