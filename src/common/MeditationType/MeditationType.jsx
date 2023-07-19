import React from 'react'
import styles from './MeditationType.module.css'

function MeditationType({img,title,desc}) {
  return (
    <div>
        <div className={styles.meditationType}>
            <img src={img} className={styles.meditationTypeImg}/>
            <div className={styles.meditationTypeContent}>
                <h4 className={styles.title}>{title}</h4>
                <h5 className={styles.description}>{desc}</h5>
            </div>
        </div>
    </div>
  )
}

export default MeditationType