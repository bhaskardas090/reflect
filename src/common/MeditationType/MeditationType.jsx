import React from "react";
import styles from "./MeditationType.module.css";
import { useState } from "react";
import Details from "../Details/Details";
import ModalComponent from "../ModalComponent/ModalComponent";
import { useNavigate } from "react-router";

function MeditationType({ data, id }) {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  return (
    <div className={styles.meditationTypeContainer}>
      <div
        className={styles.meditationType}
        onClick={() =>
          navigate(`/music-player/breathe`, {
            state: { id: id, collection: "breathe" },
          })
        }
      >
        <img
          src={data.coverImgSrc}
          alt="cover_image"
          className={styles.meditationTypeImg}
        />
        <div className={styles.meditationTypeContent}>
          <h4 className={styles.title}>{data.title}</h4>
          <h5 className={styles.description}>{data.description}</h5>
        </div>
      </div>
      <img
        src="https://cdn-icons-png.flaticon.com/128/9627/9627593.png"
        alt="info"
        className={styles.info}
        onClick={() => setShowModal(!showModal)}
      />
      <ModalComponent showModal={showModal} setShowModal={setShowModal}>
        <Details
          pranayamTitle={data.pranayamTitle}
          direction={data.direction}
          benefits={data.benefits}
          precautions={data.precautions}
          video={data.video}
        />
      </ModalComponent>
    </div>
  );
}

export default MeditationType;
