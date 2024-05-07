import { Grid, TextField, Card, Typography, Box, Button } from "@mui/material";
import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router";
import Header from "./Header";
import { DateField } from "@mui/x-date-pickers/DateField";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
export default function Registration() {
  const [formData,setFormData] =useState({firstName:"",middleName:"",lastName:"",gender:"",dob:"",phoneNumber:"",employeeID:"",skills:"",email:"",password:""})
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      firstName: formData.firstName,
      middleName: formData.middleName,
      lastName:formData.lastName ,
      gender: formData.gender,
      dob: "2024-05-07T05:43:17.976Z",
      phoneNumber: formData.phoneNumber,
      employeeId: formData.employeeID,
      skills: [
        formData.skills
      ],
      email: formData.email,
      password: formData.password
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    try {
      const response = await fetch(
        "http://localhost:3000/practice",
        requestOptions
      );
      if (response.ok) {
        const data = await response.json();
        navigate('/profile')
      }
    } catch (err) {
      console.log(err);
    } finally {
      console.log('ok')
    }
  };
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
                name="firstName"
                value={formData.firstName}
                variant="outlined"
                onChange={handleInput}
                sx={{ width: "100%" }}
              ></TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-basic"
                label="Middle Name"
                name="middleName"
                value={formData.middleName}
                variant="outlined"
                onChange={handleInput}
                sx={{ width: "100%" }}
              ></TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-basic"
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                variant="outlined"
                onChange={handleInput}
                sx={{ width: "100%" }}
              ></TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-basic"
                label="Gender"
                name="gender"
                value={formData.gender}
                onChange={handleInput}
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
                  <DateField label="Date of Birth" sx={{ width: "100%" }} name="dob" onChange={handleInput} />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-basic"
                label="Phone No"
                name="phoneNumber"
                value={formData.phoneNumber}
                variant="outlined"
                onChange={handleInput}
                sx={{ width: "100%" }}
              ></TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-basic"
                label="Employee ID"
                name="employeeID"
                value={formData.employeeID}
                variant="outlined"
                onChange={handleInput}
                sx={{ width: "100%" }}
              ></TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-basic"
                label="Skills"
                name="skills"
                value={formData.skills}
                variant="outlined"
                onChange={handleInput}
                sx={{ width: "100%" }}
              ></TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-basic"
                label="Email"
                name="email"
                value={formData.email}
                variant="outlined"
                onChange={handleInput}
                sx={{ width: "100%" }}
              ></TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="outlined-basic"
                label="Password"
                name="password"
                value={formData.password}
                variant="outlined"
                onChange={handleInput}
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
            <Button variant="contained" onClick={()=> handleSubmit()}>Submit</Button>
          </Box>
        </Card>
      </div>
    </>
  );
}
