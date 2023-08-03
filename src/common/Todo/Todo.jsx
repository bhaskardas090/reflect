import React from 'react'
import styles from './Todo.module.css'
import useTaskContext from '../../hooks/useTaskContext';

function Todo({ img, title, id }) {
  const { dispatch, state: tasks } = useTaskContext();
  const handleDelete = (taskId) => {
    console.log(id, 'Delete Clicked');
    dispatch({ type: 'DELETE_TASK', payload: taskId });
  };
  const handleChecked = (taskId) => {
    console.log(tasks, 'Updated Tasks ***');
    dispatch({ type: 'TASK_COMPLETE_STATUS_CHANGE', payload: taskId });
  };
  function getRandomColor() {
    // Generate a random value for each RGB component (0-255)
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    // Create the RGB color string in the format "rgb(r, g, b)"
    const color = `rgb(${red}, ${green}, ${blue})`;

    return color;
  }

  return (
    <div>
      <div className={styles.todo}>
        <input
          type="checkbox"
          className={styles.checkbox}
          onClick={() => handleChecked(id)}
        />
        <button
          className={styles.todoText}
          // onDoubleClick={() => handleDelete(id)}
        >
          {title}
        </button>
        <div
          className={styles.todoImg}
          style={{ background: getRandomColor() }}
        ></div>

        {/* <img src={img} className={styles.todoImg} /> */}
      </div>
    </div>
  );
}

export default Todo