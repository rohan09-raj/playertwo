import React from 'react';
import styles from './SwipeControls.module.css';
import {ImCross} from "react-icons/im";
import {BiPlus} from "react-icons/bi";
import {FiSquare, FiCircle} from "react-icons/fi";
import {GiTriangleTarget, GiCrossFlare} from "react-icons/gi";


const SwipeControls = () => {
  return (
    <>
      {/* <div className={styles.swipe}>
        <button id={styles.pass} className={styles.swipe__button}>
          <GiCrossMark size='4em' />
        </button>
        <button id={styles.superlike} className={styles.swipe__button}>
          <GiRoundStar size='4em' />
        </button>
        <button id={styles.like} className={styles.swipe__button}>
          <AiFillHeart size='4em' />
        </button>
      </div> */}
      <div className={styles.controls}>
        <div className={`${styles.controls__circle} ${styles.plus__icon}`}>
          <BiPlus color="#91B8DA" size={"2em"} />
        </div>
        <div className={`${styles.controls__circle} ${styles.circle__icon}`} >
          <FiCircle color="#F5828A" size={"1.3em"} />
        </div>
        <div className={`${styles.controls__circle} ${styles.square__icon}`}>
          <FiSquare color="#D3A6CE" size={"1.3em"} />
        </div> 
        <div className={`${styles.controls__circle} ${styles.triangle__icon}`}>
          <GiTriangleTarget color="#41CBD7" size={"1.6em"} />
        </div>
      </div>
      <div className={styles.instructions}>
        <div className={styles.ins}>
          <BiPlus size={"1.5em"} className={styles.plus__icon}/>
          <p> Remove </p>
        </div>
        <div className={styles.ins}>
          <FiCircle className={styles.circle__icon}/>
          <p> Remove </p>
        </div><div className={styles.ins}>
          <FiSquare className={styles.square__icon}/>
          <p> Remove </p>
        </div><div className={styles.ins}>
          <GiTriangleTarget className={styles.triangle__icon}/>
          <p> Remove </p>
        </div>
      </div>
    </>
  );
};

export default SwipeControls;
