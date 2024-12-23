import React, { useState, useEffect } from "react";
import { Tabs, Tab, Table, Button, Navbar, Container, Modal, Form } from "react-bootstrap";
import "../component/nav/nav.css";
import logo from "../assets/logo.png";
import axios from "axios";

function Admaindashboard() {
  const [key, setKey] = useState("users");
  const [users, setUsers] = useState([]);
  const [instructors, setInstructors] = useState([]);
  const [courses, setCourses] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const [modalType, setModalType] = useState("");
  const [modalAction, setModalAction] = useState("");

  useEffect(() => {
    if (key === "users") {
      fetchUsers();
    } else if (key === "courses") {
      fetchCourses();
    } else if (key === "instructors") {
      fetchInstructors();
    }
  }, [key]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("https://knowly.runasp.net/api/Admin/Students");
      const usersData = response.data.$values.map((user) => ({
        id: user.id,
        name: `${user.firstName} ${user.lastName}`,
        email: user.email,
        phoneNumber: user.phoneNumber,
      }));
      setUsers(usersData);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const fetchCourses = async () => {
    try {
      const response = await axios.get("https://knowly.runasp.net/api/Course");
      const coursesData = response.data.$values.map((course) => ({
        id: course.id,
        name: course.name,
        description: course.description,
        category: course.categoryName,
        duration: `${course.durationInHours} hours`,
        instructor: course.instructor,
      }));
      setCourses(coursesData);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  const fetchInstructors = async () => {
    try {
      const response = await axios.get("https://knowly.runasp.net/api/Admin/Instructors");
      const instructorsData = response.data.$values.map((instructor) => ({
        id: instructor.id,
        name: `${instructor.firstName} ${instructor.lastName}`,
        email: instructor.email,
        phoneNumber: instructor.phoneNumber,
      }));
      setInstructors(instructorsData);
    } catch (error) {
      console.error("Error fetching instructors:", error);
    }
  };

  const openModal = (type, action, data = {}) => {
    setModalType(type);
    setModalAction(action);
    setModalData(data);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalData({});
  };

  const saveData = () => {
    if (modalAction === "add") {
      if (modalType === "user") {
        setUsers([...users, { ...modalData, id: users.length + 1 }]);
      } else if (modalType === "course") {
        setCourses([...courses, { ...modalData, id: courses.length + 1 }]);
      } else if (modalType === "instructor") {
        setInstructors([...instructors, { ...modalData, id: instructors.length + 1 }]);
      }
    } else if (modalAction === "edit") {
      if (modalType === "user") {
        const updatedUsers = users.map((user) =>
          user.id === modalData.id ? { ...user, ...modalData } : user
        );
        setUsers(updatedUsers);
      } else if (modalType === "course") {
        const updatedCourses = courses.map((course) =>
          course.id === modalData.id ? { ...course, ...modalData } : course
        );
        setCourses(updatedCourses);
      } else if (modalType === "instructor") {
        const updatedInstructors = instructors.map((instructor) =>
          instructor.id === modalData.id ? { ...instructor, ...modalData } : instructor
        );
        setInstructors(updatedInstructors);
      }
    }
    closeModal();
  };

  const handleDelete = (id) => {
    if (modalType === "user") {
      setUsers(users.filter((user) => user.id !== id));
    } else if (modalType === "course") {
      setCourses(courses.filter((course) => course.id !== id));
    } else if (modalType === "instructor") {
      setInstructors(instructors.filter((instructor) => instructor.id !== id));
    }
  };

  return (
    <>
      <Navbar expand="lg" className="w-100">
        <Container>
          <Navbar.Brand href="#home" className="brand">
            <img className="logo img-fluid" src={logo} alt="Logo" />
            Knowly
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <h1 className="ms-auto brand fs-1">Admin Dashboard</h1>
            <Button
              className="btn-link btn ADD ms-auto fs-4 mt-1"
              variant="out-line-primary"
              onClick={() =>
                openModal(
                  key === "users" ? "user" : key === "courses" ? "course" : "instructor",
                  "add"
                )
              }
            >
              Add New {key === "users" ? "User" : key === "courses" ? "Course" : "Instructor"}
            </Button>
            <a href="/" className="add_to_learning ADD COLOR LOGOUT fs-4 ms-3 mb-2">
              Logout
            </a>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="container mt-4">
        <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
          <Tab eventKey="users" title="Manage Users">
            <UsersTable users={users} onEdit={openModal} onDelete={handleDelete} />
          </Tab>
          <Tab eventKey="courses" title="Manage Courses">
            <CoursesTable courses={courses} onEdit={openModal} onDelete={handleDelete} />
          </Tab>
          <Tab eventKey="instructors" title="Manage Instructors">
            <InstructorsTable instructors={instructors} onEdit={openModal} onDelete={handleDelete} />
          </Tab>
        </Tabs>
      </div>

      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>{modalAction === "add" ? "Add" : "Edit"} {modalType.charAt(0).toUpperCase() + modalType.slice(1)}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {modalType === "user" ? (
              <>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={modalData.name || ""}
                    onChange={(e) => setModalData({ ...modalData, name: e.target.value })}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={modalData.email || ""}
                    onChange={(e) => setModalData({ ...modalData, email: e.target.value })}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="text"
                    value={modalData.phoneNumber || ""}
                    onChange={(e) => setModalData({ ...modalData, phoneNumber: e.target.value })}
                  />
                </Form.Group>
              </>
            ) : modalType === "course" ? (
              <>
                <Form.Group className="mb-3">
                  <Form.Label>Course Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={modalData.name || ""}
                    onChange={(e) => setModalData({ ...modalData, name: e.target.value })}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    value={modalData.description || ""}
                    onChange={(e) => setModalData({ ...modalData, description: e.target.value })}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Category</Form.Label>
                  <Form.Control
                    type="text"
                    value={modalData.category || ""}
                    onChange={(e) => setModalData({ ...modalData, category: e.target.value })}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Duration (Hours)</Form.Label>
                  <Form.Control
                    type="number"
                    value={modalData.duration || ""}
                    onChange={(e) => setModalData({ ...modalData, duration: e.target.value })}
                  />
                </Form.Group>
              </>
            ) : (
              <>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={modalData.name || ""}
                    onChange={(e) => setModalData({ ...modalData, name: e.target.value })}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={modalData.email || ""}
                    onChange={(e) => setModalData({ ...modalData, email: e.target.value })}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="text"
                    value={modalData.phoneNumber || ""}
                    onChange={(e) => setModalData({ ...modalData, phoneNumber: e.target.value })}
                  />
                </Form.Group>
              </>
            )}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button variant="primary" onClick={saveData}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

const UsersTable = ({ users, onEdit, onDelete }) => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phoneNumber}</td>
              <td>
                <Button variant="warning" onClick={() => onEdit("user", "edit", user)}>
                  Edit
                </Button>{" "}
               
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

const CoursesTable = ({ courses, onEdit, onDelete }) => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Duration</th>
            <th>Instructor</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.name}</td>
              <td>{course.description}</td>
              <td>{course.category}</td>
              <td>{course.duration}</td>
              <td>{course.instructor}</td>
              <td>
                <Button variant="warning" onClick={() => onEdit("course", "edit", course)}>
                  Edit
                </Button>{" "}
              
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

const InstructorsTable = ({ instructors, onEdit, onDelete }) => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {instructors.map((instructor) => (
            <tr key={instructor.id}>
              <td>{instructor.name}</td>
              <td>{instructor.email}</td>
              <td>{instructor.phoneNumber}</td>
              <td>
                <Button variant="warning" onClick={() => onEdit("instructor", "edit", instructor)}>
                  Edit
                </Button>{" "}
                
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Admaindashboard;
