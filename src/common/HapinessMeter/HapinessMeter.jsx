import React from "react";
import Emojis from "./Emojis";
import Meter from "./Meter";
import styles from "./HapinessMeter.module.css";
import useTaskContext from "../../hooks/useTaskContext";

function HapinessMeter() {
  const { state } = useTaskContext();
  return (
    <div className={styles.HappinessMeter}
      style={{
        margin: "auto",
        position: "relative",
      }}
    >
      <Emojis />
      <Meter progress={state.totalReward} />
    </div>
  );
}

export default HapinessMeter;
