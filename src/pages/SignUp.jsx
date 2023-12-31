import React, { useState } from 'react';
import Logo from '../common/Logo/Logo';
import styles from '../styles/auth.module.css';
import SocialLogin from '../common/SocialLogin/SocialLogin';
import loginScreenOne from '../assets/Login_Page_1.png';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { signUpschema } from '../Helper/Validation';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(signUpschema),
  });

  const onSubmit = (data) => {
    console.log(data);
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
            {...register('email')}
          />
          {errors.email && (
            <Alert severity="error" sx={{ width: '75vw' }}>
              {errors.email?.message}
            </Alert>
          )}

          <TextField
            label="Enter Your Username"
            variant="outlined"
            type="text"
            className={styles.inputField}
            {...register('username')}
          />
          {errors.username && (
            <Alert severity="error" sx={{ width: '75vw' }}>
              {errors.username?.message}
            </Alert>
          )}
          <TextField
            label="Enter Password"
            variant="outlined"
            type="password"
            className={styles.inputField}
            {...register('password')}
          />
          {errors.password && (
            <Alert severity="error" sx={{ width: '75vw' }}>
              {errors.password?.message}
            </Alert>
          )}
          <TextField
            label="Repeat Password"
            variant="outlined"
            type="password"
            className={styles.inputField}
            {...register('confirmPassword')}
          />
          {errors.confirmPassword && (
            <Alert severity="error" sx={{ width: '75vw' }}>
              Password do not match
            </Alert>
          )}
          <Button
            variant="contained"
            className={styles.register}
            onClick={handleSubmit(onSubmit)}
          >
            Register
          </Button>
        </form>
        <div className={styles.login}>
          <p>
            Already Have an account?{' '}
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
