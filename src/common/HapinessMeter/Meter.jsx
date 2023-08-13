// HappinessMeter.js
import React from "react";
import styles from "./HapinessMeter.module.css"; // Create this CSS file for styling

const Meter = ({ progress }) => {
  const getColor = (progress) => {
    if (progress <= 10) {
      return "red";
    } else if (progress <= 30) {
      return "orange";
    } else if (progress <= 50) {
      return "yellow";
    } else if (progress <= 70) {
      return "lightgreen";
    } else {
      return "green";
    }
  };

  const meterStyle = {
    width: `${progress}%`,
    background: `linear-gradient(to right, ${getColor(progress)}, ${getColor(
      progress + 1
    )})`,
  };

  return (
    <div className={styles.happinessMeter}>
      <div className={styles.meterBar} style={meterStyle}></div>
    </div>
  );
};

export default Meter;
