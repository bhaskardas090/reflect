import React from "react";
import DataImg from "../../assets/data.svg";

function NoData() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginTop: "5rem",
        flexDirection: "column",
      }}
    >
      <img src={DataImg} width="80%" alt="search_to_see_data" />
      <b style={{ textAlign: "center" }}>
        Select a date <br />
        To have a glance at your past acitvities
      </b>
    </div>
  );
}

export default NoData;
