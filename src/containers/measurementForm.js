import axios from 'axios';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import { createMeasurement } from '../redux/actions';

const MeasurementForm = ({ createMeasurement }) => {
  const state = useSelector((state) => state);
  console.log(state.user);
  const [value, setValue] = useState(0);

  function measurement() {
    axios({
      method: 'POST',
      url: `https://pure-tundra-23506.herokuapp.com/users/${state.user.id}/measureds`,
      data: {
        value,
      },
    })
      .then((response) => {
        createMeasurement(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    measurement();
    setValue(0.00);
  };

  return (
    <div>
      <h1>User Detail</h1>
      <span>{state.user.id || 'sorry'}</span>
      <span>{state.user.username}</span>
      <span>{state.user.created_at}</span>
      <h2>Please Enter Measurement</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setValue(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

MeasurementForm.defaultProps = {
  createMeasurement: null,
};

MeasurementForm.propTypes = {
  createMeasurement: PropTypes.func,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  createMeasurement: (measured) => dispatch(createMeasurement(measured)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MeasurementForm);
