import axios from 'axios';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createMeasurement } from '../redux/actions';

const MeasurementForm = ({ createMeasurement, user, measurements }) => {
  const history = useHistory();
  const [value, setValue] = useState(0);
  const [measurementId, setMeasurementId] = useState(1);
  const [nums, setNums] = useState([1, 2]);
  const len = measurements.length;
  const state = useSelector((state) => state);

  function measurement() {
    const token = localStorage.getItem('token');
    axios({
      method: 'POST',
      url: `https://pure-tundra-23506.herokuapp.com/users/${user.id}/measureds`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
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
    if (state.goals.items.length < 1 || !state.goals.items.includes(
      (goal) => goal.measurement_id === measurementId,
    )
    ) {
      history.push(`/${user.id}/setGoal`);
    }
    measurement();
    setValue(0.00);
    history.push(`/${user.id}/track/${measurementId}`);
  };

  const handleForward = (e) => {
    e.preventDefault();
    if (measurementId < len - 1) {
      setMeasurementId(measurementId + 1);
    } else {
      setMeasurementId(1);
    }
    setNums([1, 2]);
  };

  const handleBackward = (e) => {
    e.preventDefault();
    if (measurementId > 1) {
      setMeasurementId(measurementId - 1);
    } else {
      setMeasurementId(len - 1);
    }
    setNums([2, 1]);
  };

  return (
    <div className="measurement">
      <header className="measurement-header">
        <h3>{`${user.username}, Measure your ${measurements[measurementId - 1].name}`}</h3>
        {/* <h3>{measurementId}</h3> */}
      </header>
      <div className="measurement-form-wrapper">
        <form onSubmit={handleSubmit} className="measurement-form">
          <input
            type="text"
            onChange={(e) => setValue(e.target.value)}
            className="measurement-input"
            placeholder="0.00"
          />
          <button type="submit" className="measurement-button">
            <span className="iconify" data-icon="bx:bxs-badge-check" data-inline="false" />
          </button>
        </form>
        <div className="measurement-selector">
          <button className={`measurement-selector-btn${nums[0]}`} type="button" onClick={handleBackward}>Previous</button>
          <button className={`measurement-selector-btn${nums[1]}`} type="button" onClick={handleForward}>Next</button>
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
    id: PropTypes.number,
    username: PropTypes.string,
  }),
  measurements: PropTypes.instanceOf(Array),
};

const mapDispatchToProps = (dispatch) => ({
  createMeasurement: (measured) => dispatch(createMeasurement(measured)),
});

export default connect(null, mapDispatchToProps)(MeasurementForm);
