import styles from "./TodoAddForm.module.css";
// MUI components
import Drawer from "@mui/material/Drawer";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
// Library imports
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// Hooks imports
import useDB from "../../hooks/useDB";
// Component imports
import { addTaskSchema } from "../../helper/Validation";

function TodoAddForm({ showTodoForm, setShowTodoForm, time }) {
  const { addTask } = useDB("routines");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addTaskSchema),
  });

  // Adding the new task in the global todo list
  const onSubmit = (data) => {
    addTask(data.task, time);
    setShowTodoForm(false);
  };

  return (
    <>
      <Drawer
        sx={{}}
        anchor="bottom"
        open={showTodoForm}
        onClose={() => setShowTodoForm(false)}
      >
        <div className={styles.todoForm}>
          <div className={styles.todoFormContainer}>
            <TextField
              label="Enter you task"
              variant="outlined"
              className={styles.textField}
              {...register("task")}
            />
            <Button
              variant="contained"
              className={styles.addButton}
              onClick={handleSubmit(onSubmit)}
            >
              Add Task
            </Button>
            {errors.task && (
              <Alert severity="error" className={styles.alert}>
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
