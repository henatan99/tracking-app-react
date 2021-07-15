const date = '2021-07-13T21:39:04.322Z';
const date1 = '2021-07-15T21:39:04.322Z';
dateNew = new Date(date);
dateNew1 = new Date(date1);
console.log((dateNew1 - dateNew) / (24 * 60 * 60 * 1000));
