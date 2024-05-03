import { Grid, TextField, Card, Typography, Box, Button } from "@mui/material";
import React from "react";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router";
import Header from "./Header";
import { DateField } from "@mui/x-date-pickers/DateField";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
export default function Registration() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "5rem" }}
      >
        <Card
          sx={{
            padding: 4,
            width: "50%",
            display: "flex",
            flexDirection: "column",
            gap: 3,
            borderRadius: 3,
          }}
          elevation={6}
        >
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="h4">Signup</Typography>
          </Box>
          <Grid container spacing={6}>
            <Grid item xs={6}>
              <TextField
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                sx={{ width: "100%" }}
              ></TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-basic"
                label="Middle Name"
                variant="outlined"
                sx={{ width: "100%" }}
              ></TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
                sx={{ width: "100%" }}
              ></TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-basic"
                label="Gender"
                variant="outlined"
                select
                defaultValue={"Gender"}
                sx={{ width: "100%" }}
              >
                <MenuItem key={"Gender"} value={"Gender"}>
                  Gender
                </MenuItem>
                <MenuItem key={"Female"} value={"Female"}>
                  Female
                </MenuItem>
                <MenuItem key={"Male"} value={"Male"}>
                  Male
                </MenuItem>
                <MenuItem key={"Other"} value={"Other"}>
                  Other
                </MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={6} my={-1}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DateField"]} >
                  <DateField label="Date of Birth" sx={{ width: "100%" }} />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-basic"
                label="Phone No"
                variant="outlined"
                sx={{ width: "100%" }}
              ></TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-basic"
                label="Employee ID"
                variant="outlined"
                sx={{ width: "100%" }}
              ></TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-basic"
                label="Skills"
                variant="outlined"
                sx={{ width: "100%" }}
              ></TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                sx={{ width: "100%" }}
              ></TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                sx={{ width: "100%" }}
              ></TextField>
            </Grid>
          </Grid>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              gap: 3,
            }}
          >
            <Button variant="contained" onClick={() => navigate(-1)}>
              Back
            </Button>
            <Button variant="contained">Submit</Button>
          </Box>
        </Card>
      </div>
    </>
  );
}
