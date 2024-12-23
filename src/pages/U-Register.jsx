import React, { useState } from "react";
import { Form, Button, Alert, Container, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");  
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

   
    const userData = {
      firstName,
      lastName,
      userName,
      email,
      phone,
      password,
    };

    try {
   
      localStorage.setItem("userData", JSON.stringify(userData));

      setSuccess(true);
      setTimeout(() => {
        navigate("/"); 
      }, 2000);
    } catch (err) {
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh", overflowY: "auto", padding: "20px", backgroundColor: "#f9f9f9" }}
    >
      <Row
        className="w-100 mx-0 d-flex align-items-center justify-content-center"
        style={{ maxWidth: "1200px" }}
      >
       
        <Col xs={12} md={6} className="d-flex justify-content-center align-items-center order-2 order-md-1 mt-1">
          <img
            src="https://img.freepik.com/free-vector/app-development-concept-with-flat-deisng_23-2147852844.jpg"
            alt="Register Illustration"
            className="img-fluid"
            style={{ maxHeight: "700px", width: "100%", objectFit: "contain" }}
          />
        </Col>

       
        <Col xs={12} md={6} className="d-flex justify-content-center align-items-center order-1 order-md-2">
          <div
            className="p-4 shadow rounded bg-white"
            style={{ width: "100%", maxWidth: "400px" }}
          >
            <h3 className="text-center mb-4">Register</h3>
            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">Registered Successfully 🎉</Alert>}
            <Form onSubmit={handleRegister}>
              {/* First Name */}
              <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your first name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </Form.Group>

            
              <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </Form.Group>

              
              <Form.Group className="mb-3">
                <Form.Label>User Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your user name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  required
                />
              </Form.Group>

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
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
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
                Register
              </Button>
            </Form>
            <p className="text-center mt-3">
              Have an account?{" "}
              <a href="/" className="text-primary">
                Login
              </a>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterPage;