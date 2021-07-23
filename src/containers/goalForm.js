import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createGoal } from '../redux/actions';

const GoalForm = ({ createGoal, user, measurements }) => {
  const [quantity, setQuantity] = useState();
  const [dayOne, setDayOne] = useState();
  const [dayLast, setDayLast] = useState();
  const [measurementId, setMeasurementId] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  function settingGoal() {
    const token = localStorage.getItem('token');
    setIsLoading(true);
    axios({
      method: 'POST',
      url: `https://pure-tundra-23506.herokuapp.com/users/${user.id}/goals`,
      data: {
        quantity,
        day_one: dayOne,
        day_last: dayLast,
        measurement_id: measurementId,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        createGoal(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function formatDate(date) {
    return date.split('/').reverse().join('/');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(dayOne);
    settingGoal();
    setQuantity(null);
    setDayOne(null);
    setDayLast(null);
    // history.push(`/${user.id}/track/${measurementId}`);
  };

  return (
    <div className="goal">
      <h1 className="goal-title">Set Your Goals</h1>
      <form onSubmit={handleSubmit} className="goal-form">
        <div className="goal-form-inner-div">
          <h3 className="goal-form-label">Measurement</h3>
          <select onChange={(e) => setMeasurementId(e.target.value)} className="goal-form-select">
            {measurements.map((measurement, index) => (
              <option value={measurement.id} key={measurement.id || index} className="goal-form-option">
                {measurement.name}
              </option>
            ))}
          </select>
        </div>
        <div className="goal-form-inner-div">
          <h3 className="goal-form-input-title">Value</h3>
          <input type="text" onChange={(e) => setQuantity(e.target.value)} className="goal-form-input" />
        </div>
        <div className="goal-form-inner-div">
          <h3 className="goal-form-input-title">Dates</h3>
          <input
            type="date"
            onChange={(e) => setDayOne(formatDate(e.target.value))}
            className="goal-form-date-input"
            placeholder="Day One"
          />
          <input
            type="date"
            onChange={(e) => setDayLast(formatDate(e.target.value))}
            className="goal-form-date-input"
            placeholder="Day Last"
          />
        </div>
        <div className="goal-form-inner-div">
          <button type="submit" className="goal-form-btn">{!isLoading ? 'Submit' : 'Loading...'}</button>
        </div>
      </form>
    </div>
  );
};

GoalForm.defaultProps = {
  createGoal: null,
  user: null,
  measurements: [],
};

GoalForm.propTypes = {
  createGoal: PropTypes.func,
  user: PropTypes.shape({
    id: PropTypes.number,
    username: PropTypes.string,
  }),
  measurements: PropTypes.instanceOf(Array),
};

const mapDispatchToProps = (dispatch) => ({
  createGoal: (goal) => dispatch(createGoal(goal)),
});

export default connect(null, mapDispatchToProps)(GoalForm);
