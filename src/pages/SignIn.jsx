import styles from "../styles/Auth.module.css";
// Component imports
import Logo from "../common/Logo/Logo";
// MUI component imports
import { Alert } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// Library imports
import { Link } from "react-router-dom";
import { signInSchema } from "../helper/Validation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// Custom hook import
import useLogin from "../hooks/useLogin";
// Asset import
import meditate from "../assets/Login_Page_1.png";

function SignIn() {
  const { login, error, loading } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInSchema),
  });

  // Event handler : signing in the user
  const onSubmit = async (data) => {
    login(data.email, data.password);
  };

  return (
    <div className={styles.loginComponent}>
      <Logo />
      <div className={styles.image}>
        <img src={meditate} alt="meditate" className={styles.loginImg} />
      </div>
      <div className={styles.login}>
        <form className={styles.form}>
          <TextField
            label="Enter your email"
            variant="outlined"
            type="email"
            {...register("email")}
            className={styles.inputField}
          />
          {errors.password && (
            <Alert severity="error" className={styles.alert}>
              {errors.email?.message}
            </Alert>
          )}
          <TextField
            label="Enter Password"
            variant="outlined"
            type="password"
            {...register("password")}
            autoComplete="false"
            className={styles.inputField}
          />
          {errors.password && (
            <Alert severity="error" className={styles.alert}>
              {errors.password?.message}
            </Alert>
          )}
          <Button
            variant="contained"
            className={styles.register}
            onClick={handleSubmit(onSubmit)}
          >
            {loading ? "Loading..." : "Log In"}
          </Button>
          {error && (
            <Alert severity="error" className={styles.alert}>
              {error}
            </Alert>
          )}
        </form>
        <div className={styles.signup}>
          <Link to="/resetpassword" className={styles.redirect}>
            Forgot Password?
          </Link>
          <p>
            Don't have an account?{" "}
            <Link to="/register" className={styles.redirect}>
              SIGN UP
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
