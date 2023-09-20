import React from "react";
import { AppBar, Typography, Toolbar, Button, Tab, Tabs } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Nav(props) {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("");
  const [selectedTab, setSelectedTab] = React.useState(0);
  const [isCourse,setisCourses] = React.useState(true);

  React.useEffect(() => {
    const getUsername = async () => {
      const headers = {
        authorization: "Bearer " + localStorage.getItem("token"),
        "Content-Type": "application/json",
      };
      try {
        const res = await axios.get("http://localhost:3000/admin/username", {
          headers,
        });
        setUsername(res.data);
      } catch (error) {
        if (error.response) {
          console.log(error.response.data);
        } else {
          console.log(error.message);
        }
      }
    };
    getUsername();
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  const handleCoursesClick = () => {
    navigate("/courses");
  };

  const handleCreateCourseClick = () => {
    navigate("/createcourse");
  };

  return (
    <>
      <AppBar>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography fontWeight="bold" variant="h6">
            Course-Website
          </Typography>
          <div style={{ display: "flex", alignItems: "center" }}>
          <Tabs >
            {!props.isCourse && <Tab label="Courses" sx={{color:"white"}} onClick={handleCoursesClick} />}
            {props.isCourse && <Tab label="Create Course"sx={{color:"white"}} onClick={handleCreateCourseClick} />}
          </Tabs>
            <Typography sx={{ marginLeft: "10px" }}>Admin - {username}</Typography>
            <Button
              variant="contained"
              color="success"
              sx={{ marginLeft: "10px" }}
              onClick={handleLogOut}
            >
              Logout
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Nav;
