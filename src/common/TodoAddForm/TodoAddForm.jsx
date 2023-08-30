import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./TodoAddForm.module.css";
import Alert from "@mui/material/Alert";
import useDB from "../../hooks/useDB";
import { addTaskSchema } from "../../helper/Validation";

function TodoAddForm({ showTodoForm, setShowTodoForm, time }) {
  const [task, setTask] = useState("");
  const { addTask } = useDB("routines");

  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
  } = useForm({
    resolver: yupResolver(addTaskSchema),
  });

  // Adding the new task in the global todo list
  const onSubmit = (data) => {
    console.log(data);
    addTask(data.task, time);
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
              sx={{ width: "90vw" }}
              {...register("task")}
              // value={task}
              // onChange={(e) => setTask(e.target.value)}
            />
            <Button
              variant="contained"
              sx={{ width: "90vw" }}
              onClick={handleSubmit(onSubmit)}
            >
              Add Task
            </Button>
            {errors.task && (
              <Alert severity="error" sx={{ width: "75vw" }}>
                {errors.task?.message}
              </Alert>
            )}
          </div>
        </div>
      </Drawer>
    </>
  );
}

export default TodoAddForm;
