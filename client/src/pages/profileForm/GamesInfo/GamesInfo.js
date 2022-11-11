import React, { useState } from 'react'
import { Box, Button, Step, StepLabel, Stepper, Typography } from '@mui/material';
import FileBase64 from 'react-file-base64'

import styles from './GamesInfo.module.css';

const steps = [0, 1, 2];
const games = [];

const GamesInfo = ({ formData, setFormData }) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [gameData, setGameData] = useState({
    id: activeStep,
    name: "",
    genre: "",
    matchesPlayed: 0,
    winPercentage: 0,
    hoursPlayed: 0,
    img: `${process.env.PUBLIC_URL}/assets/images/add_image.svg`,
  });

  const handleNext = () => {
    setGameData({
      id: activeStep + 1,
      name: "",
      genre: "",
      matchesPlayed: 0,
      winPercentage: 0,
      hoursPlayed: 0,
      img: `${process.env.PUBLIC_URL}/assets/images/add_image.svg`,
    })

    games.push(gameData);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if (activeStep === steps.length - 1) {
      setFormData({ ...formData, games: games });
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleUpload = (file) => {
    setGameData({ ...gameData, img: file });
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep} sx={{ m: '10px' }}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={index} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 4, mb: 4, textAlign: 'center', fontFamily: 'Poppins', fontWeight: 700 }}>
            All steps completed
          </Typography>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div className={styles.game__container}>
            <input
              type="text"
              placeholder="Enter Game Name"
              value={gameData.name}
              onChange={(event) =>
                setGameData({ ...gameData, name: event.target.value })
              }
            />
            <input
              type="text"
              placeholder="Enter Game Genre"
              value={gameData.genre}
              onChange={(event) =>
                setGameData({ ...gameData, genre: event.target.value })
              }
            />
            <div className={styles.game__stats}>
              <div className={styles.game__stats_input}>
                <label>Matches Played</label>
                <input
                  type="number"
                  placeholder="0"
                  value={gameData.matchesPlayed}
                  onChange={(event) =>
                    setGameData({ ...gameData, matchesPlayed: event.target.value })
                  }
                />
              </div>
              <div className={styles.game__stats_input}>
                <label>Win %</label>
                <input
                  type="number"
                  placeholder="0"
                  value={gameData.winPercentage}
                  onChange={(event) =>
                    setGameData({ ...gameData, winPercentage: event.target.value })
                  }
                />
              </div>
              <div className={styles.game__stats_input}>
                <label>Hours Played</label>
                <input
                  type="number"
                  placeholder="0"
                  value={gameData.hoursPlayed}
                  onChange={(event) =>
                    setGameData({ ...gameData, hoursPlayed: event.target.value })
                  }
                />
              </div>
            </div>
            <div className={styles.game__stats_input}>
              <label>Upload Game Image</label>
              <div className={styles.preview__container}>
                <img src={gameData.img} alt="profile" className={styles.preview} />
                <FileBase64 onDone={(file) => handleUpload(file.base64)} />
              </div>
            </div>
          </div>

          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Button
              sx={{ color: '#28282d', fontWeight: 700, fontFamily: 'Poppins', fontSize: '1rem' }}
              disabled={activeStep === 0}
              onClick={handleBack}
            >
              Back
            </Button>
            <Button onClick={handleNext} sx={{ color: '#28282d', fontWeight: 700, fontFamily: 'Poppins', fontSize: '1rem' }}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}

export default GamesInfo