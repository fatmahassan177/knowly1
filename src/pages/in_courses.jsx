import React, { useState, useEffect } from "react";
import { Button, Table, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function AddCoursePage() {
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({ name: "", description: "", instructor: "" });

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await fetch("https://knowly.runasp.net/api/Course"); 
      const data = await response.json();
      const coursesData = data?.$values || [];
      setCourses(coursesData);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  const handleAddCourse = () => {
    if (!newCourse.name.trim() || !newCourse.description.trim() || !newCourse.instructor.trim()) {
      alert("Make sure that all fields contain data");
      return;
    }

    setCourses([...courses, { ...newCourse, id: Date.now() }]); 

    setNewCourse({ name: "", description: "", instructor: "" }); 
  };

  return (
    <div className="container mt-4">
      
      <div className="d-flex justify-content-end mb-4">
        <NavLink className="btn btn-secondary d-flex align-items-center" to="/instructor">
          Back
        </NavLink>
      </div>

      <div className="d-flex justify-content-center">
        <div className="w-100" style={{ maxWidth: "500px" }}>
          <h2 className="text-center mb-4 fs-1 mt-4 fw-bold">Add New Course</h2>
          <Form className="mb-4">
            <Form.Group className="mb-3">
              <Form.Label>Course Name</Form.Label>
              <Form.Control
                type="text"
                value={newCourse.name}
                onChange={(e) => setNewCourse({ ...newCourse, name: e.target.value })}
                placeholder="Enter Course Name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={newCourse.description}
                onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
                placeholder="Enter Description"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Instructor Name</Form.Label>
              <Form.Control
                type="text"
                value={newCourse.instructor}
                onChange={(e) => setNewCourse({ ...newCourse, instructor: e.target.value })}
                placeholder="Instructor Name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                value={newCourse.CategoryName}
                onChange={(e) => setNewCourse({ ...newCourse, categoryName: e.target.value })}
                placeholder="Instructor Name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Duration</Form.Label>
              <Form.Control
                type="text"
                value={newCourse.durationInHours}
                onChange={(e) => setNewCourse({ ...newCourse, durationInHours: e.target.value })}
                placeholder="Instructor Name"
              />
            </Form.Group>
            <Button variant="primary" onClick={handleAddCourse} className="w-100">
              Add
            </Button>
          </Form>
        </div>
      </div>

      
      <h3 className="d-flex justify-content-center fs-1 mt-4 mb-3 fw-bold">ALL Courses</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Course Name</th>
            <th>Description</th>
            <th>Instructor</th>
            <th>Category</th>
            <th>Duration (Hours)</th>
          </tr>
        </thead>
        <tbody>
          {courses.length > 0 ? (
            courses.map((course, index) => (
              <tr key={course.id}>
                <td>{index + 1}</td>
                <td>{course.name}</td>
                <td>{course.description}</td>
                <td>{course.instructor || "Not Found"}</td>
                <td>{course.categoryName || "Not Found"}</td>
                <td>{course.durationInHours || "Not Found"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">
                NO Courses Added Yet.
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default AddCoursePage;
