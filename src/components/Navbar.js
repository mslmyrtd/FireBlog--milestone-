import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Link from "@mui/material/Link";
import cw from "../assests/cw.svg";

import { AuthContext } from "../contexts/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../auth/firebase-config";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const navigate = useNavigate();
  const { currentUser } = React.useContext(AuthContext);
  const [authes, setAuthes] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const signOutFunc = async () => {
    await signOut(auth);
  };
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{ background: "#046582" }}>
        <Toolbar>
          <Link href="/">
            <img style={{ width: "45px" }} src={cw} alt="cw image" />
          </Link>
          <Typography
            style={{
              fontFamily: "Girassol",
              fontSize: "25px",
              fontWeight: 800,
            }}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            <Link href="/" underline="none" color={"#F5DEB3"}>
              {"────< Mslm >────"}
            </Link>
          </Typography>
          {authes && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {currentUser ? (
                  <div onClick={handleClose}>
                    <MenuItem onClick={() => navigate("/profile")}>
                      Profile
                    </MenuItem>

                    <MenuItem onClick={() => navigate("/new")}>New</MenuItem>

                    <Link href="/login" underline="none" color={"black"}>
                      <MenuItem onClick={() => signOutFunc()}>Logout</MenuItem>
                    </Link>
                  </div>
                ) : (
                  <div onClick={handleClose}>
                    <MenuItem onClick={() => navigate("/login")}>
                      Login
                    </MenuItem>

                    <MenuItem onClick={() => navigate("/register")}>
                      Register
                    </MenuItem>
                  </div>
                )}
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
