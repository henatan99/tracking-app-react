import React from 'react';
import PropTypes from 'prop-types';
// import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const MeasuredByDate = ({
  name, measured, icon, unit,
}) => (
  <div className="measured-by-date">
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
);

MeasuredByDate.defaultProps = {
  name: null,
  measured: null,
  unit: null,
  //   progressVal: null,
  icon: null,
};

MeasuredByDate.propTypes = {
  name: PropTypes.string,
  measured: PropTypes.number,
  unit: PropTypes.string,
  icon: PropTypes.string,
//   progressVal: PropTypes.number,
};

export default MeasuredByDate;
