import React from 'react';
import PropTypes from 'prop-types';

const ProgressBar = ({ values }) => (
  <div className="progress-bar">
    {
            values.map((value, index) => (
              <span
                style={{
                  width: '30px',
                  height: `${value}px`,
                  backgroundColor: 'black',
                  display: 'block',
                }}
                key={value || index}
              />
            ))
        }
  </div>
);

ProgressBar.defaultProps = {
  values: [],
};

ProgressBar.propTypes = {
  values: PropTypes.instanceOf(Array),
};

export default ProgressBar;
