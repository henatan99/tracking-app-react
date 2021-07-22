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
    <div className="more">
      <div className="user-profile">
        <span className="user-img">
          <span className="user-img-head" />
          <span className="user-img-body" />
        </span>
        <h1 className="username">{user.username}</h1>
      </div>
      <ul className="more-ul">
        <Link to={`/${user.id}/setgoal`} className="more-link">
          <li className="more-li">
            <span className="iconify" data-icon="flat-ui:goal" data-inline="false" />
            <h3 className="more-li-title">Your Goal</h3>
          </li>
        </Link>
        <Link to="/" onClick={handleLogout} className="more-link">
          <li className="more-li">
            <span className="iconify" data-icon="websymbol:logout" data-inline="false" />
            <h3 className="more-li-title">Log Out</h3>
          </li>
        </Link>
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
