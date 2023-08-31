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
          justifyContent: "space-around",
          alignItems: "center",
          paddingTop: "4rem",
          gap: "1rem",
        }}
      >
        <img src={student} wdth="100vw" alt="student-routine" />
        <img src={working} alt="working-routine" />
        <img src={homemaker} alt="homemaker-routine" />
        <img src={oldage} alt="oldage-routine" />
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
