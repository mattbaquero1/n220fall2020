let g;
let b;
let e;


function setup() {
  createCanvas(800, 800);
  g = random(255);
  b = random(255);
  e = random(255);
}

function draw() {
  background(127);
  strokeWeight(4);
  stroke(g, b, e);
  fill(g, b, e, 150);
  circle(400, 400, 200, 200);
}

function mousePressed() {
  let d = dist(mouseX, mouseY, 400, 400);
  if (d <= 400) {
    r = random(255);
    g = random(255);
    b = random(255);
  }
}