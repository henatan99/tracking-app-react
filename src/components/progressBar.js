import React from 'react';
import PropTypes from 'prop-types';

const ProgressBar = ({ values }) => (
  <div className="progress-bar">
    {
            values.map((value, index) => (
              <span
                style={{
                  width: '10px',
                  padding: '3px',
                  // height: `${Math.max(values) <= 100 ? 100 : Math.max(values) + 10}px`,
                  height: '150px',
                  backgroundColor: '#ebeff2',
                  display: 'block',
                  position: 'relative',
                }}
                key={`bar${value}` || index}
              >
                <span
                  style={{
                    width: '10px',
                    height: `${value / 2}px`,
                    backgroundColor: '#abb6c0',
                    display: 'block',
                    position: 'absolute',
                    bottom: 0,
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
