import styles from "./TodoAddForm.module.css";
// MUI components
import Drawer from "@mui/material/Drawer";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
// Library imports
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// Hooks imports
import useDB from "../../hooks/useDB";
// Component imports
import { addTaskSchema } from "../../helper/Validation";
import useRoutine from "../../hooks/useRoutine";

function TodoAddForm({ showTodoForm, setShowTodoForm, time }) {
  const { addTask } = useRoutine();

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addTaskSchema),
  });

  // Adding the new task in the global todo list
  const onSubmit = (data) => {
    addTask(data.task, time);
    setShowTodoForm(false);
    reset();
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
            {/* <TextField
              label="Enter you task"
              variant="outlined"
              defaultValue=""
              className={styles.textField}
              {...register("task")}
            /> */}
            <Controller
              name="task"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  label="Enter your task"
                  variant="outlined"
                  fullWidth
                  {...field}
                />
              )}
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
