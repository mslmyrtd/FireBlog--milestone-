import * as React from "react";

import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../auth/functions";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import LinearProgress from "@mui/material/LinearProgress";
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
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      ) : blogsList?.length === 0 ? (
        <p>Nothing Found</p>
      ) : (
        <Grid container spacing={2}>
          {blogsList?.map((item, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Item
                sx={{
                  width: 345,
                  cursor: "pointer",
                  height: 500,
                  borderBottom: "1px solid ",
                  display: "inline-block",
                }}
                onClick={() => handleOn(item)}
              >
                <CardMedia
                  component="img"
                  height="200px"
                  image={item.imgUrl}
                  alt="Paella dish"
                />
                <CardContent
                  style={{
                    background: "#D9D9D9",
                    height: "125px",
                    overflow: "hidden",
                  }}
                >
                  <Typography
                    style={{ textAlign: "center" }}
                    fontFamily="Girassol"
                    component="div"
                    variant="h5"
                    color="#046582"
                    gutterBottom
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    component="div"
                    variant="body1"
                    color="text.secondary"
                  >
                    {item.date}
                  </Typography>
                  <CardContent>
                    <Typography
                      component="div"
                      variant="body1"
                      color="text.secondary"
                      textAlign="left"
                      marginTop="-15px"
                      color="black"
                    >
                      {item.content}
                    </Typography>
                  </CardContent>
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
