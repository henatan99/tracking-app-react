import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const FooterNav = ({ user }) => (
  <nav className="footer-nav">
    <ul className="footer-nav-ul">
      <li className="footer-nav-li">
        <Link to={`/${user.id}/measurement`}>
          <span className="iconify" data-icon="fluent-data-bar-vertical-add-24-filled" data-inline="false" />
          <span>Add measure</span>
        </Link>
      </li>
      <li className="footer-nav-li">
        <Link to={`/${user.id}/track/1`}>
          <span className="iconify" data-icon="iconoir:stat-up" data-inline="false" />
          <span>Track it</span>
        </Link>
      </li>
      <li className="footer-nav-li">
        <Link to={`/${user.id}/progress/1`}>
          <span className="iconify" data-icon="carbon:in-progress" data-inline="false" />
          <span>Your progress</span>
        </Link>
      </li>
      <li className="footer-nav-li">
        <Link to={`/${user.id}/more`}>
          <span className="iconify" data-icon="bi:three-dots" data-inline="false" />
          <span>More</span>
        </Link>
      </li>
    </ul>
  </nav>
);

FooterNav.defaultProps = {
  user: {},
};

FooterNav.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    username: PropTypes.string,
  }),
};

export default FooterNav;
