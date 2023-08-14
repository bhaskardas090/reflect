import React from 'react'
import Typography from '@mui/material/Typography';
import styles from './PageHeader.module.css'
import { useNavigate } from 'react-router';

function PageHeader({title}) {
    const navigate = useNavigate()
  return (
    <div className={styles.pageHeader}>
        <img src="https://cdn-icons-png.flaticon.com/128/318/318477.png" className={styles.backButton} onClick={()=>navigate('/')}/>
        <p className={styles.title}>{title}</p>
    </div>
  )
}

export default PageHeader