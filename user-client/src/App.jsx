import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage/landingPage";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Courses from "./pages/courses/courses";
import CourseDetail from "./pages/courseDetail/CourseDetail";
import PurchasedCourse from "./pages/purchasedCourse/PurchasedCourse";
import Me from "./pages/me/Me";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/allcourses" element={<Courses />} />
        <Route path="/courses/:courseId" element={<CourseDetail />} />
        <Route path="/purchasedcourse" element={<PurchasedCourse />} />
        <Route path="/me" element={<Me />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
