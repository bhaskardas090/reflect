import { useEffect, useState } from "react";
import "../styles/MusicPlayer.css";
import { useNavigate, useParams } from "react-router";
import useDB from "../hooks/useDB";
import PlayerControl from "../common/PlayerController/PlayerControl";
import mandala from "../assets/mandala.png";
const MusicPlayer = () => {
  const { id } = useParams();
  const { getPranayam, pranayam } = useDB("breathe");
  const [audioFile, setAudioFile] = useState(null);
  const navigate = useNavigate();
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
          className="musicCover"
          alt="song cover"
          // src={audioFile?.imageUrl}
          src={mandala}
          style={{ width: "60vw", height: "30vh", objectFit: "cover" }}
        />
        <div>
          <h3 className="title">{audioFile?.songName}</h3>
          <p className="subTitle">Tisha Saha</p>
        </div>
        {!audioFile?.songUrl ? (
          "Loading.."
        ) : (
          <PlayerControl audioFile={audioFile} />
        )}
        <img
          src="https://cdn-icons-png.flaticon.com/128/318/318477.png"
          alt="back"
          onClick={() => navigate(-1)}
          style={{
            position: "absolute",
            left: "3%",
            top: "3%",
            width: "30px",
            height: "30px",
          }}
        />
      </div>
    </>
  );
};

export default MusicPlayer;
