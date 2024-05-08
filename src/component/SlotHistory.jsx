import React from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Card,CardContent,ListItem,ListItemAvatar,Avatar,List,ListItemText,Button } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { TypeSpecimen } from '@mui/icons-material';
import { useNavigate } from 'react-router';


function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

export default function SlotHistory() {
    const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  


  const defaultTab = {tab:1};
  const navigate = useNavigate();
  return (
    <div>
     <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Mentor" {...a11yProps(0)} />
          <Tab label="Mentee" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
      <Card sx={{width:"100%",backgroundColor:"whitesmoke"}}>
      <CardContent sx={{height:"30vh",marginBottom:"40px"}}>
      {/* <Box sx={{padding:2}}>
        <Typography variant="h5">Today Slot's</Typography>
      </Box> */}
      <List sx={{ width: '100%', bgcolor: 'background.paper',maxHeight: '100%', overflow: 'auto',marginBottom:"5px" }}>
      <ListItem alignItems="flex-start">
        {/* <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar> */}
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
              <Button onClick={()=> navigate('/profile',{state:defaultTab}) } >
                <OpenInNewIcon />
              </Button>
              {/* {confirm===0?(<Button variant="outlined" >Confirm</Button>): (<Button variant="contained" color="success">Booked</Button>)} */}
            </React.Fragment>
          }
        />
      </ListItem>
      </List>
    </CardContent>
    </Card>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <Card sx={{width:"100%",backgroundColor:"whitesmoke"}}>
      <CardContent sx={{height:"30vh",marginBottom:"40px"}}>
      {/* <Box sx={{padding:2}}>
        <Typography variant="h5">Today Slot's</Typography>
      </Box> */}
      <List sx={{ width: '100%', bgcolor: 'background.paper',maxHeight: '100%', overflow: 'auto',marginBottom:"5px" }}>
      <ListItem alignItems="flex-start">
        {/* <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar> */}
        <ListItemText
          primary="Person 2"
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
              {/* {confirm===0?(<Button variant="outlined" >Confirm</Button>): (<Button variant="contained" color="success">Booked</Button>)} */}
            </React.Fragment>
          }
        />
      </ListItem>
      <ListItem alignItems="flex-start">
        {/* <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar> */}
        <ListItemText
          primary="Person 3"
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
              {/* {confirm===0?(<Button variant="outlined" >Confirm</Button>): (<Button variant="contained" color="success">Booked</Button>)} */}
            </React.Fragment>
          }
        />
      </ListItem>
      </List>
      
    </CardContent>
    </Card>
      </CustomTabPanel>
    </Box>
    </div>
  )
}
