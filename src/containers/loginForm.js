import axios from 'axios';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import { loginUser, setMeasurements } from '../redux/actions';
import { saveState } from '../redux/services/localStorage';

const LoginForm = ({ loginUser, setMeasurements }) => {
  const [loggingIn, setLoggingIn] = useState(false);
  const [username, setUsername] = useState('');
  const [errors, setErrors] = useState(null);
  const state = useSelector((state) => state);
  const history = useHistory();

  function login() {
    setLoggingIn(true);

    axios({
      method: 'POST',
      url: 'https://pure-tundra-23506.herokuapp.com/login',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      data: {
        username,
      },
    }).then((response) => {
      setLoggingIn(false);
      loginUser(response.data.user);
      setMeasurements(response.data.measurements);
      saveState(response.data.user, 'user');
      saveState(response.data.measurements, 'measurements');
      localStorage.setItem('token', response.data.jwt);
      if (response.data.success && response.data.measurements) {
        console.log(`from login: ${state.measurements}`);
        history.push(`${response.data.user.id}/measurement`);
      }
    }).catch((errors) => {
      setLoggingIn(false);
      setErrors(errors);
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
        <button type="submit" className="login-button">
          {!loggingIn ? 'Login' : 'Logging in...'}
        </button>
        <span>{errors ? 'Username Invalid' : ''}</span>
      </form>
    </div>
  );
};

LoginForm.defaultProps = {
  loginUser: null,
  setMeasurements: null,
};

LoginForm.propTypes = {
  loginUser: PropTypes.func,
  setMeasurements: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  loginUser: (user) => dispatch(loginUser(user)),
  setMeasurements: (measurements) => dispatch(setMeasurements(measurements)),
});

export default connect(null, mapDispatchToProps)(LoginForm);
