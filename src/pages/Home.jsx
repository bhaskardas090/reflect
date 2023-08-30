import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import GreetingsNav from "../common/GreetingsNav/GreetingsNav";
import Quote from "../common/Quote/Quote";
import Navigation from "../common/Navigation/Navigation";
import Todo from "../common/Todo/Todo";
import useAuthContext from "../hooks/useAuthContext";
import useTaskContext from "../hooks/useTaskContext";
import TodoTitle from "../common/TodoTitle/TodoTitle";
import HapinessMeter from "../common/HapinessMeter/HapinessMeter";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import useDB from "../hooks/useDB";
import { TodoLoader } from "../helper/SkeletonLoader";
import Lazyloader from "../common/Lazyloader/Lazyloader";
import useSound from "use-sound";
import Confetti from "react-confetti";
import ModalComponent from "../common/ModalComponent/ModalComponent";
import tryTomorrow from "../assets/try-tomorrow.png";
import congrats from "../assets/congrats.png";
import failed from "../assets/failed.mp3";
import complete from "../assets/complete.mp3";

function Home() {
  const { user } = useAuthContext();
  const { state } = useTaskContext();
  const { fetchRoutine } = useDB("routines");
  const { todayRoutineDone, isRoutineAlreadyDone } = useDB("routineHistory");
  const [isExploding, setIsExploding] = useState(false);
  const [showTryModal, setShowTryModal] = useState(false);
  const [showCongratsModal, setShowCongratsModal] = useState(false);
  const [playComplete] = useSound(complete);
  const [playFailed] = useSound(failed);

  const handleRoutineDone = async () => {
    const routineAlreadyDone = await isRoutineAlreadyDone(user.uid);
    // console.log(routineAlreadyDone);
    if (routineAlreadyDone) {
      setShowTryModal(true);
      playFailed();
    } else {
      // const bodyElement = document.querySelector("body");
      // bodyElement.scrollIntoView(true);
      // setTimeout(() => {
      // setIsExploding(true);
      setShowCongratsModal(true);
      playComplete();
      // }, 2000);
      todayRoutineDone(user.uid, state);
      setTimeout(() => {
        setIsExploding(false);
      }, 6000);
    }
  };

  useEffect(() => {
    fetchRoutine();
  }, [user]);

  return (
    <div className={styles.homeContainer}>
      <GreetingsNav />

      <HapinessMeter progress={state.totalReward} />
      {true && (
        <>
          <TodoTitle imgSrc="/HomeAssets/mustdo.png" time="Must Do" />
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
          <TodoTitle imgSrc="/HomeAssets/morning.png" time="Morning" />
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
          <TodoTitle imgSrc="/HomeAssets/afternoon.png" time="Afternoon" />
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
          <TodoTitle imgSrc="/HomeAssets/night.png" time="Night" />
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
        </>
      )}
      {/* Congratulations effect */}
      {isExploding && (
        <Confetti
          width="500px"
          height="800px"
          tweenDuration={3000}
          numberOfPieces={300}
        />
      )}
      {/* //* Used for showing congratulations message on routine completion */}
      {showCongratsModal && (
        <ModalComponent
          showModal={showCongratsModal}
          setShowModal={setShowCongratsModal}
          height="40vh"
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
      {user && (
        <div className={styles.actionButton}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            endIcon={<SendIcon />}
            sx={{
              width: "90vw",
              background:
                "linear-gradient(180deg, #FDA52B 21.30%, #FE7401 100%)",
            }}
            onClick={handleRoutineDone}
          >
            done for the day
          </Button>
        </div>
      )}

      <Navigation />
    </div>
  );
}

export default Home;
