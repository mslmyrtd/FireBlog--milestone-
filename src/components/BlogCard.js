import * as React from "react";

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
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export default function BlogCard() {
  const { isLoading, blogsList } = useFetch();
  console.log(blogsList);
  const { currentUser } = React.useContext(AuthContext);
  const navigate = useNavigate();
  const handleOn = (item) => {
    if (currentUser) {
      navigate(`/details/${item.id}`);
    } else navigate("/login");
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : blogsList?.length === 0 ? (
        <p>Nothing Found</p>
      ) : (
        <Grid container spacing={2}>
          {blogsList?.map((item, index) => (
            <Grid item xs={12} md={4} sm={6} key={index}>
              <Item
                sx={{ Width: 345, cursor: "pointer", height: 500 }}
                onClick={() => handleOn(item)}
              >
                <CardMedia
                  component="img"
                  height="194px"
                  image={item.imgUrl}
                  alt="Paella dish"
                />
                <CardHeader
                  style={{ textAlign: "left" }}
                  title={item.title}
                  subheader={item.date}
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    style={{
                      textAlign: "left",
                      marginTop: "-25px",
                      overFlow: "hidden",
                      height: "125",
                    }}
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
                    title={item.email}
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
              </Item>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
}
