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
export default function Home() {
    const [open, setOpen] = React.useState(true);
  
    const handleClick = () => {
      setOpen(!open);
    };
  return (
    <div>
        <Header />
        <Box sx={{display:"flex",flexDirection:"row",justifyContent:"center"}} my={10}>
        <Box width={'50%'} >
        <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
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
           <Box width={400} height={400} sx={{backgroundColor:"#ff6600",borderRadius:"50px",display:"flex",justifyContent:"flex-end"}}>
           <img src={personPhoto} alt='personphoto' width={400} height={400} />
           </Box>
            <Card sx={{width:"400px",height:"50px",padding:"5px",borderRadius:"20px" }} elevation={10} >
            <Typography variant='h6'>
            Danny help people get a job in tech
            </Typography>
            </Card>
          </Box>
        </Box>
        
        </Box>
        <Box mx={30}>
          <Button variant='contained' sx={{padding:"10px 50px 10px 50px",fontSize:"20px",backgroundColor:"black"}} size='large' >Start My Page  </Button>
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
          <Typography variant='h4' color={'white'}>Testing and Automation</Typography>
        </Card>
        <Card sx={{width:"50%",height:"50%",padding:"15px",backgroundColor:"#0d0d0d",boxShadow:"1px 1px 5px white"}} elevation={5}>
          <Typography variant='h4' color={'white'}>AI / ML</Typography>
        </Card>
        <Card sx={{width:"50%",height:"50%",padding:"15px",backgroundColor:"#0d0d0d",boxShadow:"1px 1px 5px white"}} elevation={5}>
          <Typography variant='h4' color={'white'}>Scala</Typography>
        </Card>
        </Box>
        </Box>
        </Box>
        <Box width={'100%'} height={'100vh'} sx={{backgroundColor:"#ffccff",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",gap:50}}>
        <Box>
        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <img src="#" alt="logo" />
        </Box>
        </Box>
        <Box>
        <List
      sx={{ width: '800px',  bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleClick}>
        
        <ListItemText primary="Offer 1:1 sessions" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              {/* <StarBorder /> */}
            </ListItemIcon>
            <ListItemText primary="Mentorship sessions, consultations, discovery calls - do what you do best. We take care of everything else" />
          </ListItemButton>
        </List>
      </Collapse>
      <Divider />
      <ListItemButton onClick={handleClick}>
        
        <ListItemText primary="Host a webinar" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              {/* <StarBorder /> */}
            </ListItemIcon>
            <ListItemText primary="Connect with 100s of followers at once. Classes, group calls, workshops - do them all" />
          </ListItemButton>
        </List>
      </Collapse>
      <Divider />
      <ListItemButton onClick={handleClick}>
        
        <ListItemText primary="Request for Session" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              {/* <StarBorder /> */}
            </ListItemIcon>
            <ListItemText primary="Connect with 100s of followers at once. Classes, group calls, workshops - do them all" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
        </Box>
        </Box>
      <Footer />
    </div>
  )
}
