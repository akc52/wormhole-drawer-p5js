function setup() {
 createCanvas(480, 480);
  //frameRate(10)
}

function draw() {
  if(mouseIsPressed) {
    var c = color(randomColor(20, 50));
    fill(c)
  } else {
    var c = color(randomColor(100, 50));
    fill(c);
  }
  var x1 = 240;//mouseX;
  var y1 = 240;//mouseY;
  var x2 = mouseY + 40;
  var y2 = mouseY + 80;
  var x3 = mouseX - 40;
  var y3 = mouseY + 80;
  
  noStroke();
  triangle(x1, y1, x2, y2, x3, y3);
}

function randomColor(s, l) {
   return "hsla(" + randomNum(360, 1) + ", " + s + "%, "+ l +"%, 0.2)"
}
function randomNum(max, min) {
  return Math.floor(max * Math.random()) + min
}