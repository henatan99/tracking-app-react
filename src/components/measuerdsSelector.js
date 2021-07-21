import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const MeasuredsSelector = ({ measurements }) => {
  const [measurementId, setMeasurementId] = useState(1);
  const len = measurements.length;
  const history = useHistory();

  const handleForward = (e) => {
    e.preventDefault();
    if (measurementId < len - 1) {
      setMeasurementId(measurementId + 1);
    } else {
      setMeasurementId(1);
    }
    history.push(`${measurementId}`);
  };

  const handleBackward = (e) => {
    e.preventDefault();
    if (measurementId > 1) {
      setMeasurementId(measurementId - 1);
    } else {
      setMeasurementId(len - 1);
    }
    history.push(`${measurementId}`);
  };

  return (
    <div className="measureds-selector">
      <button type="button" onClick={handleBackward}>{'<'}</button>
      <button type="button" onClick={handleForward}>{'>'}</button>
    </div>
  );
};

MeasuredsSelector.defaultProps = {
  user: null,
  measurements: [],
};

MeasuredsSelector.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    username: PropTypes.string,
  }),
  measurements: PropTypes.instanceOf(Array),
};

export default MeasuredsSelector;
