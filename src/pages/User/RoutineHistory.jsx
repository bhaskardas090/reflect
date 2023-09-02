import React, { useState } from "react";
import styles from "../../styles/User/RoutineHistory.module.css";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Todo from "../../common/Todo/Todo";
import HapinessMeter from "../../common/HapinessMeter/HapinessMeter";
import useDB from "../../hooks/useDB";
import PageHeader from "../../common/PageHeader/PageHeader";
import { useNavigate } from "react-router";
import NoData from "../../common/NoData/NoData";

function RoutineHistory() {
  const { getRoutineHistory } = useDB("routineHistory");
  const [history, setHistory] = useState(null);
  const [noData, setNoData] = useState(null);

  const navigate = useNavigate();

  const handleChange = async (e) => {
    getRoutineHistory(e.$d.toString(), setHistory, setNoData);
  };

  return (
    <div className={styles.routineHistory}>
      <PageHeader
        title="Past Routine"
        type="primary"
        onclick={() => navigate("/")}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DesktopDatePicker
            label="Select The Date "
            onChange={(e) => handleChange(e)}
            sx={{
              width: "95%",
              maxWidth: "800px",
              margin: "4rem auto 1rem auto",
            }}
            disableFuture
          />
        </DemoContainer>
      </LocalizationProvider>
      {!history && !noData && <NoData />}
      {/* 
       // ***********************
      //* Result Part 
      // ************************
      */}
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
          Incomplete Tasks
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
      {/* 
       // ***********************
      //* No Data Part
      // ************************
      */}
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
