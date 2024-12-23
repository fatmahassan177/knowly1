
import { Navbar, Container} from 'react-bootstrap'
import logo from '../../assets/logo.png';
import './nav.css';
  import { NavLink} from "react-router-dom";
import {React } from "react";


function Navs  ({ enrolledCount }) {
  
  

  return(
  <>
      {/* Navbar */}
      <Navbar  expand="lg" className="w-100 ">
        <Container>
          <Navbar.Brand href="#home" className="brand"> <img className="logo img-fluid " src={logo} alt="Logo" />
          Knowly</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          
              <div className="navbar-nav ms-auto me-auto ">
                 <NavLink className="nav-item COLOR  "   to="/home">Home</NavLink>
                  <NavLink className="nav-item COLOR"  to="/category">Category</NavLink>
                  <NavLink className="nav-item COLOR" to="/courses">Courses</NavLink>
                 <NavLink className="nav-item COLOR"   to="/team">Team</NavLink>
               </div>
           <div className="">
           <NavLink className="btn btn-outline nav-item  COLOR fs-4 ms-2  fw-medium " variant="out-line-primary" to="/enrolled">
          My Courses { enrolledCount }
        </NavLink>
  
            </div>
           
            <a href="/" className=" add_to_learning  COLOR LOGOUT fs-4 mb-2   fw-medium "  >
          logout
          </a>
          
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </>

  );
}

export default Navs ;
