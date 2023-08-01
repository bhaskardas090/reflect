import { useEffect, useState } from "react";
import useSound from "use-sound"; // for handling the sound
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai"; // icons for play and pause
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi"; // icons for next and previous track
import { IconContext } from "react-icons";
import '../styles/temp.css'
import audioFiles from "../audio";

// Function for getting the random audio file
function getRandoAudioFile() {
  // Generate a random index of the audio file

  const randomIndex = Math.floor(Math.random() * audioFiles.length);

  // Get the randomly selected object from the array using the random index
  const randomAudioFile = audioFiles[randomIndex];

  return {
    imgUrl: randomAudioFile.imgUrl,
    songUrl: randomAudioFile.songUrl,
    songName: randomAudioFile.songName,
  }
}

// Getting the random audio file
const audioFile = getRandoAudioFile();

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState({
    min: "",
    sec: ""
  });
  const [currTime, setCurrTime] = useState({
    min: "",
    sec: ""
  });


  const [seconds, setSeconds] = useState();

  const [play, { pause, duration, sound }] = useSound(audioFile.songUrl);

  useEffect(() => {
    if (duration) {
      const sec = duration / 1000;
      const min = Math.floor(sec / 60);
      const secRemain = Math.floor(sec % 60);
      setTime({
        min: min,
        sec: secRemain
      });
    }
  }, [isPlaying]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        setSeconds(sound.seek([]));
        const min = Math.floor(sound.seek([]) / 60);
        const sec = Math.floor(sound.seek([]) % 60);
        setCurrTime({
          min,
          sec
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [sound]);

  const playingButton = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  };


  return (
    <div className="component">
      <h2 className="playing">Playing Now</h2>
      <img className="musicCover" src={audioFile.imgUrl} />
      <div>
        <h3 className="title">{audioFile.songName}</h3>
        <p className="subTitle">Kaliedo Young</p>
      </div>
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
      <div>
        <button className="playButton">
          <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
            <BiSkipPrevious style={{color:'black'}}/>
          </IconContext.Provider>
        </button>
        {!isPlaying ? (
          <button className="playButton" onClick={playingButton}>
            <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
              <AiFillPlayCircle style={{color:'black'}}/>
            </IconContext.Provider>
          </button>
        ) : (
          <button className="playButton" onClick={playingButton}>
            <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
              <AiFillPauseCircle style={{color:'black'}}/>
            </IconContext.Provider>
          </button>
        )}
        <button className="playButton">
          <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
            <BiSkipNext style={{color:'black'}}/>
          </IconContext.Provider>
        </button>
      </div>
    </div>
  );
}

export default MusicPlayer;

