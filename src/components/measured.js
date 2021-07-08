import React from 'react';
import PropTypes from 'prop-types';

const Measured = ( {measured, date, diff} ) => {
    <div>
        <span className="progress-circle"></span>
        <div>
            <date> {date} </date>
            <span className="measured"> {measured} </span>
        </div>
        <span className="diff"> {diff} </span>
    </div>
}

Measured.defaultProps = {
    measured = null,
    date = null,
    diff = null,
}

Measured.propTypes = {
    measured: PropTypes.number,
    date: PropTypes.instanceOf(Date),
    diff: PropTypes.number,
}