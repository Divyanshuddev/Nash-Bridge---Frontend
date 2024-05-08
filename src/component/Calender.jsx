import * as React from 'react';
import DateCalendarServerRequest from './DateTime';
import Stack from '@mui/material/Stack';

export default function Calender() {
  return (
  <Stack sx={{width:"100%"}}>
    <DateCalendarServerRequest  />
  </Stack>
  );
}
