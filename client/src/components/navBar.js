import React from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const NavBar = ({ loggedIn, logout }) => {

  const renderAuthButtons = () => {
    if (loggedIn) {
      return (
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/groups">Groups</Nav.Link>
          </Nav>
          <Button variant="outline-secondary" size="sm" onClick={logout}>
              Log out
          </Button>
        </Navbar.Collapse>
      )
    } else {
      return (
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" justify>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
          <Link to="/login">
            <Button variant="outline-secondary" size="sm">Log in</Button>
          </Link>
          <Link to="/signup">
            <Button variant="outline-secondary" size="sm">Sign up</Button>
          </Link>
        </Navbar.Collapse>
      )
    }
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Unbeleafable</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      {renderAuthButtons()}
    </Navbar>
  );
};

export default NavBar;
