// HappinessMeter.js
import React from "react";
import styles from "./HapinessMeter.module.css"; // Create this CSS file for styling

const Meter = ({ progress }) => {
  const getColor = (progress) => {
    if (progress <= 10) {
      return "#b71c1c";
    } else if (progress <= 20) {
      return "#e53935";
    } else if (progress <= 30) {
      return "#ff5722";
    } else if (progress <= 40) {
      return "#ff7043";
    } else if (progress <= 50) {
      return "#fbc02d";
    } else if (progress <= 60) {
      return "#ffee58";
    } else if (progress <= 70) {
      return "#aed581";
    } else if (progress <= 80) {
      return "#8bc34a";
    } else if (progress <= 90) {
      return "#66bb6a";
    } else if (progress < 95) {
      return "#4caf50";
    } else if (progress >= 95) {
      return "#005CC8";
    } else {
      return "transparent";
    }
  };

  const meterStyle = {
    width: `${progress}%`,
    background: `linear-gradient(to right, ${getColor(progress)}, ${getColor(
      progress + 1
    )})`,
  };

  return (
    <div className={styles.meter}>
      <div className={styles.meterBar} style={meterStyle}></div>
    </div>
  );
};

export default Meter;
