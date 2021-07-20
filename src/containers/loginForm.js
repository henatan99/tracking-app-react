import axios from 'axios';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser, setMeasurements } from '../redux/actions';
import { saveState } from '../redux/services/localStorage';

const LoginForm = ({ loginUser }) => {
  const [userResp, setUserResp] = useState({});
  const [loggingIn, setLoggingIn] = useState(false);
  const [username, setUsername] = useState('');
  const history = useHistory();

  function login() {
    setLoggingIn(true);

    const createUserRequest = axios({
      method: 'POST',
      url: 'https://pure-tundra-23506.herokuapp.com/login',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      data: {
        username,
      },
    });

    const featchMeasurementsRequest = axios({
      method: 'GET',
      url: 'https://pure-tundra-23506.herokuapp.com/measurements',
    });

    axios.all([createUserRequest, featchMeasurementsRequest])
      .then(axios.spread((...responses) => {
        setLoggingIn(false);
        setUserResp(responses[0]);
        loginUser(responses[0].data);
        setMeasurements(responses[1].data);
        saveState(responses[0].data, 'user');
        saveState(responses[1].data, 'measurements');
        localStorage.setItem('token', responses[0].data.jwt);
        if (responses[0].data.success) {
          history.push(`${responses[0].data.user.id}/measurement`);
        }
      })).catch((errors) => {
        setLoggingIn(false);
        console.log(errors);
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.length) {
      login();
      setUsername('');
    }
  };

  return (
    <div className="login">
      <h1 className="login-header">Login Page</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="text"
          value={username}
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
          className="login-input"
        />
        <br />
        <button type="submit" className="login-button">{!loggingIn ? 'Login' : 'Logging in...'}</button>
        <span>
          {userResp.data && userResp.data.failure ? userResp.data.failure : ''}
        </span>
      </form>
    </div>
  );
};

LoginForm.defaultProps = {
  loginUser: null,
};

LoginForm.propTypes = {
  loginUser: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  loginUser: (user) => dispatch(loginUser(user)),
});

export default connect(null, mapDispatchToProps)(LoginForm);
