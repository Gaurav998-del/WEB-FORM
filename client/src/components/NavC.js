import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavC = () => {
  return (
    <div>
    <Navbar bg="primary" data-bs-theme="dark">
    <Container>
    <Navbar.Brand href="/startpage">WEB-FORM</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="/signup">Signup</Nav.Link>
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/head-tail">Head & Tail</Nav.Link>
      </Nav>
    </Container>
  </Navbar>   
  </div>
    );
};

export default NavC;
