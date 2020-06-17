import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const NavBar = ({ loggedIn, logout }) => {

  const renderAuthButtons = () => {
    if (loggedIn) {
      return (
        <div>
          <Link to="/">Home</Link> |  <Link to="/groups">Groups</Link>
          <Button variant="outline-secondary" size="sm" onClick={logout}>
            Log out
          </Button>
        </div>
      )
    } else {
      return (
        <div>
          <Link to="/login">
            <Button variant="outline-secondary" size="sm">Log in</Button>
          </Link>
          <Link to="/signup">
            <Button variant="outline-secondary" size="sm">Sign up</Button>
          </Link>
        </div>
      )
    }
  }

  return (
    <div>
      {renderAuthButtons()}
    </div>
  );
};

export default NavBar;
