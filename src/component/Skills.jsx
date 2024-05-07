import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function ChipsArray() {
  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'Angular' },
    { key: 1, label: 'jQuery' },
    { key: 2, label: 'Polymer' },
    { key: 3, label: 'Vue.js' },
    { key: 4, label: 'React.js' },
    { key: 5, label: 'Next.js' },
    { key: 6, label: 'Angular' },
    { key: 7, label: 'Angular' },
    { key: 8, label: 'jQuery' },
    { key: 9, label: 'Polymer' },
    { key: 10, label: 'Vue.js' },
    { key: 11, label: 'React.js' },
    { key: 12, label: 'Next.js' },
    { key: 13, label: 'Angular' },
    { key: 14, label: 'Next.js' },
    { key: 15, label: 'Angular' },
    

    
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  return (
    <Stack
      sx={{
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection:"row",
        flexWrap: 'wrap',
        listStyle: 'none',
        p: 0.5,
        m: 0,
      }}
      component="ul"
    >
      {chipData.map((data) => {
        let icon;
        return (
          <ListItem key={data.key}>
            <Chip
              icon={icon}
              label={data.label}
              onDelete={data.label === 'React' ? undefined : handleDelete(data)}
            />
          </ListItem>
        );
      })}
    </Stack>
  );
}
