import React from 'react'
import styles from "./Messages.module.css";
import Message from '../Message/Message';
import {FiSearch} from "react-icons/fi";
import {IoCall} from "react-icons/io5";
import { TiAttachmentOutline } from "react-icons/ti";
import { FaMicrophone } from 'react-icons/fa';
import { RiSendPlaneFill } from "react-icons/ri";
import {TbGridDots} from "react-icons/tb";


export default function Messages() {
  return (
    <div className={styles.messages}> 
      <div className={styles.messages__header}>
        <div className={styles.messages__user}>
          <img src={`${process.env.PUBLIC_URL}/assets/images/user2.jpeg`} alt=''/>
          <div className={styles.user__info}>
            <h4> Rohan Srivastava </h4>
            <p> 22 games </p>
          </div>
        </div>
        <div className={styles.messages__icons}>
          <IoCall size={"1.4em"}/>
          <FiSearch size={"1.4em"}/>
          <div className={styles.border__left}>
            <TbGridDots size={"1.4em"} style={{"marginLeft": "10px"}}/>
          </div>
        </div>
      </div>  
      <div className={styles.messages__message}> 
        <Message left={true}/>
        <Message left={false}/>
        <Message left={true}/>
        <Message left={false}/>
        <Message left={true}/>
        <Message left={false}/>
        <Message left={true}/>
      </div>
      <div className={styles.messages__input}>
        <img src={`${process.env.PUBLIC_URL}/assets/images/user1.jpeg`} alt='profile' /> 
        <div className={styles.relative__div}>
          <input placeholder='Type Something...' className={styles.input__field} type="text" />
          <div className={styles.icons}>  
            <TiAttachmentOutline size={"1.2em"} className={styles.attach__icon} />
            <div className={styles.icons__div}>
              <FaMicrophone size={"1.2em"} className={styles.microphone__icon} />
              <hr style={{height: "17px"}} />
              <RiSendPlaneFill size={"1.2em"} className={styles.send__icon} />
            </div>
          </div>  
        </div>
      </div>  
    </div>
  )
};
