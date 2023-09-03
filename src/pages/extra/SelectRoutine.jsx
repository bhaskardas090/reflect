import React from "react";
import styles from "../../styles/SelectRoutine.module.css";
// Component imports
import {
  studentRoutine,
  workingProfessionalRoutine,
  houseWifeRoutine,
  oldAgeRoutine,
} from "../../helper/TaskType";
import PageHeader from "../../common/PageHeader/PageHeader";
// Library import
import { useNavigate } from "react-router-dom";
// Custom hook
import useDB from "../../hooks/useDB";
// Asset imports
import student from "../../assets/STUDENT.jpg";
import working from "../../assets/WORKING.jpg";
import homemaker from "../../assets/HOMEMAKER.jpg";
import oldage from "../../assets/OLDAGE.jpg";

function SelectTask() {
  const navigate = useNavigate();
  const { selectRoutine } = useDB("routines");

  // Event handler : Select the active task
  const handleTask = async (activeTask) => {
    selectRoutine(activeTask);
    navigate("/");
  };
  return (
    <div>
      <PageHeader
        onclick={() => navigate(-1)}
        type="primary"
        title="Select Routine"
      />
      <div className={styles.routines}>
        <img
          src={student}
          className={styles.routine}
          alt="student-routine"
          onClick={() => handleTask(studentRoutine)}
        />
        <img
          src={working}
          className={styles.routine}
          alt="working-routine"
          onClick={() => handleTask(workingProfessionalRoutine)}
        />
        <img
          src={homemaker}
          className={styles.routine}
          alt="homemaker-routine"
          onClick={() => handleTask(houseWifeRoutine)}
        />
        <img
          src={oldage}
          className={styles.routine}
          alt="oldage-routine"
          onClick={() => handleTask(oldAgeRoutine)}
        />
      </div>
    </div>
  );
}

export default SelectTask;
