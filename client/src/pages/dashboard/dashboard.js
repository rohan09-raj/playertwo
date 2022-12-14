import React, { useState } from 'react';
import {Input, InputAdornment} from '@mui/material';
import {RiSearchLine} from 'react-icons/ri';
import {TfiAngleDown} from "react-icons/tfi";
import styles from './dashboard.module.css';
import SwipeControls from '../../components/SwipeControls/SwipeControls';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import Navbar from '../../components/Navbar/Navbar';
import Messages from '../../components/Messages/Messages';

const Dashboard = () => {
  const [messages, setMessages] = useState(false)
  const handleClick = () =>  {
    setMessages(true);
  }

  return (
    <>
      <div className={styles.container}>
        <Navbar handleClick={() => handleClick(messages)}/>
        {!messages 
        ? <section className={styles.swipe}>
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
          <SwipeControls />
        </section> : <Messages />}
        <section className={styles.messages}>
          <div className={styles.user}>
            <img
              className={styles.user__picture}
              src={`${process.env.PUBLIC_URL}/assets/images/user1.jpeg`}
              alt='User'
            />
            <div className={styles.user__info}>  
                <div className={styles.user__arrow}>
                  <h4 className={styles.user__name}>Rohan Srivastava</h4>
                  <TfiAngleDown size={"1.3em"} color="#eee" className={styles.arrow__icon}/>
                </div>
              <button className={styles.user__level}> 67 level </button> 
            </div>
          </div>
          <div className={styles.chats}>
            <h1>Recent Chats</h1>
            <div className={styles.chats__messages}>
              <div className={styles.messages__user}>
                <img
                  className={styles.user__picture}
                  src={`${process.env.PUBLIC_URL}/assets/images/user2.jpeg`}
                  alt='User'
                />
                <h4 className={styles.user__name2}>Rohan</h4>
                <button className={styles.user__message}>Message</button>
              </div>
              <div className={styles.messages__user}>
                <img
                  className={styles.user__picture}
                  src={`${process.env.PUBLIC_URL}/assets/images/user4.jpeg`}
                  alt='User'
                />
                <h4 className={styles.user__name2}>Kanish</h4>
                <button className={styles.user__message}>Message</button>
              </div>
              <div className={styles.messages__user}>
                <img
                  className={styles.user__picture}
                  src={`${process.env.PUBLIC_URL}/assets/images/user5.jpeg`}
                  alt='User'
                />
                <h4 className={styles.user__name2}>Venkatesh</h4>
                <button className={styles.user__message}>Message</button>
              </div>
              <div className={styles.messages__user}>
                <img
                  className={styles.user__picture}
                  src={`${process.env.PUBLIC_URL}/assets/images/user6.jpeg`}
                  alt='User'
                />
                <h4 className={styles.user__name2}>Raj</h4>
                <button className={styles.user__message}>Message</button>
              </div>
              <div className={styles.messages__user}>
                <img
                  className={styles.user__picture}
                  src={`${process.env.PUBLIC_URL}/assets/images/user2.jpeg`}
                  alt='User'
                />
                <h4 className={styles.user__name2}>Shreyas</h4>
                <button className={styles.user__message}>Message</button>
              </div>
              <div className={styles.messages__user}>
                <img
                  className={styles.user__picture}
                  src={`${process.env.PUBLIC_URL}/assets/images/user2.jpeg`}
                  alt='User'
                />
                <h4 className={styles.user__name2}>Shreyas</h4>
                <button className={styles.user__message}>Message</button>
              </div>
            </div>
          </div>
          <div className={styles.stats}>
            <div className={styles.stats__level}>
              <h1> Level </h1>
              <p className={styles.level__style}> 67 </p>
            </div>
            <hr className={styles.divider3}/>
            <h3> Players Matched: 20  </h3>
          </div>  
        </section>
      </div>
    </>
  );
};

export default Dashboard;
