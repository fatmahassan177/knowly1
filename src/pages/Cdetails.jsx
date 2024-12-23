import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, Button ,Container,Row,Col } from "react-bootstrap";
import'../component/courses/courses.css';

function CourseDetails() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
   
    fetch(`https://knowly.runasp.net/api/Course/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch course details");
        }
        return response.json();
      })
      .then((data) => setCourse(data))
      .catch((error) => console.error("Error fetching course details:", error));
  }, [id]);

  if (!course) {
    return <div className="custom-loader d-flex justify-content-center align-items-center " ></div>
  }
 

  return (
    <Container className="d-flex justify-content-center align-items-center " style={{ minHeight: "100vh" }}>
    <Row>
      <Col md={12}>
        <Card className="shadow-lg" style={{ maxWidth: "700px", margin: "auto" }}>
          <Card.Img
            variant="top"
            src={`https://knowly.runasp.net/static/Images/${course.cover}`} // صورة افتراضية لو ما فيش صورة
            alt={course.name}
            style={{ objectFit: "cover", height: "300px" }}
          />
          <Card.Body>
            <Card.Title className="text-center fs-3 fw-bold mb-3">{course.name}</Card.Title>
            <Card.Text className="text-muted text-center mb-4">{course.categoryName}</Card.Text>
            <Card.Text>
              <strong>Details Of Course :</strong> {course.description}
              <br></br>
              <strong> Instructor :</strong> {course.instructor}
              <br></br>
              <strong> Hours:</strong> {course.durationInHours}
            </Card.Text>
            <div className="text-center">
              <Link to="/Courses">
                <Button variant="secondary" className="px-4">
                 Back
                </Button>
              </Link>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);
}

export default CourseDetails;
