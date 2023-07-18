import React from 'react'
import styles from './Navigation.module.css'
import home from '../../assets/home.png'
import meditate from '../../assets/medidate.png'
import breathe from '../../assets/breathe.png'
import chat from '../../assets/chat.png'

function Navigation() {
  return (
    <div className={styles.navbarContainer}>
        <div className={styles.links}>
            <div className={styles.link}>
                <img src={home} />
                <p>Home</p>
            </div>
            <div className={styles.link}>
                <img src={meditate} />
                <p>Meditate</p>
            </div>
            <div className={styles.link}>
                <img src={breathe} />
                <p>Breathe</p>
            </div>
            <div className={styles.link}>
                <img src={chat} />
                <p>ChatBot</p>
            </div>
        </div>
    </div>
  )
}

export default Navigation