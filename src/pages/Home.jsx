import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
// Compnents imports
import { TodoLoader } from "../helper/SkeletonLoader";
import GreetingsNav from "../common/GreetingsNav/GreetingsNav";
import Quote from "../common/Quote/Quote";
import Navigation from "../common/Navigation/Navigation";
import Todo from "../common/Todo/Todo";
import TodoTitle from "../common/TodoTitle/TodoTitle";
import HapinessMeter from "../common/HapinessMeter/HapinessMeter";
import Lazyloader from "../common/Lazyloader/Lazyloader";
import ModalComponent from "../common/ModalComponent/ModalComponent";
// MUI components import
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
// Custom hooks imports
import useTaskContext from "../hooks/useTaskContext";
import useRoutine from "../hooks/useRoutine";
// Library imports
import useSound from "use-sound";
import Confetti from "react-confetti";
// Assets imports
import tryTomorrow from "../assets/try-tomorrow.png";
import congrats from "../assets/congrats.png";
import failed from "../assets/failed.mp3";
import complete from "../assets/complete.mp3";
import morning from "../assets/morning.png";
import afternoon from "../assets/afternoon.png";
import night from "../assets/night.png";
import mustdo from "../assets/mustdo.png";

function Home() {
  //Calling the backend
  const { fetchRoutine } = useRoutine();
  const { todayRoutineDone, isRoutineAlreadyDone } = useRoutine();
  //Consuming state data
  const { state } = useTaskContext();
  // States
  const [isExploding, setIsExploding] = useState(false);
  const [showTryModal, setShowTryModal] = useState(false);
  const [showCongratsModal, setShowCongratsModal] = useState(false);
  //Music player state
  const [playComplete] = useSound(complete);
  const [playFailed] = useSound(failed);
  // Function for checking if the routine is submitted for today or not
  const handleRoutineDone = () => {
    const routineAlreadyDone = isRoutineAlreadyDone();
    if (routineAlreadyDone) {
      setShowTryModal(true);
      playFailed();
    } else {
      todayRoutineDone();
      const bodyElement = document.querySelector("body");
      bodyElement.scrollIntoView(true);
      setIsExploding(true);
      setShowCongratsModal(true);
      playComplete();
      setTimeout(() => {
        setIsExploding(false);
      }, 6000);
    }
  };
  // Fetched new data eve             ry time on reload
  useEffect(() => {
    fetchRoutine();
  }, [fetchRoutine]);

  return (
    <div className={styles.homeContainer}>
      <GreetingsNav />
      <Quote>"Discipline is the bridge between goals and accomplishment"</Quote>
      <HapinessMeter progress={state?.totalReward} />
      {/*  TASKS Section */}
      <div className={styles.todos}>
        <TodoTitle imgSrc={mustdo} time="Must Do" />
        {!state?.tasks?.length ? (
          <Lazyloader Loader={TodoLoader} />
        ) : (
          state?.tasks
            ?.filter((data) => data.time === "must-do")
            .map((data) => (
              <Todo
                img={data.img}
                title={data.task}
                id={data.id}
                key={data.id}
                time={data.time}
                checked={data.complete}
              />
            ))
        )}
        <TodoTitle imgSrc={morning} time="Morning" />
        {!state?.tasks?.length ? (
          <Lazyloader Loader={TodoLoader} />
        ) : (
          state?.tasks
            ?.filter((data) => data.time === "morning")
            .map((data) => (
              <Todo
                img={data.img}
                title={data.task}
                id={data.id}
                key={data.id}
                time={data.time}
                checked={data.complete}
              />
            ))
        )}
        <TodoTitle imgSrc={afternoon} time="Afternoon" />
        {!state?.tasks?.length ? (
          <Lazyloader Loader={TodoLoader} />
        ) : (
          state?.tasks
            ?.filter((data) => data.time === "afternoon")
            .map((data) => (
              <Todo
                img={data.img}
                title={data.task}
                id={data.id}
                key={data.id}
                time={data.time}
                checked={data.complete}
              />
            ))
        )}
        <TodoTitle imgSrc={night} time="Night" />
        {!state?.tasks?.length ? (
          <Lazyloader Loader={TodoLoader} />
        ) : (
          state?.tasks
            ?.filter((data) => data.time === "night")
            .map((data) => (
              <Todo
                img={data.img}
                title={data.task}
                id={data.id}
                key={data.id}
                time={data.time}
                checked={data.complete}
              />
            ))
        )}
      </div>
      {/* Congratulations effect */}
      {isExploding && (
        <Confetti
          style={{ zIndex: 9999 }}
          tweenDuration={3000}
          numberOfPieces={300}
        />
      )}
      {/* //* Used for showing congratulations message on routine completion */}
      {showCongratsModal && (
        <ModalComponent
          showModal={showCongratsModal}
          setShowModal={setShowCongratsModal}
          height="44vh"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <img src={congrats} alt="congrats" />
            {state.totalReward <= 30 && (
              <p>Good! Try to push yourself a little more👍</p>
            )}
            {state.totalReward > 30 && state.totalReward <= 50 && (
              <p>Great! You have done a good job😊</p>
            )}
            {state.totalReward > 50 && state.totalReward <= 80 && (
              <p>Wow! You were almost there to hit the milestone😃</p>
            )}
            {state.totalReward > 80 && (
              <p>Yay! You are a rockstar. Keep Going🤩</p>
            )}
          </div>
        </ModalComponent>
      )}
      {/* //! Used for showing message if user try to submit multiple time */}
      {showTryModal && (
        <ModalComponent
          showModal={showTryModal}
          setShowModal={setShowTryModal}
          height="50vh"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <img src={tryTomorrow} alt="try-tomorrow" />
            <p>
              You have already submitted the routine for Today. Try again
              tomorrow.
            </p>
          </div>
        </ModalComponent>
      )}
      {/* //? Submit Button */}
      <div className={styles.actionButton}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          endIcon={<SendIcon />}
          sx={{
            width: "90vw",
            background: "linear-gradient(180deg, #FDA52B 21.30%, #FE7401 100%)",
          }}
          onClick={handleRoutineDone}
        >
          done for the day
        </Button>
      </div>
      {/* Bottom Navigation */}
      <Navigation />
    </div>
  );
}

export default Home;
