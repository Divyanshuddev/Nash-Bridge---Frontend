import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard(props) {
  return (
    <Card sx={{ maxWidth: 345, height: "50%", display: "flex", flexDirection: "column" }}>
      <CardMedia
        sx={{ height: 240 }}
        image={props.image}
        title="nash bridge"
      />
      <CardContent sx={{ flex: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {props.heading}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
