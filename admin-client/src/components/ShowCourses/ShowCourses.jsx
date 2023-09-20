import React from "react";
import axios from "axios";
import { Box, Grid } from "@mui/material";
import MediaCard from "../courseCard/Course-card.jsx";
import Nav from "../Nav/nav.jsx";
import "./courses.css";



function ShowCourses() {
  
  const [courses, setCourses] = React.useState([]);
  const handleGetRequest = async () => {
    const headers = {
      authorization: "Bearer " + localStorage.getItem("token"),
      "Content-Type": "application/json",
    };
    try {
      const res = await axios.get("http://localhost:3000/admin/courses", {
        headers,
      });
      setCourses(res.data.courses);
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
      } else {
        console.log(error.message);
      }
    }
  };

  React.useEffect(() => {
    handleGetRequest();
  }, []);


  const handleDelete = async (courseId) => {
    console.log(courseId);
    const headers = {
      authorization: "Bearer " + localStorage.getItem("token"),
      "Content-Type": "application/json",
    };
    try {
      const res = await axios.delete(
        `http://localhost:3000/admin/courses/${courseId}`,
        {
          headers,
        }
      );
      handleGetRequest();
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
      } else {
        console.log(error.message);
      }
    }
  };

  return (
    <Box sx={{
      minHeight: "100vh", 
    }}>
      <Nav isCourse={true}/>
      <Grid
        container
        sx={{ margin: "80px auto", justifyContent: "space-between" }}
      >
        {courses.map((course) => {
          return (
            <Grid item xs={12} sm={12} md={4} lg={3} margin="20px" key={course._id}>
              <MediaCard
                key={course._id}
                title={course.title}
                description={course.description}
                handleCard={handleDelete}
                courseId={course._id}
                img={course.imageLink}
                price={course.price}
                Edit={true}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default ShowCourses;
