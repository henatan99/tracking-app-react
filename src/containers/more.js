import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const More = ({ user }) => (
  <div>
    <h1>{user.username}</h1>
    <ul>
      <li>
        <Link to={`/${user.id}/setgoal`}>Your Goal</Link>
      </li>
      <li>
        <Link to="/logout">Log Out</Link>
      </li>
    </ul>
  </div>
);

More.defaultProps = {
  user: null,
};

More.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    username: PropTypes.string,
  }),
};

export default More;
