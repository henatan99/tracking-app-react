const months = {
  '01': 'Jan',
  '02': 'Feb',
  '03': 'Mar',
  '04': 'Apr',
  '05': 'May',
  '06': 'Jun',
  '07': 'Jul',
  '08': 'Aug',
  '09': 'Sep',
  10: 'Oct',
  11: 'Nov',
  12: 'Dec',
};

const split = (date) => date.substring(0, 10).split('-');

const formattedDate = (date) => {
  const copyDate = date;
  const splitted = split(copyDate);
  return `${months[splitted[1]]} ${splitted[2]} ${splitted[0]}`;
};

export default formattedDate;
