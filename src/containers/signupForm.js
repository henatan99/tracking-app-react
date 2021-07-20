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

    const createUserRequest = axios({
      method: 'POST',
      url: 'https://pure-tundra-23506.herokuapp.com/users',
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
        setSigningUp(false);
        loginUser(responses[0].data);
        console.log(responses[0]);
        setMeasurements(responses[1].data);
        saveState(responses[0].data, 'user');
        saveState(responses[1].data, 'measurements');
        localStorage.setItem('token', responses[0].data.jwt);
        if (responses[0].data.user) {
          history.push(`${responses[0].data.user.id}/measurement`);
        }
      })).catch((errors) => {
        setSigningUp(false);
        setErrors(errors);
        console.log(errors);
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
          {errors ? 'Username Invalid or taken' : ''}
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
