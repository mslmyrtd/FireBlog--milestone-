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

import { useFetch } from "../auth/functions";
import blok from "../assests/blok.png";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import { useParams } from "react-router-dom";

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#101010" : "grey.100",
        color: (theme) =>
          theme.palette.mode === "dark" ? "grey.300" : "grey.800",
        border: "1px solid",
        borderColor: (theme) =>
          theme.palette.mode === "dark" ? "grey.800" : "grey.300",
        borderRadius: 2,
        fontSize: "0.875rem",
        fontWeight: "700",
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

export default function Profile() {
  const { blogsList } = useFetch();
  const { email } = React.useContext(AuthContext);

  return (
    <div style={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          p: 1,
          m: 1,
          bgcolor: "background.paper",
          borderRadius: 1,
          marginTop: "5rem",
        }}
      >
        <Item>
          <CardMedia
            component="img"
            height="194px"
            image={blok}
            alt="Paella dish"
            sx={{
              width: 345,
              cursor: "pointer",
              height: 300,
            }}
          />
          <CardHeader
            style={{ textAlign: "left" }}
            title="Welcome"
            subheader="This is your page..."
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
              Display Name: {email.substring(0, email.indexOf("@"))}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="chat">
              <AccountCircleIcon />
            </IconButton>
            <CardHeader style={{ textAlign: "left" }} title={email} />
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
      </Box>
    </div>
  );
}
