import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const MeasuredByDate = ({
  name, measured, icon, unit, measurementId,
}) => (
  <Link to={`/${measurementId}/progress`} className="measured-by-date">
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
  //   progressVal: null,
  icon: null,
  measurementId: null,
};

MeasuredByDate.propTypes = {
  name: PropTypes.string,
  measured: PropTypes.number,
  unit: PropTypes.string,
  icon: PropTypes.string,
  //   progressVal: PropTypes.number,
  measurementId: PropTypes.number,
};

export default MeasuredByDate;
