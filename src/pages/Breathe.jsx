import React, { useEffect } from "react";
import GreetingsNav from "../common/GreetingsNav/GreetingsNav";
import Navigation from "../common/Navigation/Navigation";
import styles from "../styles/Breathe.module.css";
import Quote from "../common/Quote/Quote";
import MeditationType from "../common/MeditationType/MeditationType";
import useDB from "../hooks/useDB";
import Lazyloader from "../common/Lazyloader/Lazyloader";
import { ListLoader } from "../helper/SkeletonLoader";

function Breathe() {
  const { getPranayamas, breatheData } = useDB("breathe");
  useEffect(() => {
    getPranayamas();
  }, []);
  return (
    <div className={styles.meditateContainer}>
      <GreetingsNav />
      <Quote>
        <p>
          “Without full awareness of breathing, there can be no development of
          meditative stability and understanding.”
        </p>
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
