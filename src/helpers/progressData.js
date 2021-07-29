const maxVal = (measureds) => {
  const unique = [...new Set(measureds.map((measured) => measured.value))];
  return Math.max(...unique);
};

const measuredVals = (measureds) => {
  const result = measureds.map((a) => a.value);
  return result;
};

export const goalsQuans = (goals, mid) => {
  let myGoal;
  goals.forEach((goal) => {
    if (goal.measurement_id === mid) {
      myGoal = goal;
    }
  });
  return myGoal;
};

const getData = (measureds) => {
  const result = [['days', 'measureds', { role: 'style' }]];
  measureds.forEach((measured, index) => {
    result.push([`${index + 1}`, measured, 'color: #e5e4e2']);
  });
  return result;
};

export const progProps = (myFilteredMeasureds, goals, mid) => {
  const goal = goals && goals.length > 0 ? goalsQuans(goals, parseInt(mid, 10)) : null;
  const baseline = myFilteredMeasureds && myFilteredMeasureds.length > 0
    ? myFilteredMeasureds[0].value : null;
  const current = myFilteredMeasureds && myFilteredMeasureds.length > 0
    ? myFilteredMeasureds[myFilteredMeasureds.length - 1].value : null;
  const score = goal && goal.length > 0 ? (current - baseline) / (goal.quantity - baseline) : null;

  return {
    progressVal: current - baseline,
    togo: current && goal ? current - goal.quantity : null,
    day: myFilteredMeasureds.length,
    measureds: [...measuredVals(myFilteredMeasureds)],
    baseline,
    goalValue: goal && goal.quantity ? goal.quantity : null,
    measurementName: null,
    current,
    score: score < 1 ? 0 : score,
    measurementUnit: null,
    maxValue: maxVal(myFilteredMeasureds),
    getData: getData([...measuredVals(myFilteredMeasureds)]),
  };
};

export default progProps;
