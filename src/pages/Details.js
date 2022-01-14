import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import { useFetch } from "../auth/functions";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { update } from "firebase/database";
const Details = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { email } = useContext(AuthContext);
  console.log(email);
  const { isLoading, blogsList, deleteInfo, upDate } = useFetch();
  console.log(blogsList);
  const editHandler = (id, title, content, imgUrl) => {
    navigate(`/update/${id}`);
    update(id, title, content, imgUrl);
  };
  return (
    <div
      style={{
        marginTop: "8rem",
        fontSize: "3rem",
        color: "#046582",
        fontFamily: "Girassol",
        fontWeight: 800,
      }}
    >
      <h3>─── Details ───</h3>
      <div>
        {isLoading ? (
          <p>Loading</p>
        ) : (
          blogsList?.map((item, index) =>
            item.id === id ? (
              <React.Fragment>
                <CssBaseline />
                <Container fixed key={index}>
                  <Card
                    sx={{
                      Width: 345,
                      cursor: "pointer",
                      height: "100vh",
                      marginTop: "-25px",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="240px"
                      objectFit="scale-down"
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
                  </Card>
                  {item.email === email ? (
                    <Stack
                      direction="row"
                      spacing={20}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "1rem",
                      }}
                    >
                      <Button
                        onClick={() => editHandler(item)}
                        variant="contained"
                        color="success"
                      >
                        UPDATE
                      </Button>
                      <Button
                        onClick={() =>
                          deleteInfo(
                            item.id,
                            item.imgUrl,
                            item.content,
                            item.title
                          )
                        }
                        variant="outlined"
                        color="error"
                        startIcon={<DeleteIcon />}
                      >
                        Delete
                      </Button>
                    </Stack>
                  ) : null}
                </Container>
              </React.Fragment>
            ) : null
          )
        )}
      </div>
    </div>
  );
};

export default Details;
