import * as yup from "yup";

export const signUpSchema = yup.object().shape({
  email: yup.string().email().required("Please enter a valid email"),
  username: yup.string().min(3).max(12).required(),
  password: yup
    .string()
    .min(6)
    .max(20)
    // .matches(/^(?=.*[A-Z]).{6,20}$/)
    .required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});

export const addTaskSchema = yup.object().shape({
  task: yup.string().min(3).max(60),
});
