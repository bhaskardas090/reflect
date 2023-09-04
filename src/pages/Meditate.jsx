import React from "react";
import styles from "../styles/Meditate.module.css";
//Componenet imports
import GreetingsNav from "../common/GreetingsNav/GreetingsNav";
import Navigation from "../common/Navigation/Navigation";
import Quote from "../common/Quote/Quote";
import { getRandomNumber } from "../helper/RanomNumber";
//MUI Components
import Button from "@mui/material/Button";
// Library Imports
import { useNavigate } from "react-router-dom";
//Asset Imports
import BreatheImg from "../assets/Breathe_Page.png";

function Meditate() {
  const navigate = useNavigate();
  const medId = getRandomNumber(9);
  console.log(medId, "Mediation id");
  return (
    <div className={styles.breatheContainer}>
      <GreetingsNav />
      <Quote>
        “Meditation is not about stopping thoughts, but recognizing that we are
        more than our thoughts and our feelings.”
      </Quote>
      <div className={styles.bretheImgContainer}>
        <img src={BreatheImg} className={styles.breatheImg} alt="meditate" />
      </div>
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
      <p className={styles.info}>
        Click on the above button. Close your eyes and start meditating with
        this soothing music.
      </p>
      <Navigation />
    </div>
  );
}

export default Meditate;
