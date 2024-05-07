import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { pickersPopperClasses } from "@mui/x-date-pickers/internals";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const onHandleEdit = () => {
  alert("Details Edited Successfully");
};

export default function BasicModal(props) {
  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h4">Edit Personal Details</Typography>

            <Button variant="text" onClick={props.handleClose}>
              {" "}
              <CloseIcon />
            </Button>
          </Box>
          <Divider sx={{ marginTop: "10px", marginBottom: "1rem" }} />
          <Box>
            <Box sx={{ width: "100%" }}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={6}>
                  <TextField
                    id="outlined-required"
                    label="First Name"
                    sx={{
                      width: "100%",
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-required"
                    label="Middle Name"
                    sx={{
                      width: "100%",
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-required"
                    label="Last Name"
                    sx={{
                      width: "100%",
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-required"
                    label="Gender"
                    sx={{
                      width: "100%",
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-required"
                    label="Date Of Birth"
                    sx={{
                      width: "100%",
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-required"
                    label="Phone Number"
                    sx={{
                      width: "100%",
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    disabled
                    id="outlined-required"
                    label="Employee ID"
                    sx={{
                      width: "100%",
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    disabled
                    id="outlined-required"
                    label="Email"
                    sx={{
                      width: "100%",
                    }}
                  />
                </Grid>
              </Grid>
              <Button
                sx={{ marginTop: "1rem", float: "right" }}
                variant="contained"
                color={"primary"}
                onClick={() => {
                  onHandleEdit();
                  props.handleClose();
                }}
              >
                Save
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
