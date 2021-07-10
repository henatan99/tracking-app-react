import axios from 'axios';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../redux/actions/user';

const LoginForm = ({ loginUser }) => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState({});
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
        setUser(response.data);
        alert(response.data.id);
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
    login(username);
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1>Login Page</h1>
        <input
          type="text"
          value={username}
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <button type="submit">Login</button>
        <h2>{user.id || 'sorry'}</h2>
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
