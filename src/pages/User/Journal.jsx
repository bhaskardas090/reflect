
import React ,{useState} from 'react'
import PageHeader from '../../common/PageHeader/PageHeader'
import styles from '../../styles/User/Journal.module.css'
import Button from '@mui/material/Button';
import ModalComponent from '../../common/ModalComponent/ModalComponent';
// import journalImg from '/HomeAssets/Journal.jpg'
function Journal() {
    const [showAddModal, setShowAddModal] = useState(false);
    const [showPastModal, setShowPastModal]= useState(false);

  return (
    <div className={styles.journal}>
    <div className={styles.journalContainer}>
        <div className={styles.buttonContainer}>
            <Button onClick={() => setShowAddModal(true)} className={styles.button} > Add New Journal </Button>
            <Button onClick={() => setShowPastModal(true)} className={styles.button} > View Past Journal</Button>
        </div>
        <img src='/HomeAssets/Journal.jpg' alt="journal" className={styles.journalImg}/>

            <ModalComponent showModal={showAddModal} setShowModal={setShowAddModal}>
            <form className={styles.form}>
                <input type='date' required className={styles.dateInput}/>
                <textarea placeholder='Start writing your journal...' className={styles.textareaInput}></textarea>
                <div className={styles.modalButtonsContainer}>
                    <button className={styles.addButton}>Add</button>
                    <button className={styles.closeButton}onClick={()=>setShowAddModal(false)}>Close</button>
                </div>
            </form> 
            </ModalComponent>

            <ModalComponent showModal={showPastModal} setShowModal={setShowPastModal}>
            <form className={styles.form}>
                <input type='date' required className={styles.dateInput}/>
                <div className={styles.modalButtonsContainer}>
                    <button className={styles.closeButton}onClick={()=>setShowPastModal(false)}>Close</button>
                </div>
            </form> 
            </ModalComponent>
    </div>
    </div>
  )
}

export default Journal