import { useNavigate } from "react-router";
import styles from "./VideoPlayer.module.css";
// MUI component
import Backdrop from "@mui/material/Backdrop";
// Library imports
import ReactPlayer from "react-player";
// Asset imports
import close from "../../assets/close.png";
import audio from "../../assets/audio.png";

function VideoPlayer({ setIsOpen, isOpen, videoSource, audioId, path }) {
  const navigate = useNavigate();

  return (
    <Backdrop
      sx={{
        background: `black`,
        position: "realtive",
        height: "100vh",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      open={isOpen}
      onClick={() => setIsOpen(false)}
    >
      <div className={styles.audioAndClose}>
        {/* If opening from breathe page show the button else do not show it */}
        {path === "breathe" && (
          <img
            src={audio}
            alt="audio-only"
            className={styles.audio}
            onClick={() => {
              navigate(`/music-player/breathe`, {
                state: { id: audioId, collection: "breathe" },
              });
            }}
          />
        )}
        <img
          src={close}
          alt="close"
          onClick={() => setIsOpen(false)}
          className={styles.closeBtn}
        />
      </div>

      {videoSource ? (
        <ReactPlayer url={videoSource} controls={true} />
      ) : (
        <h1 style={{ color: "white" }}>Loading...</h1>
      )}
    </Backdrop>
  );
}

export default VideoPlayer;
