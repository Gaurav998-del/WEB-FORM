import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import About from "../About";
import HeadTail from "../HeadTail";
import "./signup.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import StartPage from "../StartPage";
import Login from "../Login/Login";

function Signup() {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:7000/signup", { name, password })
      .then((res) => {
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/startpage">WEB-FORM</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link
              className="disabledCursor"
              onClick={(event) => event.preventDefault()}
              href="/home"
            >
              Home
            </Nav.Link>
            <Nav.Link
              className="disabledCursor"
              onClick={(event) => event.preventDefault()}
              href="/about"
            >
              About
            </Nav.Link>
            {/* <Nav.Link
              className="disabledCursor"
              onClick={(event) => event.preventDefault()}
              href="/head-tail"
            >
              Head & Tail
            </Nav.Link> */}
            <Nav.Link
              href="/head-tail"
            >
              Head & Tail
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/head-tail" element={<HeadTail />} />
        <Route path="/startpage" element={<StartPage />} />
      </Routes>

      <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
        <div className="bg-white p-3 rounded w-25">
          <h2>Signup</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name">
                <strong>Name</strong>
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                autoComplete="off"
                name="name"
                className="form-control rounded-0"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="name">
                <strong>Password</strong>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                className="form-control rounded-0"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary w-100 rounded-0">
              Signup
            </button>
          </form>
          <p>Already have an account ?</p>
          <Link
            to="/login"
            className="btn btn-primary border w-100 bg-link rounded-0 text-decoration-none"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
