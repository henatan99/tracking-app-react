import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const HeaderNav = () => (
  <nav className="header-nav">
    <ul className="footer-nav-ul">
      <li className="footer-nav-li">
        <Link to={`/login`}>
          <span>Login</span>
        </Link>
      </li>
      <li className="footer-nav-li">
        <Link to={`/signup`}>
          <span>SignUp</span>
        </Link>
      </li>
    </ul>
  </nav>
);

export default HeaderNav;
