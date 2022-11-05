import React, {useState} from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import {Button, Modal, Box, Typography} from '@mui/material';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/bootstrap.css';

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

const Login = ({open, setOpen}) => {
  const [openTwo, setOpenTwo] = useState(false);
  const [openThree, setOpenThree] = useState(false);
  const handleClick = () => setOpen(!open);
  const [number, setNumber] = useState('');

  const handleClickTwo = () => {
    setOpen(false);
    setOpenTwo(!openTwo);
  };

  const handleClickThree = () => {
    setOpenTwo(false);
    setOpenThree(!openThree);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClick}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography
            id='modal-modal-title'
            variant='h6'
            component='h2'
            align='center'
          >
            GET STARTED
          </Typography>
          <Button
            onClick={handleClickTwo}
            variant='contained'
            style={{margin: '10px'}}
          >
            Sign in with Mobile Number <PhoneIphoneIcon />
          </Button>
          <Button
            onClick={handleClickTwo}
            variant='contained'
            style={{margin: '10px'}}
          >
            Sign in with Google <GoogleIcon />
          </Button>
        </Box>
      </Modal>

      <Modal
        open={openTwo}
        onClose={handleClickTwo}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography
            id='modal-modal-title'
            variant='h6'
            component='h2'
            align='center'
            style={{marginBottom: '10px'}}
          >
            Enter Your Mobile Number
          </Typography>
          <PhoneInput
            country='in'
            value={number}
            onChange={(value) => {
              setNumber(value);
            }}
            enableSearch={true}
            countryCodeEditable={false}
            inputStyle={{width: '100%'}}
            searchStyle={{width: '95%', padding: '10px'}}
            enableClickOutside={false}
            searchPlaceholder='Search for your Country'
          />
          <Button
            onClick={handleClickTwo}
            variant='contained'
            style={{marginTop: '10px'}}
          >
            Continue
          </Button>
        </Box>
      </Modal>

      <Modal
        open={openTwo}
        onClose={handleClickTwo}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography
            id='modal-modal-title'
            variant='h6'
            component='h2'
            align='center'
            style={{marginBottom: '10px'}}
          >
            Enter Your Code
          </Typography>
          <Typography
            id='modal-modal-title'
            align='center'
            style={{marginBottom: '10px'}}
          >
            Enter The Code Sent To Provided Number
          </Typography>
          <PhoneInput
            country='in'
            value={number}
            onChange={(value) => {
              setNumber(value);
            }}
            enableSearch={true}
            countryCodeEditable={false}
            inputStyle={{width: '100%'}}
            searchStyle={{width: '95%', padding: '10px'}}
            enableClickOutside={false}
            searchPlaceholder='Search for your Country'
          />
          <Button
            onClick={handleClickTwo}
            variant='contained'
            style={{marginTop: '10px'}}
          >
            Continue
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Login;
