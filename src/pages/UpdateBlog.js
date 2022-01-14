import React, { useContext } from "react";

import blok from "../assests/blok.png";
import {
  Avatar,
  Button,
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
  const date = new Date().toDateString();
  const initialValues = {
    title: "",
    imgUrl: "",
    content: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    try {
      addInfo(values, email, date);
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
      >
        <Avatar
          src={blok}
          sx={{
            marginTop: "3.5rem",
            margin: "1rem auto",
            width: "12rem",
            height: "12rem",
            bgcolor: "#046582",
          }}
        ></Avatar>
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
                    value={values.title}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="imgUrl"
                    label="ImgUrl *"
                    variant="outlined"
                    value={values.imgUrl}
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
                    value={values.content}
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
    </Paper>
  );
}

export default UpdateBlog;
