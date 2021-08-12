const dateList = (measureds) => {
  const unique = [...new Set(measureds.map((measured) => measured.created_at.substring(0, 10)))];
  return unique;
};

export default dateList;
