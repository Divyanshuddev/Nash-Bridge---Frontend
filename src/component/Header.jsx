import { AppBar, Stack, Toolbar, Typography,Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router'
export default function Header() {
  const navigate=useNavigate();
  return (
    <div style={{zIndex:1}}>
        <AppBar position='static' >
        <Toolbar sx={{backgroundColor:"red",height:"5rem"}} >
        <Typography variant='h4' component={'div'} sx={{flexGrow:1}}>Nash Bridge</Typography>
        <Stack direction={'row'} spacing={2}>
          <Button color='inherit' sx={{fontSize:20}} onClick={()=> navigate('/')}>Home</Button>
          <Button color='inherit' sx={{fontSize:20}} onClick={()=> navigate('/signin')}>SignIn</Button>
          <Button color='inherit' sx={{fontSize:20}} onClick={()=> navigate('/signup')}>SignUp</Button>
          <Button color='inherit' sx={{fontSize:20}} onClick={()=> navigate('/profile')}>Hi, User</Button>
        </Stack>
        </Toolbar>
        </AppBar>
    </div>
  )
}
