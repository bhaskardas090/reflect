import React, { useState } from 'react';
import Logo from '../common/Logo/Logo';
import styles from '../styles/Auth.module.css';
import SocialLogin from '../common/SocialLogin/SocialLogin';
import loginScreenOne from '../assets/Login_Page_1.png';
import { FormControl } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function SignIn() {
  const [signInDeatils, setSignInDeatils] = useState({
    email: '',
    password: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signInDeatils);
  };
  return (
    <div>
      <Logo />
      {/* <div>
        <img src={loginScreenOne} className={styles.loginScreenOne} />
      </div> */}
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
            Register
          </Button>
        </form>
        <div className={styles.signup}>
          <p>
            Don't have an account?{' '}
            <Link to="/register" className={styles.redirect}>
              SIGN UP
            </Link>
          </p>
        </div>
      </div>
      {/* OTHER AUTH METHOS */}
      <SocialLogin />
    </div>
  );
}

export default SignIn;
