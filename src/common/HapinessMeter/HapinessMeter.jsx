import React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Emojis from './Emojis';
import Meter from './Meter';

function HapinessMeter() {
  return (
    <div
      style={{
        margin: 'auto',
        position: 'relative',
      }}
    >
      <Emojis />
      <Meter />
      <LinearProgress
        variant="determinate"
        value={10}
        sx={{
          width: '95vw',
          margin: 'auto',
          position: 'absolute',
          top: '55%',
          left: '2.5%',
        }}
      />
    </div>
  );
}

export default HapinessMeter;
