import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { setValues } from '../redux/actions';

const ProgressBar = () => {
  const state = useSelector((state) => state);

  return (

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
};

// ProgressBar.defaultProps = {
//   values: [],
// };

// ProgressBar.propTypes = {
//   values: PropTypes.instanceOf(Array),
// };

// export default ProgressBar;
const mapStateToProps = (state) => ({
  values: state.values,
});

export default connect(mapStateToProps)(ProgressBar);
