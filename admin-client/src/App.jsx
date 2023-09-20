import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Landing from "./components/LandingPage/Landing";
import CreateCourse from './components/CreateCourse/CreateCourse';
import Register from './components/Register/Register';
import ShowCourses from './components/ShowCourses/ShowCourses';
import Edit from './components/EditPage/editpage'; 

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login  />} />
                <Route path="/register" element={<Register />} />
                <Route path="/createcourse" element={<CreateCourse />} />
                <Route path="/courses" element={<ShowCourses />} />
                <Route path="/edit/:courseId" element={<Edit />} />
            </Routes>
        </Router>
    );
}

export default App;
