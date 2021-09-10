export const getOccurrence = (array, value) => {
  var count = 0;
  array.forEach((v) => v.id === value && count++);
  return count;
};
