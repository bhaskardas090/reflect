import React from "react";
import Emojis from "./Emojis";
import Meter from "./Meter";
import useTaskContext from "../../hooks/useTaskContext";

function HapinessMeter() {
  const { state } = useTaskContext();
  return (
    <div
      style={{
        margin: "auto",
        position: "relative",
      }}
    >
      <Emojis />
      <Meter progress={50} />
    </div>
  );
}

export default HapinessMeter;
