import React from 'react'
import styles from './Navigation.module.css'
import home from '../../assets/home.png'
import meditate from '../../assets/medidate.png'
import breathe from '../../assets/breathe.png'
import chat from '../../assets/chat.png'
import {Link} from 'react-router-dom';

function Navigation() {
  return (
    <div className={styles.navbarContainer}>
        <div className={styles.links}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className={styles.link}>
                    <img src={home} />
                    <p>Home</p>
                </div>
            </Link>
            <Link to="/meditate" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className={styles.link}>
                    <img src={meditate} />
                    <p>Meditate</p>
                </div>
            </Link>
            <Link to="/breathe" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className={styles.link}>
                    <img src={breathe} />
                    <p>Breathe</p>
                </div>
            </Link>
            <Link to="/chatbot" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className={styles.link}>
                    <img src={chat} />
                    <p>ChatBot</p>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Navigation