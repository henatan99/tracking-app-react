const FilterByMeasurementId = (measureds, measurementId) => {
  const filteredMeasureds = [];
  measureds.map((measured) => {
    if (measured.measurement_id === measurementId) {
      filteredMeasureds.push(measured);
    }
  });
  return filteredMeasureds;
};

const FilterAllByMeasurementId = (measureds, measurements) => {
  const filteredAllMeasureds = [];
  measurements.each((measurement) => {
    filteredAllMeasureds.push(FilterByMeasurementId(measureds, measurement.measurement_id));
  });
  return filteredAllMeasureds;
};

export default FilterAllByMeasurementId;
