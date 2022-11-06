import React from 'react';
import {GiCrossMark, GiRoundStar} from 'react-icons/gi';
import {AiFillHeart} from 'react-icons/ai';

import styles from './SwipeControls.module.css';

const SwipeControls = () => {
  return (
    <>
      <div className={styles.swipe}>
        <button id={styles.pass} className={styles.swipe__button}>
          <GiCrossMark size='4em' />
        </button>
        <button id={styles.superlike} className={styles.swipe__button}>
          <GiRoundStar size='4em' />
        </button>
        <button id={styles.like} className={styles.swipe__button}>
          <AiFillHeart size='4em' />
        </button>
      </div>
    </>
  );
};

export default SwipeControls;
