import React from "react";
import styles from "./Todo.module.css";
import useTaskContext from "../../hooks/useTaskContext";
import getRandomColor from "../../helper/RandomColor";

function Todo({ img, title, id }) {
  const { dispatch, state: tasks } = useTaskContext();
  const handleDelete = (taskId) => {
    console.log(id, "Delete Clicked");
    dispatch({ type: "DELETE_TASK", payload: taskId });
  };
  const handleChecked = (taskId) => {
    console.log(tasks, "Updated Tasks ***");
    dispatch({ type: "SET_TOTAL_REWARD" });
    dispatch({ type: "TASK_COMPLETE_STATUS_CHANGE", payload: taskId });
  };

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
