// NOT USED
import React ,{useState} from 'react'
import Logo from '../common/Logo/Logo'
import styles from '../styles/AuthOTP.module.css'
import loginScreenTwo from '../assets/Login_Page_2.png'
import OtpInput from 'react-otp-input';
import OTPInput from 'react-otp-input';
import Button from '@mui/material/Button';
import SocialLogin from '../common/SocialLogin/SocialLogin';

function AuthOTP() {
  const [otp, setOtp] = useState('');
  return (
    <div>
        <Logo />
        <div>
          <img src={loginScreenTwo} className={styles.loginScreenTwo}/>
        </div>
        <div className={styles.OTPContainer}>
          <p>Verify Your OTP</p>
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            renderSeparator={<span>-</span>}
            renderInput={(props) => <input {...props}
            className={styles.OTPInput} />}
          />
          <Button variant="contained" className={styles.loginButton}> LOG IN </Button>
        </div>
        <SocialLogin />
    </div>
  )
}

export default AuthOTP