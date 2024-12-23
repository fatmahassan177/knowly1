import { Link } from "react-router-dom";
import "./courses.css";
import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

function Coursess() {
  const [coursess, setCoursess] = useState([]);
  const [myenrolledCourses, setmyEnrolledCourses] = useState([]);

  const apiUrl = "https://knowly.runasp.net/api/Course";

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
      
        const coursesData = response.data?.$values || [];
        setCoursess(coursesData); 
      } catch (error) {
        console.error("Error fetching data:", error);
        setCoursess([]); 
      }
    };

    fetchData();
  }, []);

  
  useEffect(() => {
    const storedEnrolledCourses =
      JSON.parse(localStorage.getItem("enrolledCourses")) || [];
    setmyEnrolledCourses(storedEnrolledCourses);
  }, []);

  const handleEnroll = (course) => {
    if (!myenrolledCourses.find((c) => c.id === course.id)) {
      const updatedCourses = [...myenrolledCourses, course];
      setmyEnrolledCourses(updatedCourses);
      localStorage.setItem("enrolledCourses", JSON.stringify(updatedCourses));
    }
  };

  return (
    <>
      <div className="container-fluid my-5 Courses mt-5">
        <h1>Courses</h1>
      </div>
      <div className="container mt-4 card1 mb-5">
        <div className="row g-4">
          
          {coursess.length > 0 ? (
            coursess.map((course) => (
              <div
                className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex align-items-stretch"
                key={course.id}
              >
                <div className="card h-100 shadow-sm">
                
                  <img
                    src={`https://knowly.runasp.net/static/Images/${course.cover}`}
                    className="card-img-top"
                    alt={course.name}
                  />
                  <div className="card-body d-flex flex-column">
                  
                    <h5 className="card-title">{course.name}</h5>
                    <p className="card-text">
                      <strong>Category:</strong> {course.categoryName} <br />
                      <strong>Hours:</strong> {course.durationInHours}
                    </p>

                  
                    <div className="d-flex justify-content-between mt-auto">
                        {myenrolledCourses.find((c) => c.id === course.id) ? (
                          <button className="btn btn-danger w-50 me-2">Enrolled</button>
                        ) : (
                          <Button
                            className="btn btn-success w-50 me-2"
                            onClick={() => handleEnroll(course)}
                          >
                            Enroll Now
                          </Button>
                        )}
                        <Link to={`/courses/${course.id}`} className="w-50">
                          <Button variant="primary" className="w-100">
                            Learn More
                          </Button>
                        </Link>
                      </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
          
            <div className="text-center">No courses available.</div>
          )}
        </div>
      </div>
    </>
  );
}

export default Coursess;
