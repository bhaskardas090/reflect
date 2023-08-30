import React from "react";
import styles from "./HapinessMeter.module.css";

function Emojis() {
  return (
    <div className={styles.Emojis}
      style={{
        margin: "auto",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <div style={{ fontSize: "2rem" }}>😠</div>
      <div style={{ fontSize: "2rem" }}>😖</div>
      <div style={{ fontSize: "2rem" }}>😐</div>
      <div style={{ fontSize: "2rem" }}>😊</div>
      <div style={{ fontSize: "2rem" }}>😁</div>
    </div>
  );
}

export default Emojis;
