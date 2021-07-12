import axios from 'axios';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import { createMeasurement } from '../redux/actions';

const MeasurementForm = ({ createMeasurement }) => {
  const state = useSelector((state) => state);
  console.log(state.user);
  const [value, setValue] = useState(0);
  // const [measurementId, setMeasurementId] = useState(0);

  function measurement() {
    axios({
      method: 'POST',
      url: `https://pure-tundra-23506.herokuapp.com/users/${state.user.id}/measureds`,
      data: {
        value,
        measurement_id: 1,
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
    <div className="measurement">
      <header className="measurement-header">
        <h3>{`${state.user.username}, Measure your`}</h3>
      </header>
      <div className="measurement-form-wrapper">
        <form onSubmit={handleSubmit} className="measurement-form">
          <input type="text" onChange={(e) => setValue(e.target.value)} className="measurement-input" />
          <button type="submit">Submit</button>
        </form>
      </div>
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
