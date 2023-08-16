import { useEffect, useState } from "react";
import "../styles/MusicPlayer.css";
import { useParams, useLocation } from "react-router";
import useDB from "../hooks/useDB";
import PlayerControl from "../common/PlayerController/PlayerControl";

const MusicPlayer = () => {
  const { state } = useLocation();
  // const { id, collection } = useParams();
  // console.log(state.id, state.collection, "MEDITATION DETAILS");
  const { getMeditationMusic, meditationMusic, getPranayam, pranayam } = useDB(
    state.collection
  );
  const [audioFile, setAudioFile] = useState(null);
  const [play, setPlay] = useState(false);
  useEffect(() => {
    state.collection === "breathe" && getPranayam(state.id);
    state.collection === "meditation" && getMeditationMusic(state.id);
  }, [state.id]);

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
        {!audioFile?.songUrl ? (
          "Loading.."
        ) : (
          <PlayerControl
            audioFile={audioFile}
            setPlay={setPlay}
            playState={play}
          />
        )}
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
      </div>
    </>
  );
};

export default MusicPlayer;
