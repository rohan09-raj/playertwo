import React from 'react';

import styles from './ProfileCard.module.css';

const colors = ['/cod.jpg', '/valorant.jpg', '/amongus.jpeg'];
const delay = 2500;

const ProfileCard = () => {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
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
      <div className={styles.card}>
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
      </div>
    </>
  );
};

export default ProfileCard;
