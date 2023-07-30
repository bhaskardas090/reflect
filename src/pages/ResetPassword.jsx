import React, { useState } from 'react';
import { Alert, Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router';
import styles from '../styles/auth.module.css';
import Logo from '../common/Logo/Logo';
import useResetPassword from '../hooks/useResetPassword';

function ResetPassword() {
  const [email, setEmail] = useState();
  const navigate = useNavigate();
  const { resetpassword, loading, error } = useResetPassword();

  const handleSubmit = async (e) => {
    e.preventDefault();
    resetpassword();
  };
  return (
    <>
      <Logo />
      <form className={styles.form}>
        <TextField
          label="Reset Password Email"
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
          {loading ? 'Loading...' : 'Reset Password'}
        </Button>
        <Button onClick={() => navigate('/login')}>Go Back</Button>
        {error && (
          <Alert severity="error" sx={{ width: '75vw' }}>
            {error}
          </Alert>
        )}
      </form>
    </>
  );
}

export default ResetPassword;
