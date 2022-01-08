import React from "react";

import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";

import { Formik } from "formik";
import * as Yup from "yup";

const signUpValidationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("Email is required"),
  password: Yup.string()
    .required("No password provided")
    .min(8, "Password is too short - should be 8 chars minimum")
    .matches(/\d+/, "Password must have a number")
    .matches(/[a-z]+/, "Password must have a lowercase")
    .matches(/[A-Z]+/, "Password must have a uppercase")
    .matches(/[!?.@#$%^&*()-+]+/, "Password must have a special char"),
});

function Register() {
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    // console.log(values);

    resetForm();
  };

  return (
    <Container
      sx={{
        marginTop: "4rem",
        // mt: 6,
        height: "calc(88vh - 3rem)",
        textAlign: "center",
        border: "2px solid white",
        width: "35rem",
        borderRadius: "1rem",
        boxShadow: " 10x 5px 5px black",
      }}
      maxWidth="sm"
    >
      <Avatar
        src="https://eds-fireblog.herokuapp.com/static/media/blok.7e6674a5.png"
        sx={{
          margin: "1rem auto",
          width: "12rem",
          height: "12rem",
          bgcolor: "#046582",
        }}
      ></Avatar>
      <Typography sx={{ margin: "1rem" }} variant="h5">
        ----REGISTER----
      </Typography>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={signUpValidationSchema}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          touched,
          errors,
          handleBlur,
        }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="email"
                  label="Email"
                  variant="outlined"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={touched.email && errors.email}
                  error={touched.email && Boolean(errors.email)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="password"
                  label="Password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  helperText={touched.password && errors.password}
                  error={touched.password && Boolean(errors.password)}
                  fullWidth
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Register
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Google
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
      <p>
        Already have an account?
        <Link
          sx={{
            textDecoration: "none",
            fontWeight: "600",
            paddingLeft: "0.5rem",
          }}
          href="/login"
        >
          Login.
        </Link>
      </p>
    </Container>
  );
}

export default Register;
