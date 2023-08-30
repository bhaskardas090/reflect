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
