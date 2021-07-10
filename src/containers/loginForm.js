import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
// import { useHistory } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { loginUser } from '../redux/actions/user';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState({});
  const dispatch = useDispatch();

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
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username);
  };

  useEffect(() => {
    dispatch(loginUser(user));
  }, []);

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

const mapDispatchToProps = (dispatch) => ({
  loginUser: (user) => dispatch(loginUser(user)),
});

export default connect(null, mapDispatchToProps)(LoginForm);
