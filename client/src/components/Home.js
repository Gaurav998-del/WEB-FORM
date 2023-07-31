import React from "react";
// import { Link } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
        <Navbar.Brand href="/startpage">WEB-FORM</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/head-tail">Head & Tail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <h1>Welcome to Home Page</h1>
    </div>
  );
};

export default Home;
