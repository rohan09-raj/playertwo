import React from 'react';

import styles from './ProfileCard.module.css';

const colors = ['#0088FE', '#00C49F', '#FFBB28'];
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
            {colors.map((backgroundColor, index) => (
              <div
                className={styles.slide}
                key={index}
                style={{backgroundColor}}
              ></div>
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
      </div>
    </>
  );
};

export default ProfileCard;
