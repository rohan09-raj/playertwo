import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import { Modal, Box } from '@mui/material';
import PhoneInput from 'react-phone-input-2';
import OTPInput from 'otp-input-react';


import 'react-phone-input-2/lib/bootstrap.css';
import styles from './login.module.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '6px',
  boxShadow: 24,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'justify',
  p: 4,
};

const styleTwo = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  borderRadius: '6px',
  boxShadow: 24,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'justify',
  p: 4,
};

const Login = ({ open, setOpen }) => {
  const [openTwo, setOpenTwo] = useState(false);
  const [openThree, setOpenThree] = useState(false);
  const handleClick = () => setOpen(!open);
  const [number, setNumber] = useState('');
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();
  const [valid, setValid] = useState(false);
  const [validOtp, setValidOtp] = useState(false);

  const handleClickTwo = () => {
    setOpen(false);
    setOpenTwo(!openTwo);
  };

  const handleClickThree = () => {
    if (valid) {
      setOpenTwo(false);
      setOpenThree(!openThree);
    }
  };

  const handleNavigation = () => {
    if (validOtp) {
      setOpenThree(false);
      navigate('/profile');
    };
  }

  const handleValidOtp = () => {
    if (otp.length < 6) {
      setValidOtp(false);
      console.log('hello')
    }
    else {
      setValidOtp(true);
      console.log('true')
    }
  };

  // call handleValidOtp function when otp changes
  useEffect(() => {
    handleValidOtp();
  }, [otp]);

  return (
    <>
      {/* GetStartedModal */}
      <Modal
        open={open}
        onClose={handleClick}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <h1 className={styles.modal__title}>GET STARTED</h1>
          <button onClick={handleClickTwo} className={styles.modal__button}>
            Sign in with Mobile Number <PhoneIphoneIcon />
          </button>
          <button onClick={handleClickTwo} className={styles.modal__button}>
            Sign in with Google <GoogleIcon />
          </button>
        </Box>
      </Modal>

      {/* MobileNumberModal */}
      <Modal
        open={openTwo}
        onClose={handleClickTwo}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <h1 className={styles.modal__title}>Enter Your Mobile Number</h1>
          <PhoneInput
            country='in'
            value={number}
            onChange={(value) => {
              setNumber(value);
            }}
            isValid={(value) => {
              if (!value.match(/^[0-9]{12}$/)) {
                setValid(false);
                return 'Invalid mobile number!';
              } else {
                setValid(true);
                return true;
              }
            }}
            enableSearch={true}
            countryCodeEditable={false}
            inputStyle={{
              width: '100%',
              margin: '20px 0px',
              border: '3px solid #28282d',
              fontFamily: 'Poppins',
            }}
            searchStyle={{ width: '95%', padding: '10px' }}
            enableClickOutside={false}
            searchPlaceholder='Search for your Country'
          />
          <button onClick={handleClickThree} className={styles.modal__button}>
            Continue
          </button>
        </Box>
      </Modal>

      {/* OTPModal */}
      <Modal
        open={openThree}
        onClose={handleClickThree}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={styleTwo}>
          <h1 className={styles.modal__title}>Enter Your Code</h1>
          <h3 className={styles.modal__subtitle}>
            Enter The Code Sent To Provided Number
          </h3>
          <OTPInput
            value={otp}
            onChange={(val) => setOtp(val)}
            autoFocus
            OTPLength={6}
            otpType='number'
            disabled={false}
            secure
            style={{
              margin: '10px 0px 20px 20px',
            }}
            inputStyles={{
              border: '3px solid #28282d',
              borderRadius: '6px',
              align: 'center',
              fontWeight: '400',
              fontSize: '60px',
              height: '60px',
              width: '60px',
              color: '#28282d',
            }}
          />
          {!validOtp && <p className={styles.modal__error}>Invalid OTP</p>}
          <button className={styles.modal__resend}>RESEND</button>
          <button onClick={handleNavigation} className={styles.modal__button}>
            Continue
          </button>
        </Box>
      </Modal>
    </>
  );
};

export default Login;
