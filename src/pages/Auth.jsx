import React from 'react'
import Logo from '../common/Logo/Logo'
import styles from '../styles/Auth.module.css'
import SocialLogin from '../common/SocialLogin/SocialLogin'
import loginScreenOne from '../assets/Login_Page_1.png'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'

function Auth() {
  return (
    <div>
      <Logo />
      <div>
        <img src={loginScreenOne} className={styles.loginScreenOne}/>
      </div>
      <div className={styles.login}>
        <TextField label="Enter your mobile number" variant="outlined" type='number' className={styles.numberField}/>
        <Link to="/auth-otp">
          <Button variant="contained" className={styles.generateOTPButton}>Generate OTP</Button>
        </Link>
      </div>
      <SocialLogin />
    </div>
  )
}

export default Auth