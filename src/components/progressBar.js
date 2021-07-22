import React from 'react';
import PropTypes from 'prop-types';

const ProgressBar = ({ values }) => (
  <div className="progress-bar">
    {
            values.map((value, index) => (
              <span
                style={{
                  padding: '3px',
                  height: `${Math.max(values) + 10}px`,
                  backgroundColor: '#ebeff2',
                }}
                key={value || index}
              >
                <span
                  style={{
                    width: '10px',
                    height: `${value}px`,
                    backgroundColor: '#abb6c0',
                    display: 'block',
                  }}
                  key={value || index}
                />
              </span>
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
