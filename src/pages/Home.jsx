import React from "react";
import styles from "../styles/Home.module.css";
import GreetingsNav from "../common/GreetingsNav/GreetingsNav";
import Quote from "../common/Quote/Quote";
import Navigation from "../common/Navigation/Navigation";
import Todo from "../common/Todo/Todo";
import { HomepageData } from "../data";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";
import useTaskContext from "../hooks/useTaskContext";
import useLogOut from "../hooks/useLogOut";
import TodoTitle from "../common/TodoTitle/TodoTitle";
import HapinessMeter from "../common/HapinessMeter/HapinessMeter";

function Home() {
  const { user } = useAuthContext();
  const { state } = useTaskContext();
  const { logout } = useLogOut();

  const handleLogOut = async () => {
    logout();
  };

  return (
    <div className={styles.homeContainer}>
    <div className={styles.greetings}>
      <GreetingsNav />
      </div>
      {/* <Quote>
        <p>
          “You have to create little pockets of joy in your life to take care of
          yourself.”
        </p>
      </Quote> */}
      <div className={styles.meter}>
      <HapinessMeter/>
      </div>
      
      {true && (
        <>
        <div className={styles.todo}>
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
            </div>
        </>
      )}
      {/* <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        {user ? <h1>{user.email}</h1> : <h1>null</h1>}
        {user && (
          <Button
            variant="outlined"
            color="error"
            onClick={handleLogOut}
            style={{ margin: '1rem auto' }}
          >
            Log Out
          </Button>
        )}
      </div> */}
      {user && (
        <Button
          variant="outlined"
          color="error"
          onClick={handleLogOut}
          style={{ margin: "1rem auto" }}
        >
          Log Out
        </Button>
      )}
      <Navigation />
    </div>
  );
}

export default Home;
