import React, { useContext } from "react";

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

import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

import { addInfo, useDate, useFetch } from "../auth/functions";
import { update } from "firebase/database";

function UpdateBlog() {
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();
  const { email } = useContext(AuthContext);
  const { blogsList } = useFetch();

  const date = new Date().toDateString();
  const initialValues = {
    title: "",
    imgUrl: "",
    content: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    try {
    } catch (err) {
      alert(err.message);
    }
    resetForm();
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
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
              {({ values, handleChange, handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <TextField
                        name="title"
                        label="Title *"
                        variant="outlined"
                        value={values.title || item.title}
                        onChange={handleChange}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        name="imgUrl"
                        label="ImgUrl *"
                        variant="outlined"
                        value={values.imgUrl || item.imgUrl}
                        onChange={handleChange}
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
                        value={values.content || item.content}
                        onChange={handleChange}
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
                      >
                        SUBMİT
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              )}
            </Formik>
          </Container>
        ) : null
      )}
    </Paper>
  );
}

export default UpdateBlog;
