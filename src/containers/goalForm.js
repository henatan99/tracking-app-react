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
    <div>
      <h1>Set Your Goals</h1>
      <form onSubmit={handleSubmit}>
        <select onChange={(e) => setMeasurementId(e.target.value)}>
          {measurements.map((measurement, index) => (
            <option value={measurement.id} key={measurement.id || index}>
              {measurement.name}
            </option>
          ))}
        </select>
        <input type="text" onChange={(e) => setQuantity(e.target.value)} />
        <input type="date" onChange={(e) => setDayOne(formatDate(e.target.value))} />
        <input type="date" onChange={(e) => setDayLast(formatDate(e.target.value))} />
        <button type="submit">{!isLoading ? 'Submit' : 'Loading...'}</button>
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
