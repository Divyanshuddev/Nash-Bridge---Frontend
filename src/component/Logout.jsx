import { Box, Button,Typography } from "@mui/material";
import { useNavigate } from "react-router";

export default function Logout() {
    const navigate=useNavigate();
    return <div>
       <Box sx={{display:"flex",gap:"1rem",alignItems:"center",justifyContent:"center", height:"15rem",width:"30rem",backgroundColor:"#b3c6ff",border:"1px solid white",borderRadius:"1.5rem",marginTop:"15rem",marginLeft:"30rem"}}>
            <Typography>Are You Sure Want To Logout?</Typography>
            <Button variant="contained" onClick={()=> navigate('/signin')} color="primary">Yes</Button>
            <Button variant="contained" onClick={()=> navigate('/profile')} color="error">No</Button>
       </Box>
    </div>
}
