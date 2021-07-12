import axios from 'axios';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createMeasurement } from '../redux/actions';

const MeasurementForm = ({ createMeasurement, user, measurements }) => {
  // const state = useSelector((state) => state);
  const { id } = useParams();
  // console.log(state.user);
  const [value, setValue] = useState(0);
  const [measurementId, setMeasurementId] = useState(1);
  const len = measurements.length;
  alert(len);

  function measurement() {
    axios({
      method: 'POST',
      url: `https://pure-tundra-23506.herokuapp.com/users/${id}/measureds`,
      data: {
        value,
        measurement_id: measurementId,
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

  const handleForward = (e) => {
    e.preventDefault();
    if (measurementId < len - 1) {
      setMeasurementId(measurementId + 1);
    } else {
      setMeasurementId(1);
    }
  };

  const handleBackward = (e) => {
    e.preventDefault();
    if (measurementId > 0) {
      setMeasurementId(measurementId - 1);
    } else {
      setMeasurementId(len - 1);
    }
  };

  return (
    <div className="measurement">
      <header className="measurement-header">
        <h3>{`${user.username}, Measure your ${measurements[measurementId].name}`}</h3>
      </header>
      <div className="measurement-form-wrapper">
        <form onSubmit={handleSubmit} className="measurement-form">
          <input type="text" onChange={(e) => setValue(e.target.value)} className="measurement-input" />
          <button type="submit" className="measurement-button">
            <span className="iconify" data-icon="bx:bxs-badge-check" data-inline="false" />
          </button>
        </form>
        <div className="measurement-selector">
          <button type="button" onClick={handleBackward}>Previous</button>
          <button type="button" onClick={handleForward}>Next</button>
        </div>
      </div>
      <p>{measurementId}</p>
    </div>
  );
};

MeasurementForm.defaultProps = {
  createMeasurement: null,
  user: null,
  measurements: [],
};

MeasurementForm.propTypes = {
  createMeasurement: PropTypes.func,
  user: PropTypes.shape({
    username: PropTypes.string,
  }),
  measurements: PropTypes.instanceOf(Array),
};

const mapDispatchToProps = (dispatch) => ({
  createMeasurement: (measured) => dispatch(createMeasurement(measured)),
});

export default connect(null, mapDispatchToProps)(MeasurementForm);
