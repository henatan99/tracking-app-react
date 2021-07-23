import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const MeasuredsSelector = ({ measurements, classVar }) => {
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
    <div className={classVar}>
      <button type="button" onClick={handleBackward} className="dir-btn">
        <span className="iconify" data-icon="bx:bxs-left-arrow" data-inline="false" />
      </button>
      <button type="button" onClick={handleForward} className="dir-btn">
        <span className="iconify" data-icon="bx:bxs-right-arrow" data-inline="false" />
      </button>
    </div>
  );
};

MeasuredsSelector.defaultProps = {
  user: null,
  measurements: [],
  classVar: null,
};

MeasuredsSelector.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    username: PropTypes.string,
  }),
  measurements: PropTypes.instanceOf(Array),
  classVar: PropTypes.string,
};

export default MeasuredsSelector;
