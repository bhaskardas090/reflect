import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Skeleton from "@mui/material/Skeleton";

export function TodoLoader() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        margin: "1rem auto",
        marginLeft: "1rem",
      }}
    >
      <Skeleton variant="circular" width={25} height={25} />
      <Skeleton
        variant="rectangular"
        width={"80vw"}
        height={60}
        animation="wave"
        style={{ borderRadius: "10px" }}
      />
    </div>
  );
}

export function ListLoader() {
  return (
    <Card sx={{ width: "44vw" }}>
      <Skeleton
        sx={{ width: "44vw", height: "120px" }}
        animation="wave"
        variant="rectangular"
      />

      <CardContent>
        <React.Fragment>
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} width="80%" />
        </React.Fragment>
      </CardContent>
    </Card>
  );
}

export function PlayerLoader() {
  return (
    <div
      style={{
        width: "100%",
        height: "50vh",
        display: "grid",
        justifyContent: "center",
        textAlign: "center",
        margin: "auto",
        gap: "1rem",
      }}
    >
      <Skeleton
        variant="text"
        sx={{ fontSize: "1rem", width: "30vw", margin: "auto" }}
      />
      <Skeleton
        variant="circular"
        height={"30vh"}
        width={"30vh"}
        style={{ margin: "auto" }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Skeleton animation="wave" height={30} width="80%" />
        <Skeleton animation="wave" height={30} width="30%" />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Skeleton animation="wave" height={10} width="10%" />
        <Skeleton animation="wave" height={10} width="10%" />
      </div>
      <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
      <Skeleton
        variant="circular"
        width={40}
        height={40}
        sx={{ margin: "auto" }}
      />
    </div>
  );
}
