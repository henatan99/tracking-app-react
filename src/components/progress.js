import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ProgressBar from './progressBar';

const Progress = ({
  progressVal, togo, day, measureds, baseline, goalValue,
  measurementName, current, score, measurementUnit,
}) => (
  <div className="progress">
    <div style={{ width: 100, height: 100 }} className="progress-val">
      <CircularProgressbar value={progressVal} text={`${progressVal}%`} />
    </div>
    <hr
      style={{
        color: '#000000',
        backgroundColor: '#000000',
        height: 0.5,
        borderColor: '#000000',
      }}
    />
    <div className="progress-togo-wrapper">
      <div style={{ width: 50, height: 50 }} className="progress-togo">
        <CircularProgressbar value={togo} text={`${togo}%`} />
      </div>
      <span>{`${measurementUnit} togo`}</span>
    </div>
    <div>
      <span>{`Day ${day} progress to goal`}</span>
      <ProgressBar values={measureds} />
      <div>
        <span>{`Starting: ${baseline}`}</span>
        <span>{`Goal: ${goalValue}`}</span>
      </div>
    </div>
    <div>
      <div>
        <h3>{`Current ${measurementName}`}</h3>
        <span>{current}</span>
      </div>
      <div>
        <h3>Score</h3>
        <span>{score}</span>
        <span />
      </div>
    </div>
  </div>
);

Progress.defaultProps = {
  progressVal: 0,
  togo: 0,
  day: 0,
  measureds: [],
  baseline: 0,
  goalValue: 0,
  measurementName: '',
  current: 0,
  score: 0,
  measurementUnit: '',
};

Progress.propTypes = {
  progressVal: PropTypes.number,
  togo: PropTypes.number,
  day: PropTypes.number,
  measureds: PropTypes.instanceOf(Array),
  baseline: PropTypes.number,
  goalValue: PropTypes.number,
  measurementName: PropTypes.string,
  current: PropTypes.number,
  score: PropTypes.number,
  measurementUnit: PropTypes.string,
};

export default Progress;
