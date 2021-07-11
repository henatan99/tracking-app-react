import axios from 'axios';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../redux/actions';

const LoginForm = ({ loginUser }) => {
  const [username, setUsername] = useState('');
  const history = useHistory();

  function login() {
    axios({
      method: 'POST',
      url: 'https://pure-tundra-23506.herokuapp.com/users',
      data: {
        username,
      },
    })
      .then((response) => {
        console.log(response.data);
        loginUser(response.data);
        alert(response.data.id);
        history.push(`/measurement/${response.data.id}`);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
    setUsername('');
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
        <button type="submit" className="login-button">Login</button>
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
