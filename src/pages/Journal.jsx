import React, { useState } from "react";
import styles from "../styles/Journal.module.css";
// Component impors
import PageHeader from "../common/PageHeader/PageHeader";
import ModalComponent from "../common/ModalComponent/ModalComponent";
import AddJournal from "../common/AddJournal/AddJournal";
import PastJournal from "../common/PastJournal/PastJournal";
// MUI component imports
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
// Library imports
import { useNavigate } from "react-router";
// Asset imports
import journalDesktop from "../assets/Journal-Desktop.jpg";
import tryTomorrow from "../assets/try-tomorrow.png";
import congrats from "../assets/congrats.png";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Journal() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showPastModal, setShowPastModal] = useState(false);
  // State : For congrats and tryagain model
  const [showTryModal, setShowTryModal] = useState(false);
  const [showCongratsModal, setShowCongratsModal] = useState(false);

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
        {/* Mobile Journal Background */}
        <img
          src="/HomeAssets/Journal.jpg"
          alt="journal"
          className={styles.journalImg}
        />
        {/* Desktop Journal Background */}
        <img
          src={journalDesktop}
          alt="journal_background"
          className={styles.journalImgDesktop}
        />
        {/* 
        //* FORM FOR ADDING THE JOURNAL 
        */}
        <Dialog fullScreen open={showAddModal} TransitionComponent={Transition}>
          <AddJournal
            setShowAddModal={setShowAddModal}
            setShowCongratsModal={setShowCongratsModal}
            setShowTryModal={setShowTryModal}
          />
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
      {/* //* Used for showing congratulations message on routine completion */}
      {showCongratsModal && (
        <ModalComponent
          showModal={showCongratsModal}
          setShowModal={setShowCongratsModal}
          height="44vh"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <img src={congrats} alt="congrats" />
            Congratulations
          </div>
        </ModalComponent>
      )}
      {/* //! Used for showing message if user try to submit multiple time */}
      {showTryModal && (
        <ModalComponent
          showModal={showTryModal}
          setShowModal={setShowTryModal}
          height="50vh"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <img src={tryTomorrow} alt="try-tomorrow" />
            <p>
              You have already submitted the routine for Today. Try again
              tomorrow.
            </p>
          </div>
        </ModalComponent>
      )}
    </div>
  );
}

export default Journal;
