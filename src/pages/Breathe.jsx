import React from 'react'
import styles from '../styles/Breathe.module.css'
import GreetingsNav from '../common/GreetingsNav/GreetingsNav'
import Navigation from '../common/Navigation/Navigation'
import Quote from '../common/Quote/Quote'
import BreatheImg from '../assets/Breathe_Page.png'
import Button from '@mui/material/Button';

function Breathe() {
  return (
    <div className={styles.breatheContainer}>
      <GreetingsNav />
      <Quote>
        <p>“Without full awareness of breathing, there can be no development of meditative stability and understanding.”</p>
      </Quote>
      <img src={BreatheImg} className={styles.breatheImg}/>
      <div className={styles.buttonContainer}>
        <Button variant="contained" className={styles.startButton}>Start Breathing</Button>
      </div>
      <Navigation />   
    </div>
  )
}

export default Breathe