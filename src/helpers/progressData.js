const maxVal = (measureds) => {
  const unique = [...new Set(measureds.map((measured) => measured.value))];
  return Math.max(...unique);
};

const measuredVals = (measureds) => {
  const result = measureds.map((a) => a.value);
  return result;
};

const progProps = (myFilteredMeasureds, goals, mid) => {
  const filteredGoals = goals.length > 0 ? goals.map((goal) => goal.measurement_id === mid) : null;
  const goal = filteredGoals ? filteredGoals[filteredGoals.length - 1] : null;
  const baseline = myFilteredMeasureds ? myFilteredMeasureds[0].value : null;
  const current = myFilteredMeasureds[myFilteredMeasureds.length - 1].value;
  const scoreScalar = (current - goal) / (baseline - goal);
  const score = baseline > current ? scoreScalar : (1 / scoreScalar);

  return {
    progressVal: current - baseline,
    togo: current && goal ? current - goal : null,
    day: myFilteredMeasureds.length,
    measureds: [...measuredVals(myFilteredMeasureds)],
    baseline,
    goalValue: goal ? goal.quantity : null,
    measurementName: null,
    current,
    score: goal ? score : null,
    measurementUnit: null,
    maxValue: maxVal(myFilteredMeasureds),
  };
};

export default progProps;

// const measureds = [{value: 46}, {value: 70}, {value: 90}];
// console.log(measuredVals(measureds));
