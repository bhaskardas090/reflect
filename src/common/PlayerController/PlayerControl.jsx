import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { AiFillPauseCircle, AiFillPlayCircle } from "react-icons/ai";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import useSound from "use-sound";

const PlayerControl = ({ audioFile, setPlay }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState({
    min: "",
    sec: "",
  });
  const [currTime, setCurrTime] = useState({
    min: "",
    sec: "",
  });

  const [seconds, setSeconds] = useState();

  const [play, { pause, duration, sound }] = useSound(audioFile?.songUrl, {
    onend: () => {
      setIsPlaying(false);
      console.log("Music Ended ************");
    },
  });

  useEffect(() => {
    if (duration) {
      const sec = duration / 1000;
      const min = Math.floor(sec / 60);
      const secRemain = Math.floor(sec % 60);
      setTime({
        min: min,
        sec: secRemain,
      });
    }
  }, [isPlaying, duration]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        setSeconds(sound.seek([]));
        const min = Math.floor(sound.seek([]) / 60);
        const sec = Math.floor(sound.seek([]) % 60);
        setCurrTime({
          min,
          sec,
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [sound]);

  const playingButton = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
      setPlay(false);
    } else {
      play();
      setIsPlaying(true);
      setPlay(true);
    }
  };
  return (
    <div>
      <div>
        <div className="time">
          <p className="min-sec-start">
            {currTime.min}:{currTime.sec}
          </p>
          <p className="min-sec-end">
            {time.min}:{time.sec}
          </p>
        </div>
        <input
          type="range"
          min="0"
          max={duration / 1000}
          default="0"
          value={seconds}
          className="timeline"
          onChange={(e) => {
            sound.seek([e.target.value]);
          }}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {!isPlaying ? (
          <button className="playButton" onClick={playingButton}>
            <IconContext.Provider value={{ size: "4em", color: "#27AE60" }}>
              <AiFillPlayCircle style={{ color: "black" }} />
            </IconContext.Provider>
          </button>
        ) : (
          <button className="playButton" onClick={playingButton}>
            <IconContext.Provider value={{ size: "4em", color: "#27AE60" }}>
              <AiFillPauseCircle style={{ color: "black" }} />
            </IconContext.Provider>
          </button>
        )}
      </div>
    </div>
  );
};

export default PlayerControl;
