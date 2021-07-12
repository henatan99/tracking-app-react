import axios from 'axios';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser, setMeasurements } from '../redux/actions';
import { saveState } from '../redux/services/localStorage';

const LoginForm = ({ loginUser }) => {
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  function login() {
    setIsLoading(true);

    const createUserRequest = axios({
      method: 'POST',
      url: 'https://pure-tundra-23506.herokuapp.com/users',
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
        setIsLoading(false);
        console.log(responses[0].data);
        console.log(responses[1].data);
        loginUser(responses[0].data);
        setMeasurements(responses[1].data);
        alert(responses[0].data.id);
        saveState(responses[0].data, 'user');
        saveState(responses[1].data, 'measurements');
        history.push(`${responses[0].data.id}/measurement`);
      // use/access the results
      })).catch((errors) => {
      // react on errors.
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
        <button type="submit" className="login-button">{!isLoading ? 'Login' : 'Loading...'}</button>
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
