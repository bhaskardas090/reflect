import React from 'react'
import styles from './GreetingsNav.module.css'
import pause from '../../assets/Pause.png'
import resource from '../../assets/Resource.png'
import user from '../../assets/User.png'

function GreetingsNav() {
  return (
    <div>
        <div className={styles.greetingsNavContainer}> 
            <div className={styles.helloEmoji}> 
                <p>🖐🏻</p>
            </div>
            <div className={styles.greetingsMessage}>
                <h2>Hey Tisbha</h2>
                <h5>Have a Great Day!</h5>
            </div>
            <div className={styles.navigationButtons}>
                <img src={pause} />
                <img src={resource} />
                <img src={user} />
            </div>
        </div>
    </div>
  )
}

export default GreetingsNav