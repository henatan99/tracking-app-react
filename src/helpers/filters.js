export const FilterByDate = (measureds, date) => {
  const filteredMeasureds = [];
  measureds.forEach((measured) => {
    if (measured.created_at.substring(0, 10) === date.substring(0, 10)) {
      filteredMeasureds.push(measured);
    }
  });
  return filteredMeasureds;
};

export const FilterByMeasurementId = (measureds, measurementId) => {
  const filteredMeasureds = [];
  measureds.forEach((measured) => {
    if (measured.measurement_id === measurementId) {
      filteredMeasureds.push(measured);
    }
  });
  return filteredMeasureds;
};
