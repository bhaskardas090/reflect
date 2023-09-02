import React from "react";
import Box from "@mui/material/Box";
import {
  studentRoutine,
  workingProfessionalRoutine,
  houseWifeRoutine,
  oldAgeRoutine,
} from "../helper/TaskType";
import { Link, useNavigate } from "react-router-dom";
import useDB from "../hooks/useDB";
import PageHeader from "../common/PageHeader/PageHeader";
import student from "../assets/STUDENT.jpg";
import working from "../assets/WORKING.jpg";
import homemaker from "../assets/HOMEMAKER.jpg";
import oldage from "../assets/OLDAGE.jpg";

function SelectTask() {
  const navigate = useNavigate();
  const { selectRoutine } = useDB("routines");
  const handleTask = async (activeTask) => {
    console.log(activeTask);
    selectRoutine(activeTask);
    navigate("/");
  };
  return (
    <>
      <PageHeader
        onclick={() => navigate(-1)}
        type="primary"
        title="Select Routine"
      />
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          // justifyContent: "space-around",
          // alignItems: "center",
          paddingTop: "70px",
          // backgroundColor: "#CDFFF4",
          // gap: "1rem",
        }}
      >
        <img
          src={student}
          width="100%"
          alt="student-routine"
          style={{ padding: ".3rem 1rem", borderRadius: "30px" }}
          onClick={() => handleTask(studentRoutine)}
        />
        <img
          src={working}
          width="100%"
          alt="working-routine"
          style={{ padding: ".3rem 1rem", borderRadius: "30px" }}
          onClick={() => handleTask(workingProfessionalRoutine)}
        />
        <img
          src={homemaker}
          width="100%"
          alt="homemaker-routine"
          style={{ padding: ".3rem 1rem", borderRadius: "30px" }}
          onClick={() => handleTask(houseWifeRoutine)}
        />
        <img
          src={oldage}
          width="100%"
          alt="oldage-routine"
          style={{ padding: ".3rem 1rem", borderRadius: "30px" }}
          onClick={() => handleTask(oldAgeRoutine)}
        />
        {/* <Link to="/" style={{ textDecoration: "none" }}>
          <BoxSx name="STUDENT" color="#2196f3" activeTask={studentRoutine} />
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <BoxSx
            name="WORKING PRESSIONAL"
            color="#4caf50"
            activeTask={workingProfessionalRoutine}
          />
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <BoxSx
            name="HOMEMAKER"
            color="#673ab7"
            activeTask={houseWifeRoutine}
          />
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <BoxSx
            name="RETIRED OLD AGE"
            color="#ff9800"
            activeTask={oldAgeRoutine}
          />
        </Link> */}
      </div>
    </>
  );
}

// function BoxSx({ name, color, activeTask }) {
//   const { selectRoutine } = useDB("routines");
//   const handleTask = async () => {
//     console.log(activeTask);
//     selectRoutine(activeTask);
//   };
//   return (
//     <Box
//       sx={{
//         width: "75vw",
//         height: "16vh",
//         color: "white",
//         display: "flex",
//         padding: "2rem",
//         justifyContent: "center",
//         borderRadius: "10px",
//         alignItems: "center",
//         textAlign: "center",
//         background: color,
//         cursor: "pointer",
//       }}
//       onClick={handleTask}
//     >
//       <h2>{name}</h2>
//     </Box>
//   );
// }

export default SelectTask;
