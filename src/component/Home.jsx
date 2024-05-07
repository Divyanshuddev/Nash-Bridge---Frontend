import React from 'react'
import Header from './Header'
import { Box, Typography,Card,Button,List,ListSubheader,ListItemButton,ListItemIcon,ListItemText,Collapse, Divider} from '@mui/material'
import personPhoto from './personPhoto.png'
import htmlIcon from './HTMLICON.svg'
import cssICON from './icon-css.svg'
import jsIcon from "./icons8-js.svg"
import reactIcon from './icons8-react-js.svg'
import angularIcon from './icons8-angularjs.svg'
import nodeIcon from './icons8-nodejs.svg'
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Footer from './Footer'
import awsIcon from './AI-ML/aws-2.svg'
import azure from './AI-ML/azure-2.svg'
import Docker from './AI-ML/Docker.svg'
import googleCloud from './AI-ML/google-cloud.svg'
import TensorFlow from './AI-ML/TensorFlow.svg'
import apacheSpark from './Scala/apache-spark-5.svg'
import Scala from './Scala/Scala.svg'
import jMeter from './Test Automation/jmeter_square.png'
import nightWatch from './Test Automation/nightwatch-js.svg'
import postMan from './Test Automation/postman.svg'
import RestAssured from './Test Automation/RestAssured.svg'
import selenium from './Test Automation/selenium.svg'
import MediaCard from './cardList'
import ImageIcon1 from './MicrosoftTeams-image11.png'
import ImageIcon2 from './MicrosoftTeams-image12.png'
import ImageIcon3 from './MicrosoftTeams-image13.png'
export default function Home() {
    const [open, setOpen] = React.useState(true);
  
    const handleClick = () => {
      setOpen(!open);
    };
  return (
    <div>
        <Header />
        <Box sx={{display:"flex",flexDirection:"row",justifyContent:"center", height: "52vh"}} my={10}>
        <Box width={'50%'} >
        <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center" , marginTop:"80px",marginLeft:"250px"}}>
        <Typography variant='h1'>Start your</Typography>
        <Typography variant='h1' fontWeight={'bold'}>side hustle</Typography>
        <Typography variant='h1' fontWeight={'bold'}>today</Typography>
        <Box width={'50%'}>
        <Typography variant='h5'>Turn your passion and knowledge into a thriving business.Help your audience get ahead in life</Typography>
        </Box>
        </Box>
        </Box>
        <Box width={'50%'}>
          <Box >
           <Box width={400} height={400} sx={{backgroundColor:"#ff6600",borderRadius:"50px",display:"flex",justifyContent:"flex-end", marginTop:"70px",marginLeft:"150px" }}>
           <img src={personPhoto} alt='personphoto' width={400} height={400} />
           </Box>
            <Card sx={{width:"396px",height:"50px",padding:"5px",borderRadius:"13px",marginLeft:"150px"  }} elevation={10} >
            <Typography variant='h6'>
            Danny created a side hustle helping creators build a brand
            </Typography>
            </Card>
          </Box>
        </Box>
        
        </Box>
        <Box mx={30}>
          <Button variant='contained' sx={{padding:"10px 50px 10px 50px",fontSize:"20px",backgroundColor:"black", marginLeft:"230px"}} size='large' >Start My Page  </Button>
        </Box>
        <Box width={'100%'} height={'100vh'} sx={{backgroundColor:"black",display:"flex",flexDirection:"column"}} my={5} >
        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
        <Typography variant='h1' color={'white'} my={10}>Find the right expert</Typography>
        <Typography variant='h5' color={'white'} my={-10}>Get Personalized advice from top experts to your specific questions</Typography>
        </Box>
        <Box sx={{display:"flex",flexDirection:"row"}}>
        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:3,width:"50%"}} my={15} >
        <Typography variant='h4' color={'white'}>List of Competency</Typography>
        <Card sx={{width:"50%",height:"50%",padding:"15px",backgroundColor:"#0d0d0d",boxShadow:"1px 1px 5px white"}} elevation={5}>
          <Typography variant='h4' color={'white'}>Frontend</Typography>
        </Card>
        <Card sx={{width:"50%",height:"50%",padding:"15px",backgroundColor:"#0d0d0d",boxShadow:"1px 1px 5px white"}} elevation={5}>
          <Typography variant='h4' color={'white'}>Testing and Automation</Typography>
        </Card>
        <Card sx={{width:"50%",height:"50%",padding:"15px",backgroundColor:"#0d0d0d",boxShadow:"1px 1px 5px white"}} elevation={5}>
          <Typography variant='h4' color={'white'}>AI / ML</Typography>
        </Card>
        <Card sx={{width:"50%",height:"50%",padding:"15px",backgroundColor:"#0d0d0d",boxShadow:"1px 1px 5px white"}} elevation={5}>
          <Typography variant='h4' color={'white'}>Scala</Typography>
        </Card>
        </Box>
        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:3,width:"50%"}} my={15}>
        <Typography variant='h4' color={'white'}>List of Skills</Typography>
        <Card sx={{width:"50%",height:"50%",padding:"15px",backgroundColor:"#0d0d0d",boxShadow:"1px 1px 5px white"}} elevation={5}>
          {/* <Typography variant='h4' color={'white'}>Frontend</Typography> */}
          <img src={htmlIcon} alt='htmllogo' width={50} height={50} />
          <img src={cssICON} alt='htmllogo' width={50} height={50} />
          <img src={jsIcon} alt='htmllogo' width={50} height={50} />
          <img src={reactIcon} alt='htmllogo' width={50} height={50} />
          <img src={angularIcon} alt='htmllogo' width={50} height={50} />
          <img src={nodeIcon} alt='htmllogo' width={50} height={50} />
        </Card>
        <Card sx={{width:"50%",height:"50%",padding:"15px",backgroundColor:"#0d0d0d",boxShadow:"1px 1px 5px white"}} elevation={5}>
          <Typography variant='h4' color={'white'}>
          <img src={jMeter} alt='htmllogo' width={50} height={50} />
          <img src={nightWatch} alt='htmllogo' width={50} height={50} />
          <img src={postMan} alt='htmllogo' width={50} height={50} />
          <img src={RestAssured} alt='htmllogo' width={50} height={50} />
          <img src={selenium} alt='htmllogo' width={50} height={50} />
          </Typography>
        </Card>
        <Card sx={{width:"50%",height:"50%",padding:"15px",backgroundColor:"#0d0d0d",boxShadow:"1px 1px 5px white"}} elevation={5}>
          <Typography variant='h4' color={'white'}>
          <img src={awsIcon} alt='htmllogo' width={50} height={50} />
          <img src={azure} alt='htmllogo' width={50} height={50} />
          <img src={Docker} alt='htmllogo' width={50} height={50} />
          <img src={googleCloud} alt='htmllogo' width={50} height={50} />
          <img src={TensorFlow} alt='htmllogo' width={50} height={50} />
          </Typography>
        </Card>
        <Card sx={{width:"50%",height:"50%",padding:"15px",backgroundColor:"#0d0d0d",boxShadow:"1px 1px 5px white"}} elevation={5}>
          <Typography variant='h4' color={'white'}>
          <img src={apacheSpark} alt='htmllogo' width={50} height={50} />
          <img src={Scala} alt='htmllogo' width={50} height={50} />
          </Typography>
        </Card>
        </Box>
        </Box>
        </Box>
        <Box width={'100%'} height={'100vh'} sx={{backgroundColor:"#254763",display:"flex",flexDirection:"row",justifyContent:"space-around",alignItems:"center",}}>
        <MediaCard image={ImageIcon1} heading={"Offer 1:1 Sessions"}/>
        <MediaCard image={ImageIcon2} heading={"Host a Webinar "}/>
        <MediaCard image={ImageIcon3} heading={"Request Your Perfect Session Now!!"}/>
        </Box>

      <Footer />
    </div>
  )
}
