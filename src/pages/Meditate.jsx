import React, { useEffect } from "react";
import GreetingsNav from "../common/GreetingsNav/GreetingsNav";
import Navigation from "../common/Navigation/Navigation";
import styles from "../styles/Meditate.module.css";
import Quote from "../common/Quote/Quote";
import MeditationType from "../common/MeditationType/MeditationType";
import Sleep from "../assets/Sleep_Cycle.png";
import Focus from "../assets/Focus_Concentration.png";
import Stress from "../assets/Stress_Reduction.png";
import Devotion from "../assets/Devotion.png";
import useDB from "../hooks/useDB";
import { useState } from "react";

function Meditate() {
  const { getPranayamas, breatheData } = useDB("breathe");
  useEffect(() => {
    getPranayamas();
  }, []);
  console.log(breatheData);
  return (
    <div className={styles.meditateContainer}>
      <GreetingsNav />
      <Quote>
        <p>
          “Meditation is not about stopping thoughts, but recognizing that we
          are more than our thoughts and our feelings.”
        </p>
      </Quote>
      <div className={styles.meditationCategory}>
        {breatheData?.map((pranayam) => (
          <MeditationType data={pranayam} key={pranayam.title} />
        ))}
      </div>
      {/* <div className={styles.meditationCategory}>
        <MeditationType
          img={Sleep}
          title="Sleep Cycle"
          desc="The Best Bed one can Sleep on is Peace."
        />
        <MeditationType
          img={Focus}
          title="Focus & Concentration "
          desc="Always Remember your focus determines your reality."
        />
      </div>
      <div className={styles.meditationCategory}>
        <MeditationType
          img={Stress}
          title="Stress Reduction"
          desc="Nothing is permanent in this world, not even Stress."
        />
        <MeditationType
          img={Devotion}
          title="Devotion"
          desc="Devotion is not dissection of life but a total embrace."
        />
      </div> */}
      <Navigation />
    </div>
  );
}

export default Meditate;
