import React from 'react'
import styles from './MeditationType.module.css'

function MeditationType({img,title,desc,onClick}) {
  return (
    <div>
        <div className={styles.meditationType} onClick={onClick}>
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