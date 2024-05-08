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

export default function BasicModal(props) {
    const [fname,setFname] = React.useState(props.data.firstName)
    const [mname,setMname] = React.useState(props.data.middleName)
    const [lname,setLname] = React.useState(props.data.lastName)
    const [gender,setGender] = React.useState(props.data.gender)
    const [dob,setDob] = React.useState(props.data.dateOfBirth)
    const [phone,setPhone] = React.useState(props.data.phoneNumber)
    const [employee,setEmloyee] = React.useState(props.data.employeeId)
    const [email,setEmail] = React.useState(props.data.email)
    const onHandleEdit = () => {
        const editedDetails = {
            firstName:fname ,
            middleName: mname,
            lastName:lname,
            gender:gender,
            dateOfBirth:dob,
            phoneNumber:phone,
            employeeId:employee,
            email:email
        }
        console.log(editedDetails)
        alert("Details Edited Successfully");
      };
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
                    value={fname}
                    sx={{
                      width: "100%",
                    }}
                    onChange={(e)=>{
                        setFname(e.target.value)
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-required"
                    label="Middle Name"
                    value={mname}
                    sx={{
                      width: "100%",
                    }}
                    onChange={(e)=>{
                        setMname(e.target.value)
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-required"
                    label="Last Name"
                    value={lname}
                    sx={{
                      width: "100%",
                    }}
                    onChange={(e)=>{
                        setLname(e.target.value)
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-required"
                    label="Gender"
                    value={gender}
                    sx={{
                      width: "100%",
                    }}
                    onChange={(e)=>{
                        setGender(e.target.value)
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-required"
                    label="Date Of Birth"
                    value={dob}
                    sx={{
                      width: "100%",
                    }}
                    onChange={(e)=>{
                        setDob(e.target.value)
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="outlined-required"
                    label="Phone Number"
                    value={phone}
                    sx={{
                      width: "100%",
                    }}
                    onChange={(e)=>{
                        setPhone(e.target.value)
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    disabled
                    id="outlined-required"
                    label="Employee ID"
                    value={employee}
                    sx={{
                      width: "100%",
                    }}
                    onChange={(e)=>{
                        setEmloyee(e.target.value)
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    disabled
                    id="outlined-required"
                    label="Email"
                    value={email}
                    sx={{
                      width: "100%",
                    }}
                    onChange={(e)=>{
                        setEmail(e.target.value)
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
