import React from 'react';

const FooterNav = () => (
  <nav className="footer-nav">
    <ul className="footer-nav-ul">
      <li className="footer-nav-li">
        <span className="iconify" data-icon="fluent-data-bar-vertical-add-24-filled" data-inline="false" />
        <span>Add measure</span>
      </li>
      <li className="footer-nav-li">
        <span className="iconify" data-icon="iconoir:stat-up" data-inline="false" />
        <span>Track it</span>
      </li>
      <li className="footer-nav-li">
        <span className="iconify" data-icon="carbon:in-progress" data-inline="false" />
        <span>Your progress</span>
      </li>
      <li className="footer-nav-li">
        <span className="iconify" data-icon="bi:three-dots" data-inline="false" />
        <span>More</span>
      </li>
    </ul>
  </nav>
);

export default FooterNav;
