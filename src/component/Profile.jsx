import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import HomeIcon from "@mui/icons-material/Home";
import CallIcon from "@mui/icons-material/Call";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import HomeTab from "./HomeTab";
import UserProfile from "./UserProfile";
import Calender from "./Calender";
import { useLocation } from "react-router";
import Header from "./Header";
import Booking from "./Booking";
import Logout from "./Logout";
import LogoutIcon from '@mui/icons-material/Logout';
const drawerWidth = 220;
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
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Profile() {
  const location = useLocation();
  const data = location.state;
  const [value, setValue] = React.useState(0);
  console.log(value);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <div>
      <Header />
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Box>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              orientation="vertical"
              sx={{
                "& button[aria-selected='true']": {
                  background: "#b3c6ff",
                  borderRadius: "20px",
                  padding:"-10px -20px -10px -20px !important"
                },
                padding:"10px",
                "& .MuiTabs-indicator": { display: "none" }
              }}
              
            >
              <Tab
                icon={<HomeIcon />}
                iconPosition="start"
                label="Home"
                {...a11yProps(0)}
              />
              <Tab
                icon={<CallIcon />}
                iconPosition="start"
                label="Bookings"
                {...a11yProps(1)}
              />
              <Tab
                icon={<CalendarMonthIcon />}
                iconPosition="start"
                label="Calender"
                {...a11yProps(2)}
              />
              <Tab
                icon={<AccountBoxIcon />}
                iconPosition="start"
                label="Profile"
                {...a11yProps(3)}
              />
              <Tab
                icon={<EmojiEventsIcon />}
                iconPosition="start"
                label="Rewards"
                {...a11yProps(4)}
              />
              <Tab
                icon={<AnalyticsIcon />}
                iconPosition="start"
                label="Activity"
                {...a11yProps(5)}
              />
               <Tab
                icon={<LogoutIcon/>}
                iconPosition="start"
                label="Logout"
                {...a11yProps(6)}
              />
            </Tabs>
            
          </Box>
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
        >
          <CustomTabPanel value={value} index={0}>
            <HomeTab />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Booking />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
           <Calender/>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            <UserProfile />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={4}>
            Item Two
          </CustomTabPanel>
          <CustomTabPanel value={value} index={5}>
            Item three
          </CustomTabPanel>
          <CustomTabPanel value={value} index={6}>
            <Logout />
          </CustomTabPanel>
        </Box>
      </Box>
    </div>
  );
}
