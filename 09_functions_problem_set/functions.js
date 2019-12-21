function isEven(num) {
  return num % 2 === 0;
}

function factorial(num) {
  var result = 1;
  for (var i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}

function kebabToSnake(str) {
  var newStr = str.replace("-", "_");
  return newStr
}
