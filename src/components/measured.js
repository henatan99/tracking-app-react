import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from 'react-router-dom';

const Measured = ({
  name, measured, date, fDate, diff, progressVal, userId, unit,
}) => (
  <Link to={`/${userId}/measureds_by_date/${date}`} className="measured-wrapper">
    <div className="measured-left">
      <div style={{ width: 40, height: 40 }} className="measured-progress">
        <CircularProgressbar value={progressVal} />
      </div>
      <div className="measured-info">
        <span className="measure-date">
          {' '}
          {fDate}
          {' '}
        </span>
        <div className="name-measured-wrapper">
          <span className="measure-name">
            {' '}
            {name}
            {': '}
          </span>
          <span className="measured">
            {' '}
            {measured}
            {' '}
          </span>
        </div>
      </div>
    </div>
    <span className="diff">
      <big className="diff-val">{diff >= 0 ? '+ ' : ''}</big>
      <big className="diff-val">{diff}</big>
      {' '}
      <small>{unit}</small>
    </span>
  </Link>
);

Measured.defaultProps = {
  name: null,
  measured: null,
  date: null,
  fDate: null,
  diff: null,
  progressVal: null,
  userId: null,
  unit: '',
};

Measured.propTypes = {
  name: PropTypes.string,
  measured: PropTypes.number,
  date: PropTypes.string,
  fDate: PropTypes.string,
  diff: PropTypes.number,
  progressVal: PropTypes.number,
  userId: PropTypes.number,
  unit: PropTypes.string,
};

export default Measured;
