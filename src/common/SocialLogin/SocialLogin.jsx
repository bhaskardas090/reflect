import React from 'react'
import styles from './SocialLogin.module.css'
import google from '../../assets/Google.png'
import facebook from '../../assets/Facebook.png'

function SocialLogin() {
  return (
    <div className={styles.signup}>
      <p>or</p>
      <p className={styles.signupText}>CONTINUE WITH</p>
      <div className={styles.signupOptions}>
        <img src={google} />
        <img src={facebook} />
      </div>
    </div>
  );
}

export default SocialLogin