import { Grid, Card, CardContent, Typography } from "@mui/material";
import React from "react";
// const ExpandMore = styled((props) => {
//     const { expand, ...other } = props;
//     return <IconButton {...other} />;
//   })(({ theme, expand }) => ({
//     transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//     marginLeft: 'auto',
//     transition: theme.transitions.create('transform', {
//       duration: theme.transitions.duration.shortest,
//     }),
//   }));
export default function UpcomingBooking() {
//     const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

  return (
    <div>
      <Grid container>
        <Grid item>
          <Card
            sx={{ minWidth: 75, padding: 2, borderRadius: 4 }}
            elevation={3}
          >
            <CardContent>
              <Typography>Slot Title</Typography>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum! Provident similique accusantium nemo autem.
                Veritatis obcaecati tenetur iure eius earum ut molestias
                architecto voluptate aliquam nihil, eveniet aliquid culpa
                officia aut! Impedit sit sunt quaerat, odit, tenetur error,
                harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia.
              </Typography>
              <Typography>Slot Time</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
