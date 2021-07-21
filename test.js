const a = [{ user_id: 1, measurement_id: 3 }, { user_id: 1, measurement_id: 2 },
  { user_id: 1, measurement_id: 3 }, { user_id: 1, measurement_id: 3 }];

const apluck = _.pluck(a, 'measuremnt_id');

console.log(apluck);
