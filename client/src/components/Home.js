import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const Home = () => {

  return (
    <div className="v-center">
      <h2> Welcome to Unbeleafable </h2>
      <p>A community of house plant lovers, gardeners, and other plant
      enthusiasts! <br /> Sign up to discuss all your plant related matter with
      people who love plants as much as you do.</p>
      <Link to="/signup">
        <Button variant="outline-secondary" size="sm">Sign up</Button>
      </Link>
    </div>
  )
}

export default Home
