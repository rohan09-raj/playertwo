import React from 'react'
import styles from "./Footer.module.css"
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai"
import {BsInstagram, BsFacebook} from  "react-icons/bs";

export default function Footer() {
  return (
    <div className={styles.footer}>
       <div className={styles.footer__footer}>
            <div className={styles.playerTwo}>
                <h4> Player Two </h4>
                <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters </p>
            </div>
            <div className={styles.company}>
                <h4> Company </h4>
                <ul> 
                    <li> About </li>
                    <li> Privacy Policy </li>
                    <li> Terms and Conditions </li>
                </ul>
            </div>  
            <div className={styles.social}>
                <h4> Socials </h4>
                <div className={styles.socials}>
                    <AiFillTwitterCircle size={"1.8em"}/>
                    <AiFillLinkedin size={"1.7em"} />
                    <BsInstagram size={"1.6em"}/>
                    <BsFacebook size={"1.5em"}/>
                </div>
            </div>
        </div>
        <hr width="60%" />
        <div className={styles.footer__rights}>
            <h3> @2022 Player Two Pvt. Ltd. All Rights Reserved </h3>
        </div>
    </div>
  )
}