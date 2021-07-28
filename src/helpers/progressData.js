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

export const progProps = (myFilteredMeasureds, goals, mid) => {
  const goal = goals.length > 0 ? goalsQuans(goals, parseInt(mid, 10)) : null;
  const baseline = myFilteredMeasureds ? myFilteredMeasureds[0].value : null;
  const current = myFilteredMeasureds[myFilteredMeasureds.length - 1].value;
  const score = (current - baseline) / (goal.quantity - baseline) > 1
    ? 1 : (current - baseline) / (goal.quantity - baseline);

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
  };
};

export default progProps;

// const measureds = [{ value: 46 }, { value: 70 }, { value: 90 }];
// const goals = [{ measurement_id: 46, name: 30 }, { quantity: 70, name: 40 }, { quantity: 90 }];
// const mid = 46;
// console.log(measuredVals(measureds));
// console.log(goalsQuans(goals, mid));
