import styles from "./AddJournal.module.css";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import useDB from "../../hooks/useDB";
import useAuthContext from "../../hooks/useAuthContext";

function AddJournal({ setShowAddModal }) {
  const [journal, setJournal] = useState("");
  const { user } = useAuthContext();
  const { addJournal, isJournalAlreadyDone } = useDB("journals");

  const handleAddJournal = async (data) => {
    const journalAlreadyDone = await isJournalAlreadyDone(user.uid);
    if (journalAlreadyDone) {
      alert(
        "You can not perform this action. You have already submitted the journal for Today. Try again tomorrow."
      );
    } else {
      addJournal(user.uid, data);
      setJournal("");
      setShowAddModal(false);
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
        placeholder="What about what your day in brief... Like what you learned today, your activities, about anyone you helped and charity that makes you your better self... :)"
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
