import * as React from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import FavoriteIcon from "@mui/icons-material/Favorite";

export default function DashCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="194"
        image="https://picsum.photos/800/800"
        alt="Paella dish"
      />
      <CardHeader
        style={{ textAlign: "left" }}
        title="Django"
        subheader="September 14, 2016"
      />
      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          style={{ textAlign: "left", marginTop: "-25px" }}
        >
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="chat">
          <AccountCircleIcon />
        </IconButton>
        <CardHeader
          style={{ textAlign: "left" }}
          title="edward@clarusway.com"
        />
      </CardActions>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="chat">
          <ChatBubbleOutlineIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}