import { Avatar,Box, Card, CardContent, Divider, Grid, Typography,Button } from "@mui/material";
import React, { useState,useEffect } from "react";
import BasicRating from "./Rating";
import BasicModal from "./ModalEdit";
import Skills from "./Skills";
import { useParams } from "react-router";

export default function UserProfile(){
    const [open,setOpen] = React.useState(false);
    const handleClose = ()=>{
        setOpen(false)
    }
    const handleOpen = ()=>{
        setOpen(true)
    }
//     const [data,setData] = useState([])
//     const getData = async (e) => {
//         const myHeaders = new Headers();
//         myHeaders.append("tenant_name", "nashtech");
//         myHeaders.append("Content-Type", "application/json");
     
//         const requestOptions = {
//           method: "GET",
//           headers: myHeaders,
//         };
//         await fetch(`http://localhost:3000/profile/${id}`, requestOptions)
//           .then((response) => response.json())
//           .then((result) => setData(result))
//           .catch((error) => console.error(error));
//         console.log(data);
//       };
//       useEffect(() => {
//         getData();
//       }, []);
    return(
        <>
        <Box sx={{display:"flex",flexDirection:"column",gap:3}}> 
        <Card sx={{padding:3}} elevation={3}>
        <Box sx={{display:"flex",flexDirection:"row", gap:2}}>
        <Box>
            <Avatar sx={{width:200,height:200}} />
        </Box>
        <Box sx={{display:"flex",justifyContent:"center",flexDirection:"column",gap:2}}>
            <Box sx={{display:"flex",gap:"2rem"}}>
            <Typography sx={{marginTop:"1rem"}} fontWeight={'bold'} variant="h4">Devansh Shukla</Typography>
            
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Box sx={{ display: "flex", gap: "2rem" }}>
                <Typography
                  sx={{ marginTop: "1rem" }}
                  fontWeight={"bold"}
                  variant="h4"
                >
                  Devansh Shukla
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "row", gap: 10 }}>
                <Box>
                  <Typography variant="h6" fontWeight={"bold"}>
                    Department
                  </Typography>
                  <Typography>Frontend</Typography>
                </Box>
                <Box>
                  <Typography variant="h6" fontWeight={"bold"}>
                    Employee ID
                  </Typography>
                  <Typography>#123</Typography>
                </Box>
                <Box>
                  <Typography variant="h6" fontWeight={"bold"}>
                    Email
                  </Typography>
                  <Typography>test@gamail.com</Typography>
                </Box>
                <Box>
                  <Typography variant="h6" fontWeight={"bold"}>
                    Location
                  </Typography>
                  <Typography>Noida</Typography>
                </Box>

                <Box>
                  <Typography variant="h6" fontWeight={"bold"}>
                    Rating
                  </Typography>
                  <BasicRating rating={4} />
                </Box>
              </Box>
            </Box>
            </Box>
            </Box>
        </Card>
        <Grid container spacing={6}>
          <Grid item xs={6}>
            <Card elevation={6} sx={{ padding: 3 }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="h4">Personal Details</Typography>
                <Box>
                  <Button onClick={handleOpen} variant="contained">
                    Edit
                  </Button>
                </Box>
              </Box>
              <Divider sx={{ marginTop: "10px" }} />
              <CardContent>
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <Typography variant="h6" fontWeight={"bold"}>
                      First Name
                    </Typography>
                    <Typography> </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="h6" fontWeight={"bold"}>
                      Middle Name
                    </Typography>
                    <Typography> </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="h6" fontWeight={"bold"}>
                      Last Name
                    </Typography>
                    <Typography></Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="h6" fontWeight={"bold"}>
                      Gender
                    </Typography>
                    <Typography></Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="h6" fontWeight={"bold"}>
                      Date of Birth
                    </Typography>
                    <Typography> </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="h6" fontWeight={"bold"}>
                      Phone Number
                    </Typography>
                    <Typography></Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="h6" fontWeight={"bold"}>
                      Employee ID
                    </Typography>
                    <Typography></Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="h6" fontWeight={"bold"}>
                      Email
                    </Typography>
                    <Typography></Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            </Grid>
            <Grid item xs={6}>
            <Card elevation={6} sx={{padding:3}} >
               <Skills />
               </Card>
            </Grid>
            <Grid item xs={6}>
            <Card elevation={6} sx={{padding:3}}>
                <Box sx={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                <Typography variant="h4">Ratings and Feedback</Typography>
              </Box>
              <Divider sx={{ marginTop: "10px" }} />
              <CardContent>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Typography variant="h6" fontWeight={"bold"}>
                      Person Name 1
                    </Typography>
                    <Typography>Feedback given by him</Typography>
                    <BasicRating rating={3} />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h6" fontWeight={"bold"}>
                      Person Name 2
                    </Typography>
                    <Typography>Feedback given by him</Typography>
                    <BasicRating rating={2} />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <BasicModal open={open} handleClose={handleClose} data={""} />
    </>
  );
}

