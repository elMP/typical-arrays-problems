
exports.min = function min(array) {
  if (!array || array.length === 0)
    return 0;
  let min = array[0];
  array.forEach(item => {
    if (item < min)
      min = item;
  })
  return min;
}

exports.max = function max(array) {
  if (!array || array.length === 0)
    return 0;
  let max = array[0];
  array.forEach(item => {
    if (item > max)
      max = item;
  })
  return max;
}

exports.avg = function avg(array) {
  if (!array || array.length === 0)
    return 0;
  let sum = 0;
  array.forEach(item => {
    sum += item;
  })
  return sum / array.length;
}
