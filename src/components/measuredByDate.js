import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import 'react-circular-progressbar/dist/styles.css';

const MeasuredByDate = ({
  name, measured, icon, unit, userId, measurementId,
}) => (
  <Link to={`/${userId}/progress/${measurementId}`} className="measured-by-date">
    <div className="measured-by-date-div">
      <div>
        <img src={icon} alt={name} className="measured-by-date-img-div" />
      </div>
      <div className="measured-by-date-info">
        <span className="measured-by-date-name">{name}</span>
        <span className="measured-by-date-measured">
          <big><b>{measured}</b></big>
          <small>{unit}</small>
        </span>
      </div>
    </div>
  </Link>
);

MeasuredByDate.defaultProps = {
  name: null,
  measured: null,
  unit: null,
  icon: null,
  measurementId: null,
  userId: null,
};

MeasuredByDate.propTypes = {
  name: PropTypes.string,
  measured: PropTypes.number,
  unit: PropTypes.string,
  icon: PropTypes.string,
  measurementId: PropTypes.number,
  userId: PropTypes.number,
};

export default MeasuredByDate;
