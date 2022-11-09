import React from 'react'
import styles from "./Games.module.css";

export default function Games({gameName, genre, hoursPlayed, matchesPlayed, winPercentage, id}) {
    return (
        <div className={styles.game} id={id}>
            <h1> <i> {gameName} </i>  </h1>
            <div className={styles.game__stats}>
                <div className={styles.game__stats__div}> 
                    <h3> <i> Genre: </i></h3> 
                    <p><i> {genre}</i></p>
                </div>
                <hr className={styles.game__hr}/>
                <div className={styles.game__stats__div}> 
                    <h3> <i> Games played:</i> </h3> 
                    <p> <i> {matchesPlayed} </i> </p>
                </div> 
                <hr className={styles.game__hr} />
                <div className={styles.game__stats__div}> 
                    <h3> <i> Total Playtime: </i>  </h3> 
                    <p> <i> {hoursPlayed} hours </i> </p>
                </div>
                <hr />
                <div className={styles.game__stats__div}> 
                    <h3> <i> Win  </i>  </h3> 
                    <p> <i> {winPercentage} </i> </p>
                </div>
            </div>
        </div>
  )
};