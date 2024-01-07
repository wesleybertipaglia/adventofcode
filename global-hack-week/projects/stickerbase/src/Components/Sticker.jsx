import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const Sticker = ({ image, title, description, year, event }) => {
  return (
    <Card>
      <CardMedia component="img" src={image} alt={title} />
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Year: {year}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Event: {event}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Sticker;
