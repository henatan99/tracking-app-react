import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { logoutUser } from '../redux/actions';

const More = ({ user }) => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('measurements');
    logoutUser();
  };

  return (
    <div>
      <h1>{user.username}</h1>
      <ul>
        <li>
          <Link to={`/${user.id}/setgoal`}>Your Goal</Link>
        </li>
        <li>
          <Link to="/" onClick={handleLogout}>Log Out</Link>
        </li>
      </ul>
    </div>
  );
};

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
