
import React, { useState } from "react";
import { Form, Button, Alert, Container, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const storedUserData = JSON.parse(localStorage.getItem("userData"));

  const staticUsers = {
    admin: {
      email: "admin@123",
      password: "admin123",
    },
    instructor: {
      email: "instructor@123",
      password: "instructor123",
    },
  };

  const handleLogin = (e) => {
    e.preventDefault();

   
    if (storedUserData) {
      const { email: storedEmail, password: storedPassword } = storedUserData;

     
      if (
        (email === storedEmail && password === storedPassword) ||
        (email === staticUsers.admin.email && password === staticUsers.admin.password) ||
        (email === staticUsers.instructor.email && password === staticUsers.instructor.password)
      ) {
        if (email === staticUsers.admin.email) {
          navigate("/admin"); 
        } else if (email === staticUsers.instructor.email) {
          navigate("/instructor"); 
        } else {
          navigate("/home"); 
        }
      } else {
        setError("Invalid email or password");
      }
    } else {
      setError("User not found. Please register first.");
    }
  };

  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center"
      style={{
        minHeight: "100vh",
        overflowY: "auto",
        padding: "20px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <Row
        className="w-100 mx-0 d-flex align-items-center justify-content-center"
        style={{ maxWidth: "1200px" }}
      >
        <Col
          xs={12}
          md={6}
          className="d-flex justify-content-center align-items-center order-2 order-md-1 mt-1"
        >
          <img
            src="https://img.freepik.com/free-vector/app-development-concept-with-flat-deisng_23-2147852844.jpg"
            alt="Login Illustration"
            className="img-fluid"
            style={{
              maxHeight: "700px",
              width: "100%",
              objectFit: "contain",
            }}
          />
        </Col>

       
        <Col
          xs={12}
          md={6}
          className="d-flex justify-content-center align-items-center order-1 order-md-2"
        >
          <div
            className="p-4 shadow rounded bg-white"
            style={{
              width: "100%",
              maxWidth: "400px",
            }}
          >
            <h3 className="text-center mb-4">Login</h3>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Login
              </Button>
            </Form>

            <p className="text-center mt-3">
              Don't Have An Account?{" "}
              <a href="/register" className="text-primary">
                Register
              </a>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
