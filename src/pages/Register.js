import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import blok from "../assests/blok.png";
import Typography from "@mui/material/Typography";
import { Paper, Stack } from "@mui/material";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../auth/firebase-config";
const Register = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = async () => {
    try {
      let user = await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <Paper
      elevation={0}
      style={{
        background: `url(https://picsum.photos/800/800)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Stack
        marginTop={5}
        paddingBottom={3}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          marginTop={8}
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          padding={4}
          width={400}
          bgcolor="white"
          borderRadius={3}
          boxShadow="10px 5px 5px #333332 "
        >
          <Avatar
            sx={{
              bgcolor: "#046582",
              width: 220,
              height: 220,
            }}
          >
            <img style={{ width: "220px" }} src={blok} alt="blok image" />
          </Avatar>
          <Typography
            variant="p"
            style={{
              color: "#046582",
              fontFamily: "Girassol",
              fontWeight: 800,
            }}
          >
            <h1>─── Register ───</h1>
          </Typography>
          <Stack spacing={2} width={350}>
            <TextField
              onChange={(e) => setEmail(e.target.value)}
              required
              id="outlined-email"
              label="Email"
              type="mail"
            />
            <TextField
              onChange={(e) => setPassword(e.target.value)}
              id="outlined-password"
              label="Password"
              type="password"
              required
            />
            <Button
              sx={{
                bgcolor: "#046582",
                ":hover": { bgcolor: "#D5D5D5", color: "#046582" },
              }}
              variant="contained"
              onClick={handleSubmit}
            >
              REGİSTER
            </Button>
            <Button
              sx={{
                ":hover": { bgcolor: "#D5D5D5", color: "#046582" },
              }}
              variant="outlined"
            >
              WİTH
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
};
export default Register;
