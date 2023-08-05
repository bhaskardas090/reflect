import React from 'react';
import Box from '@mui/material/Box';
import useTaskContext from '../hooks/useTaskContext';
import {
  studentRoutine,
  workingProfessionalRoutine,
  houseWifeRoutine,
  oldAgeRoutine,
  yourWay,
} from '../helper/TaskType';
import { Link } from 'react-router-dom';

function SelectTask() {
  console.log(studentRoutine, '***');
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        // gap: '1rem',
      }}
    >
      <Link to="/" style={{ textDecoration: 'none' }}>
        <BoxSx name="STUDENT" color="#2196f3" activeTask={studentRoutine} />
      </Link>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <BoxSx
          name="WORKING PRESSIONAL"
          color="#4caf50"
          activeTask={workingProfessionalRoutine}
        />
      </Link>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <BoxSx
          name="HOUSE WIFE"
          color="#673ab7"
          activeTask={houseWifeRoutine}
        />
      </Link>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <BoxSx
          name="RETIRED OLD AGE"
          color="#ff9800"
          activeTask={oldAgeRoutine}
        />
      </Link>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <BoxSx
          name="YOUR WAY"
          color="linear-gradient(to top, #2980b9, #6dd5fa, #ffffff)"
          activeTask={yourWay}
        />
      </Link>
    </div>
  );
}

function BoxSx({ name, color, activeTask }) {
  const { dispatch } = useTaskContext();
  return (
    <Box
      sx={{
        width: '75vw',
        height: '16vh',
        color: 'white',
        display: 'flex',
        padding: '2rem',
        justifyContent: 'center',
        borderRadius: '10px',
        alignItems: 'center',
        textAlign: 'center',
        background: color,
        cursor: 'pointer',
      }}
      onClick={() => dispatch({ type: 'SELECT_TASK', payload: activeTask })}
    >
      <h2>{name}</h2>
    </Box>
  );
}

export default SelectTask;
