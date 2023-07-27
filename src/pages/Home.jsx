import React from 'react'
import styles from '../styles/Home.module.css'
import GreetingsNav from '../common/GreetingsNav/GreetingsNav'
import Quote from '../common/Quote/Quote'
import Navigation from '../common/Navigation/Navigation'
import Todo from '../common/Todo/Todo'
import { HomepageData } from '../data'

function Home() {
  console.log(HomepageData)
  return (
    <div className={styles.homeContainer}>
      <GreetingsNav />
      <Quote>
        <p>“You have to create little pockets of joy in your life to take care of yourself.”</p>
      </Quote>

      <div className={styles.timePeriod}>
        <img src='/HomeAssets/morning.png' className={styles.timePeriodImg}/>
        <h3 className={styles.timePeriodText}>Morning</h3>
      </div>

      {HomepageData?.map((data)=>(
      <Todo img={data.img} title={data.task}/>
      ))}
      <Navigation />
      <div className={styles.timePeriod}>
        <img src='/HomeAssets/afternoon.png' className={styles.timePeriodImg}/>
        <h3 className={styles.timePeriodText}>Afternoon</h3>
      </div>
      <div className={styles.timePeriod}>
        <img src='/HomeAssets/night.png' className={styles.timePeriodImg}/>
        <h3 className={styles.timePeriodText}>Night</h3>
      </div>
    </div>
  )
}

export default Home