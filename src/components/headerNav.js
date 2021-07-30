import React from 'react';
import { Link } from 'react-router-dom';

const HeaderNav = () => (
  <nav className="header-nav">
    <ul className="header-nav-ul">
      <li className="header-nav-li">
        <Link to="/">
          <span>Home</span>
        </Link>
      </li>
      <li className="header-nav-li">
        <Link to="/login">
          <span>Login</span>
        </Link>
      </li>
      <li className="header-nav-li">
        <Link to="/signup">
          <span>SignUp</span>
        </Link>
      </li>
    </ul>
  </nav>
);

export default HeaderNav;
