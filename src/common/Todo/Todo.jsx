import React from 'react'
import styles from './Todo.module.css'

function Todo({img,title}) {
  return (
    <div>
        <div className={styles.todo}>
            <input type="checkbox" className={styles.checkbox}/>
            <button className={styles.todoText}> {title}</button>
            <img src={img} className={styles.todoImg}/>
        </div>
    </div>
  )
}

export default Todo