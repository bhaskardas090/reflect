import React, { useState } from "react";
import styles from "../styles/Auth.module.css";
// Component imports
import Logo from "../common/Logo/Logo";
// MUI component imports
import { Alert } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// Library imports
import { Link } from "react-router-dom";
// Custom hook import
import useLogin from "../hooks/useLogin";
// Asset import
import meditate from "../assets/Login_Page_1.png";

function SignIn() {
  const { login, error, loading } = useLogin();

  const [signInDeatils, setSignInDeatils] = useState({
    email: "",
    password: "",
  });

  // Event handler : signing in the user
  const handleSubmit = async (e) => {
    e.preventDefault();
    login(signInDeatils.email, signInDeatils.password);
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
            value={signInDeatils.email}
            onChange={(e) =>
              setSignInDeatils({ ...signInDeatils, email: e.target.value })
            }
            className={styles.inputField}
          />
          <TextField
            label="Enter Password"
            variant="outlined"
            type="password"
            value={signInDeatils.password}
            autoComplete="false"
            onChange={(e) =>
              setSignInDeatils({ ...signInDeatils, password: e.target.value })
            }
            className={styles.inputField}
          />
          <Button
            variant="contained"
            className={styles.register}
            onClick={handleSubmit}
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
