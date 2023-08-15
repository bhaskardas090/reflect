import React, { useState } from "react";
import styles from "../../styles/RoutineHistory.module.css";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Todo from "../../common/Todo/Todo";
import HapinessMeter from "../../common/HapinessMeter/HapinessMeter";
import useDB from "../../hooks/useDB";

function RoutineHistory() {
  const { getRoutineHistory } = useDB("routineHistory");
  const [history, setHistory] = useState(null);
  const [noData, setNoData] = useState(null);

  const handleChange = async (e) => {
    getRoutineHistory(e.$d.toString(), setHistory, setNoData);
  };

  return (
    <div className={styles.routineHistory}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DesktopDatePicker
            label="Select The Date "
            onChange={(e) => handleChange(e)}
            sx={{ width: "90%", maxWidth: "800px", margin: "2rem auto" }}
            disableFuture
          />
        </DemoContainer>
      </LocalizationProvider>
      {/* Result Part */}
      <>
        {history && <HapinessMeter progress={history?.totalReward} />}
        {history && (
          <h3
            style={{
              borderBottom: "1px solid green",
              margin: "1rem",
              paddingBottom: "0.3rem",
            }}
          >
            Completed Tasks
          </h3>
        )}
        {history?.tasks
          .filter((task) => task.complete === true)
          .map((data) => (
            <Todo
              img={data.img}
              title={data.task}
              id={data.id}
              key={data.id}
              checked={data.complete}
              history="true"
            />
          ))}
      </>
      {history && (
        <h3
          style={{
            borderBottom: "1px solid red",
            margin: "1rem",
            paddingBottom: "0.3rem",
          }}
        >
          Inompleted Tasks
        </h3>
      )}
      {history?.tasks
        .filter((task) => task.complete === false)
        .map((data) => (
          <Todo
            img={data.img}
            title={data.task}
            id={data.id}
            key={data.id}
            checked={data.complete}
            history="true"
          />
        ))}
      {/*  No data part */}
      {noData && (
        <div
          style={{ height: "70vh", textAlign: "center", paddingTop: "3rem" }}
        >
          <img
            alt="no data"
            src="https://cdn-icons-png.flaticon.com/256/7591/7591003.png"
          />
          <h3 style={{ padding: "1rem", fontSize: "1rem" }}>
            Nothing no show.
            <br />
            Are you sure you worked hard that day?
          </h3>
        </div>
      )}
    </div>
  );
}

export default RoutineHistory;
