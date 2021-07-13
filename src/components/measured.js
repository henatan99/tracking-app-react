import React from 'react';
import PropTypes from 'prop-types';

const Measured = ({
  name, measured, date, diff,
}) => (
  <div>
    <span className="progress-circle" />
    <div>
      <date>
        {' '}
        {name}
        {' '}
      </date>
      <date>
        {' '}
        {date}
        {' '}
      </date>
      <span className="measured">
        {' '}
        {measured}
        {' '}
      </span>
    </div>
    <span className="diff">
      {' '}
      {diff}
      {' '}
    </span>
  </div>
);

Measured.defaultProps = {
  name: null,
  measured: null,
  date: null,
  diff: null,
};

Measured.propTypes = {
  name: PropTypes.string,
  measured: PropTypes.number,
  date: PropTypes.instanceOf(Date),
  diff: PropTypes.number,
};

export default Measured;
