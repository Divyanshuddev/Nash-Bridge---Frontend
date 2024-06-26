import { Box, Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import logo from "./logokode-removebg-preview.png";
import { Link } from "react-router-dom";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  const [loginData,setLoginData]= useState({email:"",password:""})
  const handleInput = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };
    const handleSubmit = async (e) => {
      e.preventDefault();
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
  
      const raw = JSON.stringify({
        email:loginData.email,
        password:loginData.password
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
  return (
    <div>
      <Header />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          alignContent: "center",
          height: "100%",
        }}
        my={5}
      >
        <Box width={"50%"} mx={20}>
          <Box
            sx={{
              background:
                "linear-gradient(to right, #9900cc 0%, #cc0000 100%);",
              height: 800,
              borderRadius: 15,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
              mx={7}
            >
              <Typography fontSize={50} fontWeight={"bold"} color={"white"}>
                Start your side hustle today
              </Typography>
              <Typography fontSize={20} color={"white"}>
                Bridging the Gap Between Mentor and Mentee
              </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <img src={logo} alt="logo"></img>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
            gap: 2,
          }}
          my={15}
        >
          <Typography variant="h3" fontWeight={"bold"} mx={7}>
            Nash Bridge
          </Typography>
          <Box mx={8}>
            <Typography variant="h4">Welcome Back</Typography>
            <Typography variant="h6" fontSize={15} mx={3}>
              Please login to your account
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              id="outlined-basic"
              label="Email address"
              name="email"
              value={loginData.email}
              variant="outlined"
              sx={{ width: "50%" }}
              onChange={handleInput}
            />
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              name="password"
              value={loginData.password}
              sx={{ width: "50%" }}
              onChange={handleInput}
            />
            <Button variant="contained" color="error" sx={{ width: "50%" }} onClick={handleSubmit}>
              Login
            </Button>
          </Box>
          <Box mx={18}>
            <Typography>Or Login with</Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row", gap: 2 }}>
            <Button variant="outlined" color="error" sx={{ width: "25%" }}>
              Google
            </Button>
            <Button variant="outlined" color="error" sx={{ width: "25%" }}>
              Microsoft
            </Button>
          </Box>
          <Box mx={10} my={3} display={"flex"} flexDirection={"row"}>
            <Typography>Don't have an account?</Typography>
            <Link to="/signup">Signup</Link>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
