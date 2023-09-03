import React from "react";
import styles from "./Deatils.module.css";
import ReactPlayer from "react-player";

function Details({ pranayamTitle, benefits, direction, precautions, video }) {
  return (
    <div>
      <h3>Pranayam : {pranayamTitle}</h3>
      <ReactPlayer
        url={video}
        controls={true}
        width="80vw"
        height="40vw"
        className={styles.player}
      />
      {/* <div className={styles.direction}>
        <h3>DIRECTION:</h3>
        <ul className={styles.list}>
          {direction.map((data) => (
            <li key={data}>{data}</li>
          ))}
        </ul>
      </div> */}
      <div className={styles.benefits}>
        <h3>BENEFITS:</h3>
        <ul className={styles.list}>
          {benefits.map((data) => (
            <li key={data}>{data}</li>
          ))}
        </ul>
      </div>
      <div className={styles.precautions}>
        <h3>Things to keep in mind:</h3>
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
