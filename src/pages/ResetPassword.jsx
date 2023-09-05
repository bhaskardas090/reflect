import React, { useState } from "react";
import styles from "../styles/Auth.module.css";
// MUI Component
import { Alert, Button, TextField } from "@mui/material";
// Library imports
import { useNavigate } from "react-router";
// Component imports
import Logo from "../common/Logo/Logo";
// Custom hook imports
import useResetPassword from "../hooks/useResetPassword";

function ResetPassword() {
  const [email, setEmail] = useState();
  const navigate = useNavigate();
  const { resetpassword, loading, error } = useResetPassword();

  const handleSubmit = async (e) => {
    e.preventDefault();
    resetpassword(email);
  };
  return (
    <>
      <Logo />
      <form className={styles.form}>
        <TextField
          label="Enter your email"
          variant="outlined"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.inputField}
        />
        <Button
          variant="contained"
          className={styles.register}
          onClick={handleSubmit}
        >
          {loading ? "Loading..." : "Send Reset Link"}
        </Button>
        <Button onClick={() => navigate("/login")}>Go Back</Button>
        {error && (
          <Alert severity="error" sx={{ width: "75vw" }}>
            {error}
          </Alert>
        )}
      </form>
    </>
  );
}

export default ResetPassword;
