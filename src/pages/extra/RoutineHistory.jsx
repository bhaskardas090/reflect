import React, { useState } from "react";
import styles from "../../styles/RoutineHistory.module.css";
// MUI component imports
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
// Component imports
import Todo from "../../common/Todo/Todo";
import HapinessMeter from "../../common/HapinessMeter/HapinessMeter";
import PageHeader from "../../common/PageHeader/PageHeader";
import NoData from "../../common/NoData/NoData";
// Custom hook
import useRoutine from "../../hooks/useRoutine";
// Library import
import { useNavigate } from "react-router";
// Asset imports
import nodatasearch from "../../assets/nodata-search.png";

function RoutineHistory() {
  const { getRoutineHistory } = useRoutine(); // Calling the backend service
  const [history, setHistory] = useState(null); // State to store previous data
  const [noData, setNoData] = useState(null); // State to check if data is available or not

  const navigate = useNavigate();

  // Event handler : getting the routine from backend
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
              margin: "70px auto 1rem auto",
            }}
            disableFuture
          />
        </DemoContainer>
      </LocalizationProvider>
      {/* Initial Page : No Data Fallback */}
      {!history && !noData && <NoData />}
      {/* 
       // ***********************
      //* Result Part 
      // ************************
      */}
      <>
        {history && <HapinessMeter progress={history?.totalReward} />}

        {history && <h3 className={styles.complete}>Completed Tasks</h3>}
        <div className={styles.completetasks}>
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
        </div>
      </>
      {history && <h3 className={styles.incomplete}>Incomplete Tasks</h3>}
      <div className={styles.incompletetasks}>
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
      </div>
      {/* 
       // ***********************
      //* No Data Part
      // ************************
      */}
      {noData && (
        <div
          style={{ height: "70vh", textAlign: "center", paddingTop: "3rem" }}
        >
          <img alt="no data" src={nodatasearch} />
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
