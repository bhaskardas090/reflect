import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { v4 as uuid } from 'uuid';

import styles from './TodoAddForm.module.css';
import useTaskContext from '../../hooks/useTaskContext';

function TodoAddForm({ showTodoForm, setShowTodoForm, time }) {
  const [task, setTask] = useState();
  const { dispatch } = useTaskContext();

  // Adding the new task in the global todo list
  const handleSubmit = () => {
    const newTask = {
      id: uuid(),
      task: task,
      complete: false,
      time: time.toLowerCase(),
      img: '/HomeAssets/GratitudeImg.png',
    };
    dispatch({ type: 'ADD_TASK', payload: newTask });

    setTask('');
    setShowTodoForm(false);
  };

  return (
    <>
      <Drawer
        sx={{}}
        anchor="bottom"
        open={showTodoForm}
        onClose={() => setShowTodoForm(false)}
        // transitionDuration={{ enter: 500, exit: 500 }}
      >
        <div className={styles.todoForm}>
          <div className={styles.todoFormContainer}>
            <TextField
              label="Enter you task"
              variant="outlined"
              sx={{ width: '75vw' }}
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <Button
              variant="outlined"
              sx={{ width: '75vw' }}
              onClick={handleSubmit}
            >
              Add Task
            </Button>
          </div>
        </div>
      </Drawer>
    </>
  );
}

export default TodoAddForm;
