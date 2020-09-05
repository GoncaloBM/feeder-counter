export function formatDate(date) {
  var d = new Date(date),
    month = d.getMonth() + 1,
    day = d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day];
}

export const formatNumber = (numberFromDb) => {
  let number = numberFromDb;
  if (number < 10) {
    number = "0" + number;
  }
  return number;
};
