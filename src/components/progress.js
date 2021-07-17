import React from 'React';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Progress = ( {
    day,
    progressVal,
    togo,
    baseline,
    goalValue,
    current,
    score,
    measurement,
    measureds,
} ) => (
    <div>
        <div style={{ width: 50, height: 50 }}>
            <CircularProgressbar value={progressVal} text={`${progressVal}%`} />
        </div>
        <div style={{ width: 50, height: 50 }}>
            <CircularProgressbar value={togo} text={`${progressVal}%`} />
        </div>
        <div>
            <span>{`Day ${day} progress to goal`}</span>
            <div></div>
            <div>
                <span>{`Starting: ${baseline}`}</span>
                <span>{`Goal: ${goalValue}`}</span>
            </div>
        </div>
        <div>
            <div>
                <h3>{`Current ${measurement.name}`}</h3>
                <span>{current}</span>
                <span></span>
            </div>
            <div>
                <h3>Score</h3>
                <span>{score}</span>
                <span></span>
            </div>
        </div>
    </div>
)

export default Progress;