import React from 'react'
import logo from '../../assets/Logo.png'
import logoText from '../../assets/LogoText.png'
import styles from './Logo.module.css';

function Logo() {
  return (
    <div>
      <div className={styles.imgContainer}>
        <img src={logo} className={styles.logo}/>
        <img src={logoText} className={styles.logoText}/>
      </div>
    </div>
  )
}

export default Logo