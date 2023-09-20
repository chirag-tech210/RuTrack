import React, { useEffect, useState } from "react";
import CourseDetailsCard from "../../compnents/courseDetailCard/CourseDetailCard";
import {
  Box,
  Typography,
  useMediaQuery,
  useTheme,
  CircularProgress,
} from "@mui/material";
import NavInternal from "../../compnents/Nav-Internal";
import Footer from "../../compnents/footer";
import "./courseDetail.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useRecoilValue,useSetRecoilState } from "recoil";
import { courseWithId } from "../../recoil/atom";

function CourseDetail() {
  const courseId = useParams();
  const theme = useTheme();
  const isMobileDevice = useMediaQuery(theme.breakpoints.down("sm"));
  
  const courses = useRecoilValue(courseWithId);
  const setCourses = useSetRecoilState(courseWithId);

  const navContent = [
    { text: "All Courses", link: "/courses" },
    { text: "Purchased Courses", link: "/purchasedcourse" },
  ];

  const getCourse = async () => {
    const headers = {
      authorization: "Bearer " + localStorage.getItem("token"),
      "Content-Type": "application/json",
    };

    try {
      const res = await axios.get(
        "http://localhost:3000/user/courses/" + courseId.courseId,
        { headers }
      );
      setCourses(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCourse();
  }, []);

  return (
    <>
      <NavInternal data={navContent} />
      {courses ? (
        <div style={{ marginTop: "40px" }}>
          <CourseDetailsCard />
          <Typography
            variant="h6"
            sx={{
              marginTop: isMobileDevice ? "450px" : "300px",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Detail
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: isMobileDevice ? "400px" : "1000px",
              textAlign: "center",
              marginTop: "1%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            malesuada est a est dignissim, vel volutpat tellus bibendum. Integer
            a dui venenatis, bibendum erat sed, cursus turpis. Aenean pulvinar
            nulla est, quis rutrum odio luctus vel. Aenean eget pellentesque
            turpis. Suspendisse potenti. Maecenas porta odio eros, et pharetra
            augue hendrerit quis. Aenean mattis ante tortor, viverra pharetra
            risus accumsan sed. Cras sit amet eleifend leo, in congue quam.{" "}
          </Typography>
          <div className="iframe-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/_X7_v0h_q3A"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div style={{ marginTop: "100px" }}>
            <Footer />
          </div>
        </div>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress color="secondary" />
        </Box>
      )}
    </>
  );
}

export default CourseDetail;
