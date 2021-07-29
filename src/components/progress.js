import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
// import ProgressBar from './progressBar';
// import { render } from "react-dom";
import { Chart } from 'react-google-charts';

const Progress = ({
  progressVal, togo, day, data, baseline, goalValue,
  measurementName, current, score, measurementUnit,
}) => (
  <div className="progress">
    <div className="progress-val-div">
      <div
        style={{
          width: 150, height: 150, position: 'relative', textAlign: 'center',
        }}
        className="progress-val"
      >
        <CircularProgressbar value={score} text={`${progressVal}`} styles="color: #95e393" />
        <span>{measurementName}</span>
      </div>
    </div>
    <div className="progress-togo-wrapper">
      <div style={{ width: 70, height: 70 }} className="progress-togo">
        <CircularProgressbar value={togo} text={`${togo}`} />
      </div>
      <span>{`${measurementUnit} togo`}</span>
    </div>
    <div className="progress-bar-wrapper">
      <span className="progress-to-goal">
        Day
        {' '}
        <big><b>{day}</b></big>
        {' '}
        progress to goal
      </span>
      <Chart
        // chartType="ScatterChart"
        // chartType="PieChart"
        chartType="ColumnChart"
        data={data}
        width="90%"
        height="100px"
        legendToggle
      />
      <div className="baseline-goal-div">
        <span>
          {`Starting ${measurementName}:`}
          {' '}
          <b>{baseline}</b>
        </span>
        <span>
          {`Goal ${measurementName}`}
          {' '}
          <b className="goal-value">{goalValue}</b>
        </span>
      </div>
    </div>
    <div className="variable-data">
      <div className="current">
        <h3>{`Current ${measurementName}`}</h3>
        <span className="progress-current">{current}</span>
      </div>
      <div className="score">
        <h3>Score</h3>
        <span className="progress-score">{score}</span>
        <span />
      </div>
    </div>
  </div>
);

Progress.defaultProps = {
  progressVal: 0,
  togo: 0,
  day: 0,
  // measureds: [],
  data: [],
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
  // measureds: PropTypes.instanceOf(Array),
  data: PropTypes.instanceOf(Array),
  baseline: PropTypes.number,
  goalValue: PropTypes.number,
  measurementName: PropTypes.string,
  current: PropTypes.number,
  score: PropTypes.number,
  measurementUnit: PropTypes.string,
};

export default Progress;
