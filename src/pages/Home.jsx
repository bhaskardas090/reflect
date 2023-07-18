import React from 'react'
import styles from '../styles/Home.module.css'
import GreetingsNav from '../common/GreetingsNav/GreetingsNav'
import Quote from '../common/Quote/Quote'
import Navigation from '../common/Navigation/Navigation'

function Home() {
  return (
    <div className={styles.homeContainer}>
      <GreetingsNav />
      <Quote />
      <Navigation />
    </div>
  )
}

export default Home