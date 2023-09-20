import React, { useState } from "react";
import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";

function Nav(props) {
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallDevice = useMediaQuery(theme.breakpoints.down("sm"));
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

  const handleRegister = () => {
    navigate("/register");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const menuItem = [
    { text: "Login", link: "/login" },
    { text: "Signup", link: "/register" },
  ];

  return (
    <>
      <AppBar sx={{ backgroundColor: "#461959" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography fontWeight="bold">Course Selling Website</Typography>
          {isSmallDevice ? (
            <IconButton onClick={() => setIsDrawerOpen(true)}>
              <MenuIcon sx={{ color: "white" }} />
            </IconButton>
          ) : (
            <div style={{ display: "flex" }}>
              {props.login ? (
                <Button
                  variant="outlined"
                  color="inherit"
                  onClick={handleLogin}
                >
                  Login
                </Button>
              ) : (
                <></>
              )}
              {props.register ? (
                <Button
                  variant="outlined"
                  color="inherit"
                  onClick={handleRegister}
                  sx={{ marginLeft: "15px" }}
                >
                  Register
                </Button>
              ) : (
                <></>
              )}
            </div>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <List>
          {menuItem.map((item, index) => {
            return (
              <ListItem key={index}>
                <Link to={item.link}>
                  <ListItemText primary={item.text} />
                </Link>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </>
  );
}

export default Nav;
