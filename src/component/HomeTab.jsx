import { Typography,Divider,Button, Box } from '@mui/material'
import React from 'react'
import EditModal from './EditModal'

export default function HomeTab() {
  return (
    <div>
    <Box>
        <Typography variant='h4' fontWeight={'bold'} >Hi, User</Typography>
        <Divider sx={{marginTop:"10px"}} />
    </Box>
    <Box sx={{display:"flex",justifyContent:"flex-end"}} my={3}>
        <Button variant='contained' color='success'  >Create Your Slot</Button>
    </Box>
    {
        <EditModal />
    }
    </div>
  )
}
