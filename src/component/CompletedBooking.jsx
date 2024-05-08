import { Grid,Card, CardContent, Typography } from '@mui/material'
import React from 'react'

export default function CompletedBooking() {
  return (
    <div>
        <Grid container>
        <Grid item>
        <Card>
        <CardContent>
            <Typography>Slot Title</Typography>
            <Typography>Slot Description</Typography>
            <Typography>Slot Time</Typography>
        </CardContent>
        </Card>
        </Grid>
        </Grid>
    </div>
  )
}
