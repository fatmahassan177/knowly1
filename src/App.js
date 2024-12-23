import {React }  from 'react';
import './App.css';
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom"
import PTeam from './pages/Pteam';
import PCategory from './pages/PCategory';
import PCourses from './pages/PCourses';
import CourseDetails from './pages/Cdetails';

import RegisterPage from './pages/U-Register';
import LoginPage from './pages/login';
import EnrolledCourses from './component/courses/EnrollCourses';


import AddCoursePage from './pages/in_courses';
import Admaindashboard from './pages/admain dashboard';
import InstructorPage from './pages/Instructor-Page';
import Hero from './component/header/header';


function App() {
  
  return (
    <> 
   
 <Routes>
   <Route path="/"  element={<LoginPage/>} />
   <Route path="/home" element={<Home/>} />
   <Route path="/admin" element={<Admaindashboard />} />
    <Route path="/register" element={<RegisterPage/>} />
  <Route path="/category" element={<PCategory />} />
    <Route path="/courses" element={<PCourses  />}  />
  <Route path="/team" element={<PTeam />} />
  <Route path="/enrolled" element={<EnrolledCourses />}/>
  <Route path="/courses/:id" element={<CourseDetails />} />
  
  <Route path="/instructor" element={<InstructorPage />} />
  <Route path="/add-course" element={<AddCoursePage />} />

   </Routes> 
   
  </>
  );
}

export default App;
