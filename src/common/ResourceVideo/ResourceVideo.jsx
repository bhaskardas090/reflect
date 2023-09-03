import React from "react";
import styles from "./ResourceVideo.module.css";
// MUI component
import Backdrop from "@mui/material/Backdrop";
// Library imports
import ReactPlayer from "react-player";

function ResourceVideo({ setIsOpen, isOpen, videoSource }) {
  return (
    <Backdrop
      sx={{
        color: "#fff",
        background: "black",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      open={isOpen}
      onClick={() => setIsOpen(false)}
    >
      <ReactPlayer
        url={videoSource}
        className={styles.reactPlayer}
        controls={true}
      />
    </Backdrop>
  );
}

export default ResourceVideo;
