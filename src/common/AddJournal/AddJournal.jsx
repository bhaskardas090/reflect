import { useState } from "react";
import styles from "./AddJournal.module.css";
// Library imports
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
// Custom hook imports
import useDB from "../../hooks/useDB";

function AddJournal({
  setShowAddModal,
  setShowCongratsModal,
  setShowTryModal,
}) {
  const [journal, setJournal] = useState("");
  // Hooks consumed
  const { addJournal, isJournalAlreadyDone } = useDB("journals");

  // Event Handler : Checking if the journal added for today or not
  const handleAddJournal = async (data) => {
    const journalAlreadyDone = await isJournalAlreadyDone();
    if (journalAlreadyDone) {
      setShowTryModal(true);
    } else {
      // addJournal(user.uid, data);
      setJournal("");
      setShowAddModal(false);
      setShowCongratsModal(true);
    }
  };

  return (
    <div className={styles.form}>
      <ReactQuill
        theme="snow"
        value={journal}
        onChange={setJournal}
        style={{
          height: "90vh",
          width: "100vw",
          marginTop: "-2px",
        }}
        placeholder="Write about your day in brief... Like what you learned today, your activities, about anyone you helped and charity that makes you your better self... :)"
      />
      <div className={styles.modalButtonsContainer}>
        <button
          className={styles.closeButton}
          onClick={() => {
            setShowAddModal(false);
          }}
        >
          Close
        </button>
        <button
          className={styles.addButton}
          onClick={() => handleAddJournal(journal)}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default AddJournal;
