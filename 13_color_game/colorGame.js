var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var pickedColorDisplay = document.querySelector("#pickedColorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");

pickedColorDisplay.textContent = pickedColor;

for (i = 0; i < colors.length; i++) {
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener("click", function() {
    var clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!";
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
    } else {
      messageDisplay.textContent = "Try again!";
      this.style.backgroundColor = "#232323";
    }
  });
}

function changeColors(color) {
  for (i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * 5 + 1);
  return colors[random];
}

function generateRandomColors(num) {
  var arr = [];
  for (i = 0; i < num; i++) {
    arr.push(generateColor());
  }
  return arr;
}

function generateColor() {
  var r = Math.floor(Math.random() * 256)
  var g = Math.floor(Math.random() * 256)
  var b = Math.floor(Math.random() * 256)

  var color = "rgb(" + r + ", " + g + ", " + b + ")";
  return color;
}
