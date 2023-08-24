import React from "react";
import Logo from "../common/Logo/Logo";
import styles from "../styles/Auth.module.css";
import SocialLogin from "../common/SocialLogin/SocialLogin";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { signUpSchema } from "../helper/Validation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import useRegister from "../hooks/useRegister";

function SignUp() {
  const { signup, error, loading } = useRegister();

  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const onSubmit = async (data) => {
    signup(data.email, data.password, data.username);
    // reset();
  };
  return (
    <div>
      <Logo />
      <div className={styles.login}>
        <form className={styles.form}>
          <TextField
            label="Enter your email"
            variant="outlined"
            type="email"
            className={styles.inputField}
            {...register("email")}
          />
          {errors.email && (
            <Alert severity="error" sx={{ width: "75vw" }}>
              {errors.email?.message}
            </Alert>
          )}

          <TextField
            label="Enter Your Username"
            variant="outlined"
            type="text"
            className={styles.inputField}
            {...register("username")}
          />
          {errors.username && (
            <Alert severity="error" sx={{ width: "75vw" }}>
              {errors.username?.message}
            </Alert>
          )}
          <TextField
            label="Enter Password"
            variant="outlined"
            type="password"
            className={styles.inputField}
            {...register("password")}
          />
          {errors.password && (
            <Alert severity="error" sx={{ width: "75vw" }}>
              {errors.password?.message}
            </Alert>
          )}
          <TextField
            label="Repeat Password"
            variant="outlined"
            type="password"
            className={styles.inputField}
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <Alert severity="error" sx={{ width: "75vw" }}>
              Password do not match
            </Alert>
          )}
          <Button
            variant="contained"
            className={styles.register}
            onClick={handleSubmit(onSubmit)}
          >
            {loading ? "Loading..." : "Register"}
          </Button>
          {error && (
            <Alert severity="error" sx={{ width: "75vw" }}>
              {error}
            </Alert>
          )}
        </form>
        <div className={styles.login}>
          <p>
            Already Have an account?{" "}
            <Link to="/login" className={styles.redirect}>
              SIGN IN
            </Link>
          </p>
        </div>
      </div>
      {/* OTHER AUTH METHOS */}
      <SocialLogin />
    </div>
  );
}

export default SignUp;
