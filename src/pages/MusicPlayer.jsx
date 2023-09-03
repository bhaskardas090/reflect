import { useEffect, useState } from "react";
import "../styles/MusicPlayer.css";
// Library imports
import { useLocation } from "react-router";
// Hooks imports
import useDB from "../hooks/useDB";
// Component imports
import PlayerControl from "../common/PlayerController/PlayerControl";
import Lazyloader from "../common/Lazyloader/Lazyloader";
import { PlayerLoader } from "../helper/SkeletonLoader";

const MusicPlayer = () => {
  const { state } = useLocation();
  const { getMeditationMusic, meditationMusic, getPranayam, pranayam } = useDB(
    state.collection
  ); // Backend methods for breathe and meditation
  const [audioFile, setAudioFile] = useState(null); // State for storing audioFile
  const [play, setPlay] = useState(false); // State for play state
  // Conditionally calling the backend 
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
              <p className="subTitle">Tisha Saha</p>
            </div>
            <PlayerControl
              audioFile={audioFile}
              setPlay={setPlay}
              playState={play}
            />
            <a href="/">
              <img
                src="https://cdn-icons-png.flaticon.com/128/318/318477.png"
                alt="back"
                style={{
                  position: "absolute",
                  left: "3%",
                  top: "3%",
                  width: "30px",
                  height: "30px",
                }}
              />
            </a>
          </>
        )}
      </div>
    </>
  );
};

export default MusicPlayer;
