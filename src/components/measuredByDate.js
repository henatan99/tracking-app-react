import React from 'react';
import PropTypes from 'prop-types';
// import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const MeasuredByDate = ({
  name, measured, icon, unit,
}) => (
  <div className="measured-by-date">
    <img src={icon} alt={name} className="measured-by-date-img" />
    <div className="measured-by-date-info">
      <span>{name}</span>
      <span>
        {measured}
        {unit}
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
