const maxVal = (measureds) => {
  const unique = [...new Set(measureds.map((measured) => measured.value))];
  return Math.max(...unique);
};

const measuredVals = (measureds) => {
  const result = measureds.map((a) => a.value);
  return result;
};

export const goalsQuans = (goals, mid) => goals.filter((goal) => goal.measurement_id === mid);

export const progProps = (myFilteredMeasureds, filteredGoals) => {
  const goal = filteredGoals ? filteredGoals[filteredGoals.length - 1] : null;
  console.log(`helper goal: ${goal}`);
  const baseline = myFilteredMeasureds ? myFilteredMeasureds[0].value : null;
  const current = myFilteredMeasureds[myFilteredMeasureds.length - 1].value;
  const scoreScalar = goal ? (current - goal.quantity) / (baseline - goal.quantity) : null;
  const score = baseline > current ? scoreScalar : (1 / scoreScalar);

  return {
    progressVal: current - baseline,
    togo: current && goal ? current - goal.quantity : null,
    day: myFilteredMeasureds.length,
    measureds: [...measuredVals(myFilteredMeasureds)],
    baseline,
    goalValue: goal && goal.quantity ? goal.quantity : null,
    measurementName: null,
    current,
    score: goal ? score : null,
    measurementUnit: null,
    maxValue: maxVal(myFilteredMeasureds),
  };
};

// export default progProps;

// const measureds = [{ value: 46 }, { value: 70 }, { value: 90 }];
// const goals = [{ quantity: 46 }, { quantity: 70 }, { quantity: 90 }];

// console.log(measuredVals(measureds));
// console.log(goalsQuans(goals, 70));
