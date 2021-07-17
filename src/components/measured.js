import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from 'react-router-dom';

const Measured = ({
  name, measured, date, diff, progressVal, user,
}) => (
  <Link to={`/${user.id}/measureds_by_date/${date}`} className="measured">
    <div style={{ width: 50, height: 50 }}>
      <CircularProgressbar value={progressVal} text={`${progressVal}%`} />
    </div>
    <div className="measured-left">
      <span className="measure-date">
        {' '}
        {date}
        {' '}
      </span>
      <div className="name-measured-wrapper">
        <span className="measure-name">
          {' '}
          {name}
          {' '}
        </span>
        <span className="measured">
          {' '}
          {measured}
          {' '}
        </span>
      </div>
    </div>
    <span className="diff">
      {diff >= 0 ? '+ ' : '- '}
      {diff}
      {' '}
    </span>
  </Link>
);

Measured.defaultProps = {
  name: null,
  measured: null,
  date: null,
  diff: null,
  progressVal: null,
  user: null,
};

Measured.propTypes = {
  name: PropTypes.string,
  measured: PropTypes.number,
  date: PropTypes.string,
  diff: PropTypes.number,
  progressVal: PropTypes.number,
  user: PropTypes.shape({
    id: PropTypes.number,
  }),
};

export default Measured;
