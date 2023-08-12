import React from "react";

function Emojis() {
  return (
    <div
      style={{
        width: "95vw",
        margin: "auto",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <div style={{ fontSize: "2rem" }}>😠</div>
      <div style={{ fontSize: "2rem" }}>😖</div>
      <div style={{ fontSize: "2rem" }}>😐</div>
      <div style={{ fontSize: "2rem" }}>😊</div>
      <div style={{ fontSize: "2rem" }}>😁</div>
    </div>
  );
}

export default Emojis;
