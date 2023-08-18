import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import GreetingsNav from "../common/GreetingsNav/GreetingsNav";
import Quote from "../common/Quote/Quote";
import Navigation from "../common/Navigation/Navigation";
import Todo from "../common/Todo/Todo";
import useAuthContext from "../hooks/useAuthContext";
import useTaskContext from "../hooks/useTaskContext";
import useLogOut from "../hooks/useLogOut";
import TodoTitle from "../common/TodoTitle/TodoTitle";
import HapinessMeter from "../common/HapinessMeter/HapinessMeter";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import useDB from "../hooks/useDB";

function Home() {
  const { user } = useAuthContext();
  const { state } = useTaskContext();
  const { todayRoutineDone, isRoutineAlreadyDone } = useDB("routineHistory");

  const handleRoutineDone = async () => {
    const routineAlreadyDone = await isRoutineAlreadyDone(user.uid);
    console.log(routineAlreadyDone);
    if (routineAlreadyDone) {
      alert(
        "You can not perform this action. You have already submitted the routine for Today. Try again tomorrow."
      );
    } else {
      todayRoutineDone(user.uid, state);
    }
  };

  return (
    <div className={styles.homeContainer}>
      <GreetingsNav />
      {/* <Quote>
        <p>
          “You have to create little pockets of joy in your life to take care of
          yourself.”
        </p>
      </Quote> */}

      <HapinessMeter progress={state.totalReward} />
      {true && (
        <>
          <TodoTitle imgSrc="/HomeAssets/morning.png" time="Morning" />
          {state?.tasks
            ?.filter((data) => data.time === "morning")
            .map((data) => (
              <Todo
                img={data.img}
                title={data.task}
                id={data.id}
                key={data.id}
                checked={data.complete}
              />
            ))}
          <TodoTitle imgSrc="/HomeAssets/afternoon.png" time="Afternoon" />
          {state?.tasks
            ?.filter((data) => data.time === "afternoon")
            .map((data) => (
              <Todo
                img={data.img}
                title={data.task}
                id={data.id}
                key={data.id}
                checked={data.complete}
              />
            ))}
          <TodoTitle imgSrc="/HomeAssets/night.png" time="Night" />
          {state?.tasks
            ?.filter((data) => data.time === "night")
            .map((data) => (
              <Todo
                img={data.img}
                title={data.task}
                id={data.id}
                key={data.id}
                checked={data.complete}
              />
            ))}
        </>
      )}
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
      <Navigation />
    </div>
  );
}

export default Home;
