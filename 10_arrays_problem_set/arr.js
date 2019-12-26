function printReverse(arr) {
  var arr2 = arr.reverse();
  arr2.forEach(function(el) {
    console.log(el);
  })
}

printReverse([1, 2, 3]);

function printReverse2(arr) {
  for (var i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

printReverse2(["a", "b", "c"]);

function isUniform(arr) {
  var first = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (first !== arr[i]) {
      return false
    }
  }
  return true;
}

function sumArray(arr) {
  var sum = 0
  arr.forEach(function(num) {
    sum += num
  });
  return sum;
}

function max(arr) {
  var max = arr[0]
  arr.forEach(function(num) {
    if (num > max) {
      max = num
    }
  })
  return max
}
