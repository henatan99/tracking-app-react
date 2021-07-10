import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => (
  <div>
    <Link to="/login">Log In</Link>
    <br />
    <Link to="/signup">Sign Up</Link>
  </div>
);
export default LoginPage;
