import React, { useState } from "react";
import Logo from "../common/Logo/Logo";
import styles from "../styles/Auth.module.css";
import SocialLogin from "../common/SocialLogin/SocialLogin";
import { Alert } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";
function SignIn() {
  const { login, error, loading } = useLogin();

  const [signInDeatils, setSignInDeatils] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(signInDeatils.email, signInDeatils.password);
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
            <Alert severity="error" sx={{ width: "75vw" }}>
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
      {/* OTHER AUTH METHOS */}
      {/* <SocialLogin /> */}
    </div>
  );
}

export default SignIn;
