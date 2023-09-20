import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import CourseCard from "../../compnents/CourseCard";
import Footer from "../../compnents/footer";
import NavInternal from "../../compnents/Nav-Internal";
import axios from "axios";

function PurchasedCourse() {
  const [purchasedCourse, setPurchasedCourse] = useState("");

  useEffect(() => {
    const getPurchasedCourses = async () => {
      try {
        const headers = {
          authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type": "application/json",
        };

        const res = await axios.get(
          "http://localhost:3000/user/purchasedCourses",
          {
            headers,
          }
        );

        console.log(res.data.purchasedCourse);
        setPurchasedCourse(res.data.purchasedCourse);
      } catch (error) {
        if (error.response) {
          console.log(error.response);
        } else {
          console.log(error.message);
        }
      }
    };

    getPurchasedCourses();
  }, []);

  console.log(purchasedCourse);

  return (
    <div>
      <Box sx={{ marginTop: "100px" }}>
        <NavInternal />
        <Grid container sx={{ marginBottom: "50px" }}>
          <Grid item xs={12} sx={{ textAlign: "center", marginTop: "20px" }}>
            <Typography variant="h5" fontWeight="bold">
              Purchased Courses
            </Typography>
          </Grid>
          {purchasedCourse && purchasedCourse.length > 0 ? (
            <>
              {purchasedCourse.map((course, index) => {
                return (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    mt="50px"
                  >
                    <CourseCard
                      key={index}
                      title={course.title}
                      description={course.description}
                      courseId={course._id}
                      button1={"view"}
                    />
                  </Grid>
                );
              })}
            </>
          ) : (
            <Grid item xs={12} sx={{ textAlign: "center", mt: "150px",mb:"140px"}}>
              <Typography variant="h4">No Purchased Courses</Typography>
            </Grid>
          )}
        </Grid>
      </Box>
      <Footer />
    </div>
  );
}

export default PurchasedCourse;
