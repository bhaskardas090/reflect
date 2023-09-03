import React, { useEffect } from "react";
import styles from "../styles/Breathe.module.css";
//Component imports
import GreetingsNav from "../common/GreetingsNav/GreetingsNav";
import Navigation from "../common/Navigation/Navigation";
import Quote from "../common/Quote/Quote";
import Lazyloader from "../common/Lazyloader/Lazyloader";
import MeditationType from "../common/MeditationType/MeditationType";
import { ListLoader } from "../helper/SkeletonLoader";
//Custom Hook imports
import useDB from "../hooks/useDB";

function Breathe() {
  const { getPranayamas, breatheData } = useDB("breathe");
  // Consuming the hook to get pranayams from backend
  useEffect(() => {
    getPranayamas();
  }, []);

  return (
    <div className={styles.meditateContainer}>
      <GreetingsNav />
      <Quote>
        “Without full awareness of breathing, there can be no development of
        meditative stability and understanding.”
      </Quote>
      <div className={styles.meditationCategory}>
        <div className={styles.pranayams}>
          {!breatheData ? (
            <Lazyloader loaderLength={6} Loader={ListLoader} />
          ) : (
            breatheData?.map((pranayam) => (
              <MeditationType
                data={pranayam.data}
                id={pranayam.id}
                key={pranayam.id}
              />
            ))
          )}
        </div>
      </div>
      <Navigation />
    </div>
  );
}

export default Breathe;
