function myForEach(arr, func) {
  for (var i = 0; i < arr.length; i++) {
    func(arr[i]);
  }
}

var colors = ["red", "pink", "blue", "violet", "yellow", "green"]

myForEach(colors, function(color) {
  console.log(color)
});

Array.prototype.myForEach = function(func) {
  for (var i = 0; i < this.length; i++) {
    func(this[i]);
  }
}
