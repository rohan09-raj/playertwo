import React, { useState, useRef , useEffect} from 'react';
import styles from './ProfileCard.module.css';
import {BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs"
import Games from "../Games/Games";
import UserGameInfo from '../UserGameInfo/UserGameInfo';
import {User} from "../../mock/user_data";

const colors = ['/cod.jpg', '/valorant.jpg', '/amongus.jpeg'];
const delay = 2500;

const ProfileCard = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const [user, setUser] = useState(User || []);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);


  return (
    <>
      {/* <div className={styles.card}>
        <div className={styles.slideshow}>
          <div
            className={styles.slideshowSlider}
            style={{transform: `translate3d(${-index * 100}%, 0, 0)`}}
          >
            {colors.map((image, index) => (
              <img
                className={styles.slide}
                key={index}
                src={`${process.env.PUBLIC_URL}/assets/images${image}`}
                alt=''
              />
            ))}
          </div>

          <div className={styles.slideshowDots}>
            {colors.map((_, idx) => (
              <div
                key={idx}
                className={
                  styles.slideshowDot + `${index === idx ? ' active' : ''}`
                }
                onClick={() => {
                  setIndex(idx);
                }}
              ></div>
            ))}
          </div>
        </div>
        <div className={styles.stats}>
          <h1 className={styles.stats__username}>Mad Dog</h1>
          <div className={styles.stats__container}>
            <h2 className={styles.stats__title}>Favourite Genres</h2>
            <hr />
            <h3 className={styles.stats__detail}>Action, Racing, Combat</h3>
          </div>
          <div className={styles.stats__container}>
            <h2 className={styles.stats__title}>Games Played</h2>
            <hr />
            <h3 className={styles.stats__detail}>8</h3>
          </div>
          <div className={styles.stats__container}>
            <h2 className={styles.stats__title}>Total Playtime</h2>
            <hr />
            <h3 className={styles.stats__detail}>567 hours</h3>
          </div>
        </div>
      </div> */}

      {/* <div className={styles.card}>
        <div className={styles.card__images}>
          <img src={`${process.env.PUBLIC_URL}/assets/images/valorant.webp`} alt="" />
        </div>
        <div className={styles.card__content}>
          <div className={styles.user}> 
            
          </div>
          <div className={styles.card__slide}>
            <Games img="" game="VALORANT" genre="Shooting" gamesPlayed="5" hours="225" />
            <div className={styles.arrows}>
              <BsFillArrowLeftCircleFill size={"1.6em"} style={{"marginRight": "10px"}}/>
              <BsFillArrowRightCircleFill size={"1.6em"}/>
            </div>
          </div>
        </div>
      </div> */}
      <div className={styles.card}>
        {user.games.map(({gameName, genre, gamesPlayed, winPercentage, matchesPlayed, id, hoursPlayed, img}) => {
          return <div className={styles.games}>
            <div className={styles.card__images}>
              <img src={img} alt="" />
            </div>
            <div className={styles.card__content}>
              <UserGameInfo />
              <div className={styles.card__slide}>
                  <Games 
                    gameName={gameName} 
                    genre={genre} 
                    gamesPlayed={gamesPlayed} 
                    winPercentage={winPercentage} 
                    matchesPlayed={matchesPlayed} 
                    id={id} 
                    hoursPlayed={hoursPlayed}  
                  />
                <div className={styles.arrows}>
                  <BsFillArrowLeftCircleFill size={"1.6em"} style={{"marginRight": "10px"}}/>
                  <BsFillArrowRightCircleFill size={"1.6em"}/>
                </div>
              </div>
            </div>
          </div> 
          })}
      </div>
    </>
  );
};

export default ProfileCard;
