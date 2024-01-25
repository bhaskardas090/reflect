import * as yup from "yup";

export const addTaskSchema = yup.object().shape({
  task: yup.string().min(3).max(60),
});
