import React from "react";
import Emojis from "./Emojis";
import Meter from "./Meter";
import styles from "./HapinessMeter.module.css";

function HapinessMeter({ progress }) {
  return (
    <div
      className={styles.HapinessMeter}
      // style={{
      //   margin: "auto",
      //   position: "relative",
      // }
    >
      <Emojis />
      <Meter progress={progress} />
    </div>
  );
}

export default HapinessMeter;
