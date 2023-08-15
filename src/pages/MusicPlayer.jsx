import { useEffect, useState } from "react";
import "../styles/MusicPlayer.css";
import { useNavigate, useParams } from "react-router";
import useDB from "../hooks/useDB";
import PlayerControl from "../common/PlayerController/PlayerControl";
import { Link } from "react-router-dom";

const MusicPlayer = () => {
  const { id } = useParams();
  const { getPranayam, pranayam } = useDB("breathe");
  const [audioFile, setAudioFile] = useState(null);
  const navigate = useNavigate();
  const [play, setPlay] = useState(false);
  useEffect(() => {
    getPranayam(id);
  }, [id]);

  useEffect(() => {
    setAudioFile(pranayam);
  }, [pranayam]);

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
