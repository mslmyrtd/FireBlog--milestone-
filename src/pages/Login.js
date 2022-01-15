import React, { useContext } from "react";
import { signInWithGoogle } from "../auth/firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
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
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { successNote } from "../helpers/toastNotify";

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

function Login() {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      let user = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      successNote("Successfully Login");
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
    resetForm();
  };
  const signWithGoogle = async (values) => {
    try {
      let user2 = await signInWithGoogle(auth, values.email, values.password);
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <Paper
      elevation={0}
      style={{
        background: `url(https://picsum.photos/800/800) no-repeat 50% 50% / cover`,
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
          border: "2px solid white",
          width: "35rem",
          borderRadius: "1rem",
          boxShadow: "5px 10px 18px black",
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
          ─── Login ───
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
              <Grid container spacing={3}>
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
                    sx={{
                      bgcolor: "#046582",
                      ":hover": { bgcolor: "#D5D5D5", color: "#046582" },
                    }}
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Login
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    sx={{
                      ":hover": { bgcolor: "#D5D5D5", color: "#046582" },
                    }}
                    type="submit"
                    variant="outlined"
                    fullWidth
                    onClick={signWithGoogle}
                  >
                    Wıth Google
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

export default Login;
