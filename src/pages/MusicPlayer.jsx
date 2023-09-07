import { useEffect, useState } from "react";
import "../styles/MusicPlayer.css";
// Library imports
import { useLocation, useNavigate } from "react-router";
// Hooks imports
import useDB from "../hooks/useDB";
// Component imports
import PlayerControl from "../common/PlayerController/PlayerControl";
import Lazyloader from "../common/Lazyloader/Lazyloader";
import { PlayerLoader } from "../helper/SkeletonLoader";
// Asset import
import back from "../assets/back.png";
import { Link } from "react-router-dom";

const MusicPlayer = () => {
  const { state } = useLocation();
  console.log(state);
  const { getMeditationMusic, meditationMusic, getPranayam, pranayam } = useDB(
    state.collection
  ); // Backend methods for breathe and meditation
  const [audioFile, setAudioFile] = useState(null); // State for storing audioFile
  const [play, setPlay] = useState(false); // State for play state
  // Conditionally calling the backend based on the previous url
  useEffect(() => {
    state.collection === "breathe" && getPranayam(state.id);
    state.collection === "meditation" && getMeditationMusic(state.id);
  }, [state.id]);

  // Setting the audioFile data conditionally
  useEffect(() => {
    if (state.collection === "breathe") {
      setAudioFile(pranayam);
    }

    if (state.collection === "meditation") {
      setAudioFile(meditationMusic);
    }
  }, [pranayam, meditationMusic]);

  return (
    <>
      <div className="component">
        {!audioFile ? (
          <Lazyloader Loader={PlayerLoader} loaderLength={1} />
        ) : (
          <>
            <h2 className="playing">Playing Now</h2>
            <div className=""></div>
            <img
              className={play ? "musicCoverPlus" : "musicCover"}
              alt="song cover"
              src={audioFile?.imageUrl}
              style={{}}
            />
            <div>
              <h3 className="title">{audioFile?.songName}</h3>
              <p className="subTitle">{audioFile?.credit}</p>
            </div>
            <PlayerControl
              audioFile={audioFile}
              setPlay={setPlay}
              playState={play}
            />
            <img
              src={back}
              alt="back"
              style={{
                position: "absolute",
                left: "3%",
                top: "3%",
                width: "30px",
                height: "30px",
                cursor: "pointer",
              }}
              onClick={() => {
                state.collection === "breathe"
                  ? window.location.replace("./index.html#/breathe")
                  : window.location.replace("./index.html#/meditate");
              }}
            />
          </>
        )}
      </div>
    </>
  );
};

export default MusicPlayer;
