import axios from 'axios';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser, setMeasurements } from '../redux/actions';
import { saveState } from '../redux/services/localStorage';

const SignupForm = ({ loginUser }) => {
  const [username, setUsername] = useState('');
  const [signingUp, setSigningUp] = useState(false);
  const [errors, setErrors] = useState(null);
  const history = useHistory();

  function signup() {
    setSigningUp(true);

    axios({
      method: 'POST',
      url: 'https://pure-tundra-23506.herokuapp.com/users',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      data: {
        username,
      },
    }).then((response) => {
      setSigningUp(false);
      loginUser(response.data.user);
      setMeasurements(response.data.measurements);
      saveState(response.data.user, 'user');
      saveState(response.data.measurements, 'measurements');
      localStorage.setItem('token', response.data.jwt);
      if (response.data.success && response.data.measurements) {
        history.push(`${response.data.user.id}/measurement`);
      }
    }).catch((errors) => {
      setSigningUp(false);
      setErrors(JSON.stringify(errors));
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.length) {
      signup();
      setUsername('');
    }
  };

  return (
    <div className="login">
      <h1 className="login-header">SignUp Page</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="text"
          value={username}
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
          className="login-input"
        />
        <br />
        <button type="submit" className="login-button">{!signingUp ? 'Signup' : 'Signing Up...'}</button>
        <span>
          {errors && JSON.parse(errors).message === 'Network Error' ? JSON.parse(errors).message : ''}
          {errors && JSON.parse(errors).message !== 'Network Error' ? 'Username invalid or taken!' : ''}
        </span>
      </form>
    </div>
  );
};

SignupForm.defaultProps = {
  loginUser: null,
};

SignupForm.propTypes = {
  loginUser: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  loginUser: (user) => dispatch(loginUser(user)),
});

export default connect(null, mapDispatchToProps)(SignupForm);
