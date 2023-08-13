import React from "react";
import styles from "./MeditationType.module.css";
import { useState } from "react";
import Details from "../Details/Details";
import ModalComponent from "../Modal/Modal";

function MeditationType({ data }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <div className={styles.meditationType}>
        <img
          src={data.coverImgSrc}
          alt="cover_image"
          className={styles.meditationTypeImg}
        />
        <div className={styles.meditationTypeContent}>
          <h4 className={styles.title}>{data.title}</h4>
          <h5 className={styles.description}>{data.description}</h5>
        </div>
        <img
          src="https://cdn-icons-png.flaticon.com/128/7641/7641698.png"
          alt="info"
          className={styles.info}
          onClick={() => setShowModal(!showModal)}
        />
      </div>
      <ModalComponent showModal={showModal} setShowModal={setShowModal}>
        <Details
          pranayamTitle={data.pranayamTitle}
          direction={data.direction}
          benefits={data.benefits}
          precautions={data.precautions}
        />
      </ModalComponent>
    </div>
  );
}

export default MeditationType;
