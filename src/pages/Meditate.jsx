import React from "react";
import styles from "../styles/Meditate.module.css";
import GreetingsNav from "../common/GreetingsNav/GreetingsNav";
import Navigation from "../common/Navigation/Navigation";
import Quote from "../common/Quote/Quote";
import BreatheImg from "../assets/Breathe_Page.png";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { getRandomNumber } from "../helper/RanomNumber";

function Meditate() {
  const navigate = useNavigate();
  const medId = getRandomNumber(2);
  return (
    <div className={styles.breatheContainer}>
      <GreetingsNav />
      <Quote>
        <p>
          “Meditation is not about stopping thoughts, but recognizing that we
          are more than our thoughts and our feelings.”
        </p>
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
      <Navigation />
    </div>
  );
}

export default Meditate;
