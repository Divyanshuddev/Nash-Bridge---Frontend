import React from "react";
import Header from "./Header";
import {
  Box,
  Typography,
  Card,
  Button,
  List,
  ListSubheader,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Divider,
} from "@mui/material";
import personPhoto from "./personPhoto.png";
import htmlIcon from "./HTMLICON.svg";
import cssICON from "./icon-css.svg";
import jsIcon from "./icons8-js.svg";
import reactIcon from "./icons8-react-js.svg";
import angularIcon from "./icons8-angularjs.svg";
import nodeIcon from "./icons8-nodejs.svg";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Footer from "./Footer";
import awsIcon from "./AI-ML/aws-2.svg";
import azure from "./AI-ML/azure-2.svg";
import Docker from "./AI-ML/Docker.svg";
import googleCloud from "./AI-ML/google-cloud.svg";
import TensorFlow from "./AI-ML/TensorFlow.svg";
import apacheSpark from "./Scala/apache-spark-5.svg";
import Scala from "./Scala/Scala.svg";
import jMeter from "./Test Automation/jmeter_square.png";
import nightWatch from "./Test Automation/nightwatch-js.svg";
import postMan from "./Test Automation/postman.svg";
import RestAssured from "./Test Automation/RestAssured.svg";
import selenium from "./Test Automation/selenium.svg";
import MediaCard from "./cardList";
import ImageIcon1 from "./MicrosoftTeams-image11.png";
import ImageIcon2 from "./MicrosoftTeams-image12.png";
import ImageIcon3 from "./MicrosoftTeams-image13.png";
import ImageIcon4 from "./MicrosoftTeams-image21.png";
import ImageIcon5 from "./MicrosoftTeams-image22.png";
import ImageIcon6 from "./MicrosoftTeams-image23.png";
import ImageIcon7 from "./MicrosoftTeams-image30.png";
import ImageIcon8 from "./MicrosoftTeams-image31.png";
export default function Home() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const box1 =
    "Experience personalized growth like never before with our 1:1 mentorship feature. Connect with experienced mentors, schedule sessions at your convenience, and receive tailored guidance to achieve  your goals. Sign up now and embark on your journey to success!";
  const box2 =
    "Foster collaboration and knowledge sharing within your organization by hosting internal webinars on our platform. Empower your team to share expertise,discuss important topics, and strengthen bonds across departments. With easy scheduling and secure access for employees, hosting a webinar internally has never been simpler.";
  const box3 =
    "Request Your Perfect Session Now invites individuals to pursue tailored experiences that meet their unique needs and preferences.It signifies a call to action, urging individuals to take initiative in shaping their ideal sessions or activities.This statement embodies empowerment and proactivity,goals, and aspirations.";
  return (
    <div>
      <Header />
      <Box
        sx={{
          backgroundColor: "#F2F2F2",
          marginTop: "-80px",
          marginBottom: "-80px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            height: "60vh",
            backgroundColor: "#F2F2F2",
          }}
          my={10}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "80px",
              marginLeft: "250px",
            }}
          >
            <Typography variant="h1">Start your</Typography>
            <Typography variant="h1" fontWeight={"bold"}>
              side hustle
            </Typography>
            <Typography variant="h1" fontWeight={"bold"}>
              today
            </Typography>
            <Box width={"50%"}>
              <Typography variant="h5">
                Turn your passion and knowledge into a thriving business.Help
                your audience get ahead in life
              </Typography>
            </Box>
          </Box>

          <Box width={"50%"}>
            <Box>
              <img
                style={{ marginBottom: "-8.1rem", marginTop: "5rem" }}
                src={ImageIcon8}
              ></img>
              <img
                style={{
                  zIndex: "99",
                  marginTop: "-70rem",
                  height: "20rem",
                  width: "18rem",
                  marginLeft: "-25rem",
                }}
                src={ImageIcon7}
              ></img>
            </Box>
          </Box>
        </Box>
        <Box mx={30}>
          <Button
            variant="contained"
            sx={{
              padding: "10px 50px 10px 50px",
              fontSize: "20px",
              backgroundColor: "black",
              marginLeft: "300px",
              marginBottom: "5rem",
            }}
            size="large"
          >
            Start My Page{" "}
          </Button>
        </Box>
      </Box>

      <Box
        width={"100%"}
        height={"100vh"}
        sx={{
          backgroundColor: "black",
          display: "flex",
          flexDirection: "column",
        }}
        my={5}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{ marginTop: "1rem" }}
            variant="h1"
            color={"white"}
            my={10}
          >
            Find the right expert
          </Typography>
          <Typography variant="h5" color={"white"} my={-10}>
            Get Personalized advice from top experts to your specific questions
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: 3,
              width: "50%",
            }}
            my={15}
          >
            <Typography variant="h4" color={"white"}>
              List of Competency
            </Typography>
            <Card
              sx={{
                width: "50%",
                height: "50%",
                padding: "15px",
                backgroundColor: "#0d0d0d",
                boxShadow: "1px 1px 5px white",
                marginBottom: "2rem",
              }}
              elevation={5}
            >
              <Typography variant="h4" color={"white"}>
                Frontend
              </Typography>
            </Card>
            <Card
              sx={{
                width: "50%",
                height: "50%",
                padding: "15px",
                backgroundColor: "#0d0d0d",
                boxShadow: "1px 1px 5px white",
                marginBottom: "2rem",
              }}
              elevation={5}
            >
              <Typography variant="h4" color={"white"}>
                Testing and Automation
              </Typography>
            </Card>
            <Card
              sx={{
                width: "50%",
                height: "50%",
                padding: "15px",
                backgroundColor: "#0d0d0d",
                boxShadow: "1px 1px 5px white",
                marginBottom: "2rem",
              }}
              elevation={5}
            >
              <Typography variant="h4" color={"white"}>
                AI / ML
              </Typography>
            </Card>
            <Card
              sx={{
                width: "50%",
                height: "50%",
                padding: "15px",
                backgroundColor: "#0d0d0d",
                boxShadow: "1px 1px 5px white",
                marginBottom: "2rem",
              }}
              elevation={5}
            >
              <Typography variant="h4" color={"white"}>
                Scala
              </Typography>
            </Card>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: 3,
              width: "50%",
            }}
            my={15}
          >
            <Typography variant="h4" color={"white"}>
              List of Skills
            </Typography>
            <Card
              sx={{
                width: "50%",
                height: "50%",
                padding: "15px",
                backgroundColor: "#0d0d0d",
                boxShadow: "1px 1px 5px white",
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "2rem",
              }}
              elevation={5}
            >
              {/* <Typography variant='h4' color={'white'}>Frontend</Typography> */}
              <img src={htmlIcon} alt="htmllogo" width={50} height={50} />
              <img src={cssICON} alt="htmllogo" width={50} height={50} />
              <img src={jsIcon} alt="htmllogo" width={50} height={50} />
              <img src={reactIcon} alt="htmllogo" width={50} height={50} />
              <img src={angularIcon} alt="htmllogo" width={50} height={50} />
              <img src={nodeIcon} alt="htmllogo" width={50} height={50} />
            </Card>
            <Card
              sx={{
                width: "50%",
                height: "50%",
                padding: "15px",
                backgroundColor: "#0d0d0d",
                boxShadow: "1px 1px 5px white",
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "2rem",
              }}
              elevation={5}
            >
              <img src={jMeter} alt="htmllogo" width={50} height={50} />
              <img src={nightWatch} alt="htmllogo" width={50} height={50} />
              <img src={postMan} alt="htmllogo" width={50} height={50} />
              <img src={RestAssured} alt="htmllogo" width={50} height={50} />
              <img src={selenium} alt="htmllogo" width={50} height={50} />
            </Card>
            <Card
              sx={{
                width: "50%",
                height: "50%",
                padding: "15px",
                backgroundColor: "#0d0d0d",
                boxShadow: "1px 1px 5px white",
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "2rem",
              }}
              elevation={5}
            >
              <img src={awsIcon} alt="htmllogo" width={50} height={50} />
              <img src={azure} alt="htmllogo" width={50} height={50} />
              <img src={Docker} alt="htmllogo" width={50} height={50} />
              <img src={googleCloud} alt="htmllogo" width={50} height={50} />
              <img src={TensorFlow} alt="htmllogo" width={50} height={50} />
            </Card>
            <Card
              sx={{
                width: "50%",
                height: "50%",
                padding: "15px",
                backgroundColor: "#0d0d0d",
                boxShadow: "1px 1px 5px white",
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "2rem",
              }}
              elevation={5}
            >
              <img src={apacheSpark} alt="htmllogo" width={50} height={50} />
              <img src={Scala} alt="htmllogo" width={50} height={50} />
              <img src={ImageIcon4} alt="htmllogo" width={50} height={50} />
              <img src={ImageIcon5} alt="htmllogo" width={50} height={50} />
              <img src={ImageIcon6} alt="htmllogo" width={50} height={50} />
            </Card>
          </Box>
        </Box>
      </Box>
      <Box
        width={"100%"}
        height={"100vh"}
        sx={{
          backgroundColor: "#254763",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <MediaCard
          image={ImageIcon1}
          heading={"Offer 1:1 Sessions"}
          description={box1}
        />
        <MediaCard
          image={ImageIcon2}
          heading={"Host a Webinar "}
          description={box2}
        />
        <MediaCard
          image={ImageIcon3}
          heading={"Request Your Perfect Session Now!!"}
          description={box3}
        />
      </Box>
      <Footer />
    </div>
  );
}
