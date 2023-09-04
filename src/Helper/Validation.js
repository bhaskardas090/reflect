import * as yup from "yup";

export const signUpSchema = yup.object().shape({
  email: yup.string().email().required("Please enter a valid email"),
  username: yup.string().min(3).max(18).required(),
  password: yup.string().min(6).max(20).required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});

export const signInSchema = yup.object().shape({
  email: yup.string().email().required("Please enter a valid email"),
  password: yup
    .string()
    .min(6, "Something not right")
    .max(20, "Do not enter any random password")
    .required("Not a valid password"),
});

export const addTaskSchema = yup.object().shape({
  task: yup.string().min(3).max(60),
});

export const userDetails = yup.object().shape({
  name: yup.string().min(5).required(),
  phone: yup.number().min(10),
  age: yup.number(),
  dob: yup.string(),
  working: yup.string(),
  gender: yup.string(),
});
