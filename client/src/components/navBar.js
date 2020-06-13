import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const NavBar = ({ loggedIn, logout }) => {

  const renderLoginOrLogout = () => {
    if (loggedIn) {
      return (
        <Button variant="outline-secondary" size="sm" onClick={logout}>
          Log out
        </Button>
      )
    } else {
      return (
        <Link to="/login">
          <Button variant="outline-secondary" size="sm">Log in</Button>
        </Link>
      )
    }
  }

  return (
    <div>
      {renderLoginOrLogout()}
    </div>
  );
};

export default NavBar;
