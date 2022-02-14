import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Btn } from "../button";

const style = {
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "6px solid #2e7d32",
  boxShadow: 24,
  borderRadius: 3,
  p: 4,
  height:"auto",
  btn: {
    marginTop: "20px",
  },
};

export const AlertModal = ({ open, handleClose, heading, description }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {heading}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {description}
          </Typography>
          <Box style={{marginTop:"20px"}}>
            <Btn value={"Close"} onClick={() => handleClose()} />
          </Box>
        </Box>
      </Modal>
    </div>
  );
};
