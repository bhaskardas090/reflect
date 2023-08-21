import React from "react";
import Backdrop from "@mui/material/Backdrop";
import ReactPlayer from "react-player";

function ResourceVideo({ setIsOpen, isOpen, videoSource }) {
  return (
    <Backdrop
      sx={{
        color: "#fff",
        background: "black",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      open={isOpen}
      onClick={() => setIsOpen(false)}
    >
      <ReactPlayer
        url={videoSource}
        width="100%"
        height="25vh"
        controls={true}
      />
    </Backdrop>
  );
}

export default ResourceVideo;
