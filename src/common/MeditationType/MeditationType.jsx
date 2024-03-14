import React, { useState } from "react";
import styles from "./MeditationType.module.css";
//Component imports
import Details from "../Details/Details";
import ModalComponent from "../ModalComponent/ModalComponent";
//Asset import
import info from "../../assets/info.png";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

function MeditationType({ data, id, path }) {
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.meditationTypeContainer}>
      <div className={styles.meditationType} onClick={() => setIsOpen(true)}>
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
        src={info}
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
      {/* Video Player for showing the video */}
      {isOpen && (
        <VideoPlayer
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          videoSource={data.video}
          audioId={id}
          path={path}
        />
      )}
    </div>
  );
}

export default MeditationType;
