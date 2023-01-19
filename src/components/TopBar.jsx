import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
const TopBar = () => {
  return (
    <>
      <Navbar style={{ padding: "20px" }} variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              style={{ width: "80px", height: "50px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL8MS6bQJUK4oO5E6XE9qqwK7zOEt5CENDIg&usqp=CAU"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/add">Add Movies</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default TopBar;
