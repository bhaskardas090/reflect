import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  height: "80vh",
  bgcolor: "white",
  boxShadow: 24,
  border: "none",
  outline: "none",
  p: 2,
  overflow: "scroll",
};

export default function BasicModal({ children, showModal, setShowModal }) {
  return (
    <div>
      <Modal
        open={showModal}
        onClose={() => setShowModal(!showModal)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>{children}</Box>
      </Modal>
    </div>
  );
}
