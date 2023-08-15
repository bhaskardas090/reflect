import React from "react";
import Emojis from "./Emojis";
import Meter from "./Meter";

function HapinessMeter({ progress }) {
  return (
    <div
      style={{
        margin: "auto",
        position: "relative",
      }}
    >
      <Emojis />
      <Meter progress={progress} />
    </div>
  );
}

export default HapinessMeter;
