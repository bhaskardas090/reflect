import React from "react";
import styles from "../styles/Meditate.module.css";
import GreetingsNav from "../common/GreetingsNav/GreetingsNav";
import Navigation from "../common/Navigation/Navigation";
import Quote from "../common/Quote/Quote";
import BreatheImg from "../assets/Breathe_Page.png";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { getRandomNumber } from "../helper/RanomNumber";

function Meditate() {
  const navigate = useNavigate();
  const medId = getRandomNumber(2);
  return (
    <div className={styles.breatheContainer}>
      <GreetingsNav />
      <Quote>
        “Meditation is not about stopping thoughts, but recognizing that we are
        more than our thoughts and our feelings.”
      </Quote>
      <img src={BreatheImg} className={styles.breatheImg} alt="meditate" />
      <div className={styles.buttonContainer}>
        <Button
          variant="contained"
          className={styles.startButton}
          onClick={() =>
            navigate(`/music-player/meditate`, {
              state: { id: medId, collection: "meditation" },
            })
          }
        >
          Start Meditating
        </Button>
      </div>
      <p
        style={{
          color: "black",
          padding: "1rem",
          marginTop: "1rem",
          fontSize: ".8rem",
          textAlign: "center",
        }}
      >
        Click on the above button. Close your eyes and start meditating with
        this soothing music.
      </p>
      <Navigation />
    </div>
  );
}

export default Meditate;
