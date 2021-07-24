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
  const baseline = myFilteredMeasureds[0].value;
  const current = myFilteredMeasureds[myFilteredMeasureds.length - 1].value;

  return {
    progressVal: goal ? (current - goal) / (baseline - goal) : (current - baseline) / baseline,
    togo: current - goal,
    day: myFilteredMeasureds[myFilteredMeasureds.length - 1].created_at,
    measureds: measuredVals(myFilteredMeasureds),
    baseline,
    goalValue: goal ? goal.quantity : 0,
    measurementName: null,
    current,
    score: goal ? (current - goal) / (baseline - goal) : (current - baseline) / baseline,
    measurementUnit: null,
    maxValue: maxVal(myFilteredMeasureds),
  };
};

export default progProps;
