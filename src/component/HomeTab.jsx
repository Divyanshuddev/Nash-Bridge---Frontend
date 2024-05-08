import {
  Typography,
  Divider,
  Button,
  Box,
  Card,
  Grid,
  Avatar,
  CardContent,
} from "@mui/material";
import React from "react";
import EditModal from "./EditModal";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { BarChart } from '@mui/x-charts/BarChart';
import SlotHistory from "./SlotHistory";
export default function HomeTab() {
  const [slot, setSlot] = React.useState(0);
  const [confirm,setConfirm] = React.useState(0);
  const [openModal,setOpenModal] = React.useState(false)
  // const handleOpen = () => {
  //   setOpenModal(true);
  //   console.log(openModal)
  // };
  // const handleClose = () => {
  //   setOpenModal(false);
  // };
  // const handleChange = (event) => {
  //   setSlot(event.target.value);
  // };
  const [openAlert, setOpenAlert] = React.useState(false);

  const handleClickOpen = () => {
    setOpenAlert(true);
  };

  const handleClose = () => {
    setOpenAlert(false);
  };
  return (
    <div>
      <Box>
        <Typography variant="h4" fontWeight={"bold"}>
          Hi, User
        </Typography>
        <Divider sx={{ marginTop: "10px" }} />
      </Box>
      <Grid container spacing={4}>
      <Grid item xs={6} my={5}>
      <Card sx={{width:"100%",backgroundColor:"whitesmoke"}}>
      <CardContent sx={{height:"80vh",marginBottom:"40px"}}>
      <Box sx={{padding:2}}>
        <Typography variant="h5">Today Slot's</Typography>
      </Box>
      <List sx={{ width: '100%', bgcolor: 'background.paper',maxHeight: '100%', overflow: 'auto',marginBottom:"5px" }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Person 1"
          secondary={
            <React.Fragment >
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Slot Tittle
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
              <Button >
                <OpenInNewIcon />
              </Button>
              {confirm===0?(<Button variant="outlined" onClick={()=> handleClickOpen()}>Confirm</Button>): (<Button variant="contained" color="success">Booked</Button>)}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Person 2"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Slot Tittle
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
              
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Person 3"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Slot Tittle
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
              
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Person 4"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Slot Tittle
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Person 5"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Slot Tittle
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Person 5"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Slot Tittle
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Person 5"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Slot Tittle
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Person 5"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Slot Tittle
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Person 5"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Slot Tittle
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Person 5"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Slot Tittle
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Person 5"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Slot Tittle
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Person 5"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Slot Tittle
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
    </CardContent>
    <Dialog
        open={openAlert}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
      "& .MuiDialog-container": {
        "& .MuiPaper-root": {
          width: "100%",
          maxWidth: "500px",
        },
      },
    }}
      >
        <DialogTitle id="alert-dialog-title">
          {"Confirm the Slot"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you want to confirm the available slot?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={()=> {setConfirm(1); handleClose();}} autoFocus>
            Book
          </Button>
        </DialogActions>
      </Dialog>
      </Card>
      </Grid>
      <Grid item xs={6} my={5}>
      <Box sx={{display:"flex",flexDirection:"column",gap:3}}>
      <Box>
      <Card sx={{width:"100%"}}>
      <Box sx={{padding:2}}>
        <Typography variant="h5">Slot's History</Typography>
      </Box>
      <SlotHistory />
        </Card>
      </Box>
        <Box>
      <Card sx={{width:"100%"}} elevation={4}>
      <Box sx={{padding:2}}>
        <Typography variant="h5">Slot's History</Typography>
      </Box>
      <BarChart
      xAxis={[{ scaleType: 'band', data: ['Jan', 'Feb', 'Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'] }]}
      series={[{ data: [4, 3, 5, 5,2,6,8,9,10,4,2,6] }]}
      slotProps={{
              axisLine: { display: "none" },
              axisTick: { display: "none" },
              bar: {
                rx: 15,
                style: { shapeRendering: "auto" },
              },
            }}
      height={235}
    />
        </Card>
      </Box>
      </Box>
      
        
      </Grid>
      </Grid>
    </div>
  );
}
