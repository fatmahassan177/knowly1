import React, { useEffect, useState } from "react";

function EnrolledCourses() {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

 
  useEffect(() => {
    const storedEnrolledCourses = JSON.parse(localStorage.getItem("enrolledCourses")) || [];
    setEnrolledCourses(storedEnrolledCourses);
  }, []);

  
  const handleUnenroll = (courseId) => {
    const updatedCourses = enrolledCourses.filter((course) => course.id !== courseId);
    setEnrolledCourses(updatedCourses);
    localStorage.setItem("enrolledCourses", JSON.stringify(updatedCourses)); // تحديث Local Storage
  };

  return (
    <div className="container mt-4">
     
      <div className="container-fluid my-5 Courses mt-5">
      <h1>My Courses</h1>

      </div>
      {enrolledCourses.length > 0 ? (
        <div className="row">
          {enrolledCourses.map((course) => (
            <div key={course.id} className="col-md-4">

              <div className="card mb-3">
              <img
                    src={`https://knowly.runasp.net/static/Images/${course.cover}`}
                    className="card-img-top"
                    alt={course.name}
                  /> 
                <div className="card-body">
                  <h5 className="card-title">{course.name}</h5>
                  <p className="card-text">Category: {course.categoryName}</p>
                  <p className="card-text">Description: {course.description}</p>
                  <p className="card-text">Hours: {course.durationInHours}</p>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleUnenroll(course.id)}
                  >
                    Unenroll
                  </button>
                </div>
              </div>
            </div>
            
          ))}
        </div>
      ) : (
       
       <h1 className="container-fluid my-5 Courses mt-5 ">No courses enrolled yet.</h1> 
       
      )}
    </div>
  );
}

export default EnrolledCourses;
