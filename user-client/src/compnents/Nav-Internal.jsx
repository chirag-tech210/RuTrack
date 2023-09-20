import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  Tabs,
  Tab,
} from "@mui/material";
import { useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { DrawerOpenState, SelectedTab } from "../recoil/atom.js";

function NavInternal(props) {
  const theme = useTheme();
  const isSmallDevice = useMediaQuery(theme.breakpoints.down("sm"));
  // const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navContent = [
    { text: "All Courses", link: "/allcourses" },
    { text: "Purchased Courses", link: "/purchasedcourse" },
  ];
  const value = useRecoilValue(SelectedTab);
  const setValue = useSetRecoilState(SelectedTab);

  // const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const isDrawerOpen = useRecoilValue(DrawerOpenState);
  const setIsDrawerOpen = useSetRecoilState(DrawerOpenState);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

  const menuItem = navContent;
  console.log(menuItem);
  let a = 1;

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
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="secondary"
              indicatorColor="secondary"
              aria-label="secondary tabs example"
            >
              {menuItem.map((item, index) => {
                console.log("value", a);
                return (
                  <Tab
                    key={index}
                    value={index}
                    label={item.text}
                    component={Link}
                    to={item.link}
                    sx={{ color: "white", fontWeight: "bold" }}
                  />
                );
              })}
              <Tab
                value="me"
                component={Link}
                to="/me"
                label={
                  <IconButton>
                    <PersonIcon sx={{ color: "white" }} />
                  </IconButton>
                }
                sx={{ color: "white", fontWeight: "bold" }}
              />
            </Tabs>
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
          <Link to={"/me"}>
            <ListItemText primary="Me" sx={{marginLeft:"20px"}}  />
          </Link>
        </List>
      </Drawer>
    </>
  );
}

export default NavInternal;
