import React from "react";
import styles from "./Todo.module.css";

import useDB from "../../hooks/useDB";
function Todo({ img, title, time, id, checked, history }) {
  const { deleteTask, updateTaskComplete } = useDB("routines");

  const handleDelete = (taskId) => {
    if (time !== "must-do") deleteTask(taskId);
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
        <div
          className={styles.todoContent}
          style={{
            boxShadow:
              time === "must-do"
                ? "0px 3px 3px 0px #69F0AE"
                : "0px 1px 3px 0px rgba(0, 0, 0, 0.32)",
          }}
        >
          <button
            className={styles.todoText}
            onDoubleClick={() => handleDelete(id)}
          >
            {title}
          </button>

          <img
            alt="add_todo"
            src={img}
            className={`${styles.todoImg} ${styles.globalImg}`}
            loading="lazy"
            style={{ backgroundColor: "#00000026" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Todo;
