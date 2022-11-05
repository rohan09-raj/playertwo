import React, {useState} from 'react';
import {Button} from '@mui/material';
import Login from './pages/login';

export default function App() {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);

  return (
    <div>
      <Button onClick={handleClick} variant='contained'>
        Login
      </Button>
      <Login open={open} setOpen={setOpen} />
    </div>
  );
}
