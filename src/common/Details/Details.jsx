import React from "react";
import styles from "./Deatils.module.css";

function Details({ pranayamTitle, benefits, direction, precautions }) {
  return (
    <div>
      <h3>Pranayam : {pranayamTitle}</h3>
      <div className={styles.benefits}>
        <h3>DIRECTION:</h3>
        <ul className={styles.list}>
          {direction.map((data) => (
            <li key={data}>{data}</li>
          ))}
        </ul>
      </div>
      <div className={styles.direction}>
        <h3>BENEFITS:</h3>
        <ul className={styles.list}>
          {benefits.map((data) => (
            <li key={data}>{data}</li>
          ))}
        </ul>
      </div>
      <div className={styles.precautions}>
        <h3>PRECAUTIONS:</h3>
        <ul className={styles.list}>
          {precautions.map((data) => (
            <li key={data}>{data}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Details;
