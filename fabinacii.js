var fibonacci = function (result, length) {
  var number1 = result[0],
    number2 = result[1],
    sum,
    count = 2;
  while (count < length) {
    sum = number1 + number2;
    number1 = number2;
    number2 = sum;
    result.push(sum);
    count++;
  }
  return result;
};
console.log(fibonacci([0, 1], 9));

module.exports = fibonacci;
