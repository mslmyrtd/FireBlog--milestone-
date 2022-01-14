import React, { useContext, useState } from "react";

import blok from "../assests/blok.png";
import {
  Avatar,
  Button,
  CardMedia,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Paper } from "@mui/material";
import { Formik } from "formik";
import { getDatabase, ref, update } from "firebase/database";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

import { addInfo, useDate, useFetch } from "../auth/functions";

import { successNote } from "../helpers/toastNotify";

function UpdateBlog() {
  const [title, setTitle] = useState();
  const [imgUrl, setImgUrl] = useState();
  const [content, setContent] = useState();
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();
  const { email } = useContext(AuthContext);
  const { blogsList } = useFetch();

  const date = new Date().toDateString();

  const blog = () => {
    upDateBlog(title, imgUrl, content, id, email, date);
    successNote("Updated Successffully");
    navigate("/");
    console.log(imgUrl);
  };
  const upDateBlog = () => {
    const db = getDatabase();
    const infoData = {
      title: title,
      imgUrl: imgUrl,
      content: content,
      id: id,
      email: email,
      date: date,
    };
    // const newUserKey = push(child(ref(db), "blog/")).key;
    const updates = {};
    updates["blog/" + id] = infoData;
    return update(ref(db), updates);
  };

  return (
    <Paper
      elevation={0}
      style={{
        background: "white",
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
      }}
    >
      {blogsList?.map((item, index) =>
        item.id === id ? (
          <Container
            sx={{
              marginTop: "8rem",
              // mt: 6,
              height: "calc(100vh - 3rem)",
              textAlign: "center",

              width: "35rem",
              borderRadius: "1rem",

              background: "white",
            }}
            maxWidth="sm"
            key={index}
          >
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={item.imgUrl}
            />
            <Typography
              sx={{
                margin: "1rem",
                color: "#046582",
                fontFamily: "Girassol",
                fontWeight: 800,
              }}
              variant="h4"
            >
              ─── Update Blog ───
            </Typography>
            <form>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    name="title"
                    label="Title *"
                    variant="outlined"
                    value={title ? title : setTitle(item.title)}
                    onChange={(e) => setTitle(e.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="imgUrl"
                    label="ImgUrl *"
                    variant="outlined"
                    value={imgUrl ? imgUrl : setImgUrl(item.imgUrl)}
                    onChange={(e) => setImgUrl(e.target.value)}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="content"
                    label="Content *"
                    multiline
                    rows={9}
                    variant="outlined"
                    value={content ? content : setContent(item.content)}
                    onChange={(e) => setContent(e.target.value)}
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    sx={{
                      bgcolor: "#046582",
                      ":hover": { bgcolor: "#D5D5D5", color: "#046582" },
                    }}
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={blog}
                  >
                    SUBMİT
                  </Button>
                </Grid>
              </Grid>
            </form>
            }
          </Container>
        ) : null
      )}
    </Paper>
  );
}

export default UpdateBlog;
