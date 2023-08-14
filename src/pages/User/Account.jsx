import React from 'react'
import myAccount from '../../assets/myAcc.png'
import styles from '../../styles/User/Account.module.css'
import Input from '../../common/MyAccount/Input'

function Account() {
  return (
    <div>
      <img src={myAccount} className={styles.userImg}/>
      <div>
        <Input />
      </div>
    </div>
  )
}

export default Account