import React, { useState } from "react";
import PageHeader from "../../common/PageHeader/PageHeader";
import styles from "../../styles/User/Journal.module.css";
import Button from "@mui/material/Button";
import ModalComponent from "../../common/ModalComponent/ModalComponent";
import AddJournal from "../../common/AddJournal/AddJournal";
import PastJournal from "../../common/PastJournal/PastJournal";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { useNavigate } from "react-router";
import journalDesktop from "../../assets/Journal-Desktop.jpg";
// import journalImg from '/HomeAssets/Journal.jpg'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Journal() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showPastModal, setShowPastModal] = useState(false);

  const navigate = useNavigate();

  return (
    <div className={styles.journal}>
      <PageHeader type="transparent" onclick={() => navigate("/")} />
      <div className={styles.journalContainer}>
        {/* 
        //* ACTON BUTTONS 
        */}
        <div className={styles.buttonContainer}>
          <Button
            onClick={() => setShowAddModal(true)}
            className={styles.button}
          >
            Add New Journal
          </Button>
          <Button
            onClick={() => setShowPastModal(true)}
            className={styles.button}
          >
            View Past Journal
          </Button>
        </div>
        <img
          src="/HomeAssets/Journal.jpg"
          alt="journal"
          className={styles.journalImg}
        />
        <img
          src={journalDesktop}
          alt="journal_background"
          className={styles.journalImgDesktop}
        />
        {/* 
        //* FORM FOR ADDING THE JOURNAL 
        */}
        <Dialog fullScreen open={showAddModal} TransitionComponent={Transition}>
          <AddJournal setShowAddModal={setShowAddModal} />
        </Dialog>

        {/* 
        // * CHECK PAST JOURNAL AND JOURNAL OF ANY SPECIFIC DATE 
        */}
        <Dialog
          fullScreen
          open={showPastModal}
          TransitionComponent={Transition}
        >
          <PastJournal setShowPastModal={setShowPastModal} />
        </Dialog>
      </div>
    </div>
  );
}

export default Journal;
