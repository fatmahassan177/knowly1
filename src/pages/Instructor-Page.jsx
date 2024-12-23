import React from "react";
import { Navbar, Container} from "react-bootstrap";
import logo from "../assets/logo.png";
import "../component/nav/nav.css";
import { NavLink } from "react-router-dom";
import Hero from '../component/header/header';
function InstructorPage() {
  return (
    <div>

       <Navbar expand="lg" className="w-100">
        <Container>
          <Navbar.Brand href="#home" className="brand">
            <img className="logo img-fluid" src={logo} alt="Logo" />
            Knowly
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <h1 className=" brand fs-1 ms-4">Instructor Dashboard</h1>
            <div className="d-flex gap-3 justify-content-center ms-auto">  
           <NavLink className="nav-item nav-link fs-5 btn btn-outline   COLOR fs-3 ms-5" to="/home">
            As a user
           </NavLink>
           <NavLink className="nav-item nav-link fs-5 btn btn-outline  COLOR fs-3 ms-2" to="/add-course">
            Add Course
            </NavLink>
        
            </div>
            <a href="/" className=" ADD COLOR LOGOUT fs-3 ms-3 mb-2">
              Logout
            </a>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Hero/>
      



    </div>
    
  );
}

export default InstructorPage;
