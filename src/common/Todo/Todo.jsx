import React from "react";
import styles from "./Todo.module.css";

import useDB from "../../hooks/useDB";

function Todo({ img, title, id, checked, history }) {
  const { deleteTask, updateTaskComplete } = useDB("routines");

  const handleDelete = (taskId) => {
    deleteTask(taskId);
  };
  const handleChecked = async (taskId) => {
    updateTaskComplete(taskId);
  };

  return (
    <div>
      <div className={styles.todo}>
        {!history && (
          <input
            type="checkbox"
            className={styles.checkbox}
            onChange={() => handleChecked(id)}
            checked={checked}
          />
        )}
        {history && (
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={checked}
          />
        )}
        <div className={styles.todoContent}>
          <button
            className={styles.todoText}
            onDoubleClick={() => handleDelete(id)}
          >
            {title}
          </button>

          <img alt="add_todo" src={img} className={styles.todoImg} />
        </div>
      </div>
    </div>
  );
}

export default Todo;
