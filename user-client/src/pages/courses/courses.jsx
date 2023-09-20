import NavInternal from "../../compnents/Nav-Internal";
import CourseSvg from "../../../svg-component/course-svg";
import CourseCard from "../../compnents/CourseCard";
import Footer from "../../compnents/footer";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
  CircularProgress,
  dividerClasses,
} from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import "./courses.css";

function Courses() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobileDevice = useMediaQuery(theme.breakpoints.down("sm"));
  const [courses, setCourses] = useState(null);

  console.log(courses);

  const navContent = [
    { text: "All Courses", link: "/courses" },
    { text: "Purchased Courses", link: "/purchasedcourse" },
  ];

  const handleClick = (courseId) => {
    navigate("/courses/" + courseId);
  };
  const purchaseRoute = async (courseId) => {
    const headers = {
      authorization: "Bearer " + localStorage.getItem("token"),
      "Content-Type": "application/json",
    };
    try {
      const res = await axios.post(
        "http://localhost:3000/user/purchase/" + courseId,
        {},
        { headers }
      );
      alert("course purchased successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const getCourses = async () => {
    const headers = {
      authorization: "Bearer " + localStorage.getItem("token"),
      "Content-Type": "application/json",
    };
    console.log("Bearer " + localStorage.getItem("token"));
    try {
      const res = await axios.get("http://localhost:3000/user/courses", {
        headers,
      });
      setCourses(res.data.courses);
      console.log(res.data.courses);
    } catch (error) {
      if (error.response) {
        console.log(error.response);
      } else {
        console.log(error.message);
      }
    }
  };

  useEffect(() => {
    getCourses();
  }, []);
  return (
    <>
      {courses ? (
        <div>
          <NavInternal data={navContent} me={"/me"} />
          <Box sx={{ marginTop: "100px" }}>
            <Grid
              container
              direction="row"
              sx={{ justifyContent: "center", alignItems: "center" }}
            >
              <Grid item sx={{ maxWidth: "50%" }}>
                <Typography
                  variant={isMobileDevice ? "h5" : "h4"}
                  sx={{ textAlign: "center" }}
                >
                  Courses from world best educator.
                </Typography>
                <Typography variant="body1" sx={{ textAlign: "center" }}>
                  Proin mattis turpis ac magna maximus, ornare ultricies quam
                  luctus.Proin mattis turpis ac magna maximus, ornare ultricies
                  quam luctus. Morbi ac turpis nisi. Suspendisse id sapien
                  accumsan, mollis nulla in, tincidunt massa. Mauris eget
                  volutpat risus. Nam sollicitudin velit faucibus arcu lobortis,
                  ut tincidunt ligula euismod. Aenean lacinia a nisl non
                  fringilla.
                </Typography>
              </Grid>
              <Grid item>
                <CourseSvg />
              </Grid>
            </Grid>
            <Grid container sx={{marginBottom:"50px"}}>
              <Grid
                item
                xs={12}
                sx={{ textAlign: "center", marginTop: "20px" }}
              >
                <Typography variant="h5" fontWeight="bold">
                  Courses
                </Typography>
              </Grid>
              {courses &&
                courses.map((a, index) => {
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
                        title={a.title}
                        description={a.description}
                        courseId={a._id}
                        button1={"view"}
                        button2={"Purchase"}
                        handleClick={handleClick}
                        purchaseRoute={purchaseRoute}
                      />
                    </Grid>
                  );
                })}
            </Grid>
          </Box>
          <Footer />
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

export default Courses;
