import React from "react";
import styles from "./HapinessMeter.module.css";
// Importing Sub Components
import Emojis from "./Emojis";
import Meter from "./Meter";

function HapinessMeter({ progress }) {
  return (
    <div className={styles.HapinessMeter}>
      <Emojis />
      <Meter progress={progress} />
    </div>
  );
}

export default HapinessMeter;
