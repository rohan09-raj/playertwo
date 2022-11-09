import React from 'react';
import {CircularProgress} from '@mui/material';

import styles from './Loading.module.css';

export default function Loading() {
  return (
    <>
      <div className={styles.loading}>
        <CircularProgress
          sx={{
            color: '#000',
          }}
          size={80}
          thickness={4}
          value={100}
        />
      </div>
    </>
  );
}
