import React from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const About = () => {
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
      <h1>About Page</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting movie industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </div>
  );
};

export default About;
