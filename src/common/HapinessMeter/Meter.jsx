import React from 'react';

function Meter() {
  return (
    <div style={{ display: 'flex', width: '95vw', margin: 'auto' }}>
      <div
        style={{ background: '#CC191E', width: '19vw', height: '2rem' }}
      ></div>
      <div
        style={{ background: '#DC8218', width: '19vw', height: '2rem' }}
      ></div>
      <div
        style={{ background: '#FFD000', width: '19vw', height: '2rem' }}
      ></div>
      <div
        style={{ background: '#8BC43E', width: '19vw', height: '2rem' }}
      ></div>
      <div
        style={{ background: '#007839', width: '19vw', height: '2rem' }}
      ></div>
    </div>
  );
}

export default Meter;
