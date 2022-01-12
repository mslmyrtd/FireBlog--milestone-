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
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../auth/functions";
export default function BlogCard() {
  const { isLoading, blogsList } = useFetch();
  console.log(blogsList);
  const { currentUser } = React.useContext(AuthContext);
  const navigate = useNavigate();
  const handleOn = () => {
    if (currentUser) navigate("/details");
    else navigate("/login");
  };
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : blogsList?.length === 0 ? (
        <p>Nothing Found</p>
      ) : (
        blogsList?.map((item, index) => (
          <Card
            sx={{ maxWidth: 345, cursor: "pointer" }}
            onClick={handleOn}
            key={index}
          >
            <CardMedia
              component="img"
              height="194"
              image={item.imgUrl}
              alt="Paella dish"
            />
            <CardHeader
              style={{ textAlign: "left" }}
              title={item.title}
              subheader="September 14, 2016"
            />
            <CardContent>
              <Typography
                variant="body2"
                color="text.secondary"
                style={{ textAlign: "left", marginTop: "-25px" }}
              >
                {item.content}
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
        ))
      )}
    </div>
  );
}
