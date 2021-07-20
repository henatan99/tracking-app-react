import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="home">
    <Link to="/login">
      <span>Login</span>
    </Link>
    <Link to="/signup">
      <span>SignUp</span>
    </Link>
  </div>
);

export default Home;
