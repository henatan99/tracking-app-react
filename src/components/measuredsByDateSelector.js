import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const MeasuredsByDateSelector = ({ dates }) => {
  const [dateIndex, setDateIndex] = useState(1);
  const len = dates.length;
  const history = useHistory();

  const handleForward = (e) => {
    e.preventDefault();
    if (dateIndex < len - 1) {
      setDateIndex(dateIndex + 1);
    } else {
      setDateIndex(0);
    }
    history.push(`${dates[dateIndex]}`);
  };

  const handleBackward = (e) => {
    e.preventDefault();
    if (dateIndex > 0) {
      setDateIndex(dateIndex - 1);
    } else {
      setDateIndex(len - 1);
    }
    history.push(`${dates[dateIndex]}`);
  };

  return (
    <div className="measureds-date-selector">
      <button type="button" onClick={handleBackward} className="dir-btn">
        <span className="iconify" data-icon="bx:bxs-left-arrow" data-inline="false" />
      </button>
      <button type="button" onClick={handleForward} className="dir-btn">
        <span className="iconify" data-icon="bx:bxs-right-arrow" data-inline="false" />
      </button>
    </div>
  );
};

MeasuredsByDateSelector.defaultProps = {
  dates: [],
};

MeasuredsByDateSelector.propTypes = {
  dates: PropTypes.instanceOf(Array),
};

export default MeasuredsByDateSelector;
