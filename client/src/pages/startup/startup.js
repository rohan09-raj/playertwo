import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import {HiArrowRightCircle} from 'react-icons/hi2';

import styles from './startup.module.css';

const Startup = () => {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => setOpen(!open);
  return (
    <>
      <div className={styles.startup}>
        <Header open={open} setOpen={setOpen} />
        <div className={styles.startup__main} id='home'>
          <h1>Find your</h1>
          <h1>Player Two</h1>
          <p>
            Get ready to step into a world filled with gamers. Be it a full
            blown Battle Royale or Quick Deathmatch, you'll find your player two
            with just a swipe.
          </p>
          <div className={styles.startup__buttons}>
            <button>
              <a href='#explore'>Explore</a>
            </button>
            <button onClick={handleClick}>
              <p> Start Playing </p>
              <HiArrowRightCircle size='2em' color='#035ffc' />
            </button>
          </div>
        </div>
      </div>
      <section className={styles.startup__games} id='games'>
        <div className={styles.games}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/fortnite.png`}
            alt=''
            width={'140px'}
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/apex-legend.png`}
            alt=''
            width={'80px'}
            height='60px'
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/cod_bg.png`}
            alt=''
            width={'190px'}
            height='150px'
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/csgo_bg.png`}
            alt=''
            width={'120px'}
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/valo_bg.png`}
            alt=''
            width={'100px'}
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/minecraft.png`}
            alt=''
            width={'140px'}
          />
        </div>
      </section>
      <section className={styles.startup__explore} id='explore'>
        <div className={styles.startup__explore__text}>
          <h1>
            Your <span> Player Two </span> is just a swipe away{' '}
          </h1>
          <p>
            Player Two is built for gamers all around who want to find their
            game-mate(s) Spend more time playing and less time waiting in
            loobbies for random parties. Player Two is a one stop solution that
            links with most of your existing Player IDs such as steam, epic
            games etc. and helps you find your ultimate gaming buddies.{' '}
          </p>
        </div>
        <div className={styles.startup__explore__img}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/explore.png`}
            alt=''
          />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Startup;
