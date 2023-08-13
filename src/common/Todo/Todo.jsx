import React from "react";
import styles from "./Todo.module.css";
import getRandomColor from "../../helper/RandomColor";
import useDB from "../../hooks/useDB";

function Todo({ img, title, id, checked }) {
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
        <input
          type="checkbox"
          className={styles.checkbox}
          onChange={() => handleChecked(id)}
          checked={checked}
        />
        <button
          className={styles.todoText}
          onDoubleClick={() => handleDelete(id)}
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

export default Todo;
