let size = [100,100,100];
let colors = ["red", "yellow", "green"];


function setup() {
  createCanvas(800, 800);
}

function draw() {
  
for (let i = 0; i < 3; i++) {
  fill(colors[i]);
    circle(i*200 + 100, 200, size[i], size[i]);
  
  }
}

