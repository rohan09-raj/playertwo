import React from 'react';
import styles from './startup.module.css';
import Header from '../components/Header/Header';
import Valo from '../images/valo_bg.png';
import Apex from '../images/apex-legend.png';
import Cod from '../images/cod_bg.png';
import Csgo from '../images/csgo_bg.png';
import Fortnite from '../images/fortnite.png';
import Minecraft from '../images/minecraft.png';
import Explore from '../images/explore.png';
import Footer from '../components/Footer/Footer';

export default function Startup() {
  return (
    <>
      <div className={styles.startup}>
        <Header />
        <div className={styles.startup__main}>
          <h1> Find your Player Two</h1>
          <p>
            {' '}
            Get ready to step into a world filled with gamers. Be it a full
            blown Battle Royale or Quick Deathmatch, you'll find your player two
            with just a swipe.
          </p>
          <div className={styles.startup__buttons}>
            <button> Explore </button>
            <button>
              <p> Start Playing </p>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='#035FFC'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                class='w-6 h-6'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.startup__games}>
        <div className={styles.games}>
          <img src={Fortnite} alt='' width={'140px'} />
          <img src={Apex} alt='' width={'80px'} height='60px' />
          <img src={Cod} alt='' width={'190px'} height='150px' />
          <img src={Csgo} alt='' width={'120px'} />
          <img src={Valo} alt='' width={'100px'} />
          <img src={Minecraft} alt='' width={'140px'} />
        </div>
      </div>
      <div className={styles.startup__explore}>
        <div className={styles.startup__explore__text}>
          <h1>
            {' '}
            Your <span> Player Two </span> is just a swipe away{' '}
          </h1>
          <p>
            {' '}
            Player Two is built for gamers all around who want to find their
            game-mate(s) Spend more time playing and less time waiting in
            loobbies for random parties. Player Two is a one stop solution that
            links with most of your existing Player IDs such as steam, epic
            games etc. and helps you find your ultimate gaming buddies.{' '}
          </p>
        </div>
        <div className={styles.startup__explore__img}>
          <img src={Explore} alt='' />
        </div>
      </div>
      <Footer />
    </>
  );
}
