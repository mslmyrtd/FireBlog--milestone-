import React, { useContext } from "react";

import { auth } from "../auth/firebase-config";
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

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

function NewBlog() {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  const navigate = useNavigate();
  const initialValues = {
    title: "",
    ımageUrl: "",
    content: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    try {
      console.log(values);
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
          ─── New Blog ───
        </Typography>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ values, handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    name="Title*"
                    label="Title*"
                    variant="outlined"
                    value={values.title}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    name="Image URL*"
                    label="Image URL*"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="outlined-multiline-static"
                    label="Content*"
                    multiline
                    rows={4}
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
                    fontWeight="bold"
                    fullWidth
                  >
                    SUBMIT
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

export default NewBlog;
