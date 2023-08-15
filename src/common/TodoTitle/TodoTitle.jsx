import React, { useState } from "react";
import styles from "./TodoTitle.module.css";
import TodoAddForm from "../TodoAddForm/TodoAddForm";

function TodoTitle({ imgSrc, time }) {
  const [showTodoForm, setShowTodoForm] = useState(false);
  return (
    <div className={styles.todoTitle}>
      <div className={styles.timePeriod}>
        <img src={imgSrc} className={styles.timePeriodImg} />
        <h3 className={styles.timePeriodText}>{time}</h3>
      </div>
      <img
        src="https://cdn-icons-png.flaticon.com/128/7968/7968625.png"
        onClick={() => setShowTodoForm(true)}
        className={styles.add}
        alt="add"
      />
      {/* ADD TODO FORM Drawer*/}
      <TodoAddForm
        setShowTodoForm={setShowTodoForm}
        showTodoForm={showTodoForm}
        time={time}
      />
    </div>
  );
}

export default TodoTitle;
