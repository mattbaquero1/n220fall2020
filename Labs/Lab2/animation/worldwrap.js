

let xPos = 0;
let yPos = 300;
let xSpeed = 5;
let ySpeed = 0;

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(255, 255, 255);
    xPos = xPos + xSpeed;
    yPos = yPos + ySpeed;

    fill(255, 192, 203);

    if(xPos > 800) {
        xPos = 0;
    }
    circle(xPos, yPos, 30);
}


  
  
  
  