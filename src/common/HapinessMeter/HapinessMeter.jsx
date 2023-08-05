import React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Emojis from './Emojis';
import Meter from './Meter';
import useTaskContext from '../../hooks/useTaskContext';

function HapinessMeter() {
  const { state } = useTaskContext();
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
        value={state.totalReward}
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
