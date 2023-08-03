import React from 'react'
import styles from './Todo.module.css'
import useTaskContext from '../../hooks/useTaskContext';

function Todo({ img, title, id }) {
  const { dispatch } = useTaskContext();
  const handleDelete = (taskId) => {
    console.log(id, 'Delete Clicked');
    dispatch({ type: 'DELETE_TASK', payload: taskId });
  };
  return (
    <div>
      <div className={styles.todo}>
        <input type="checkbox" className={styles.checkbox} />
        <button
          className={styles.todoText}
          onDoubleClick={() => handleDelete(id)}
        >
          {' '}
          {title}
        </button>
        <img src={img} className={styles.todoImg} />
      </div>
    </div>
  );
}

export default Todo