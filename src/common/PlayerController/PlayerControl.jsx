import { Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";
// Icon imports
import { IconContext } from "react-icons";
import { AiFillPauseCircle, AiFillPlayCircle } from "react-icons/ai";
// Library imports
import useSound from "use-sound";

const PlayerControl = ({ audioFile, setPlay }) => {
  const [isPlaying, setIsPlaying] = useState(false); // player playing state
  // total time
  const [time, setTime] = useState({
    min: "",
    sec: "",
  });
  // current time
  const [currTime, setCurrTime] = useState({
    min: "",
    sec: "",
  });

  const [seconds, setSeconds] = useState("0");

  // using the library to get the methods
  const [play, { pause, duration, sound }] = useSound(audioFile?.songUrl, {
    onend: () => {
      setIsPlaying(false);
    },
  });

  // used for calculation the total time
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

  // used for calculating the current time
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

  // toggle between play and pause
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
      {!time.sec ? (
        // Loader
        <div style={{ width: "260px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "1rem",
            }}
          >
            <Skeleton animation="wave" height={10} width="10%" />
            <Skeleton animation="wave" height={10} width="10%" />
          </div>
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton
            variant="circular"
            width={40}
            height={40}
            sx={{ margin: "auto" }}
          />
        </div>
      ) : (
        <>
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

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              outline: "none",
            }}
          >
            {!isPlaying ? (
              <button
                className="playButton"
                onClick={playingButton}
                style={{ cursor: "pointer", outline: "none" }}
              >
                <IconContext.Provider
                  value={{ size: "4rem", color: "#27AE60" }}
                >
                  <AiFillPlayCircle style={{ color: "black" }} />
                </IconContext.Provider>
              </button>
            ) : (
              <button
                className="playButton"
                onClick={playingButton}
                style={{ cursor: "pointer", outline: "none" }}
              >
                <IconContext.Provider
                  value={{ size: "4rem", color: "#27AE60" }}
                >
                  <AiFillPauseCircle style={{ color: "black" }} />
                </IconContext.Provider>
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default PlayerControl;
