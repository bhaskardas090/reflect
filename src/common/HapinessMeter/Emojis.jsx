import React from "react";
import styles from "./HapinessMeter.module.css";

function Emojis() {
  return (
    <div className={styles.emojis}>
      <div className={styles.emoji}>🙂</div>
      <div className={styles.emoji}>😌</div>
      <div className={styles.emoji}>😊</div>
      <div className={styles.emoji}>😄</div>
      <div className={styles.emoji}>😁</div>
    </div>
  );
}

export default Emojis;
