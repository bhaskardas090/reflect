import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import styles from "./TodoAddForm.module.css";
import useDB from "../../hooks/useDB";

function TodoAddForm({ showTodoForm, setShowTodoForm, time }) {
  const [task, setTask] = useState();
  const { addTask } = useDB("routines");

  // Adding the new task in the global todo list
  const handleSubmit = () => {
    addTask(task, time);
    setTask("");
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
              sx={{ width: "75vw" }}
              value={task}
              onChange={(e) => setTask(e.target.value)}
            />
            <Button
              variant="outlined"
              sx={{ width: "75vw" }}
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
