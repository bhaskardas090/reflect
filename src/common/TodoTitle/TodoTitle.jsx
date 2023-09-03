import React, { useState } from "react";
import styles from "./TodoTitle.module.css";
// Component imports
import TodoAddForm from "../TodoAddForm/TodoAddForm";
// Asset imports
import add from "../../assets/add.png";

function TodoTitle({ imgSrc, time }) {
  const [showTodoForm, setShowTodoForm] = useState(false);
  return (
    <div className={styles.todoTitle}>
      <div className={styles.timePeriod}>
        <img src={imgSrc} alt="icon" className={styles.timePeriodImg} />
        <h3 className={styles.timePeriodText}>{time}</h3>
      </div>
      {time !== "Must Do" && (
        <img
          src={add}
          onClick={() => setShowTodoForm(true)}
          className={styles.add}
          alt="add"
        />
      )}
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
