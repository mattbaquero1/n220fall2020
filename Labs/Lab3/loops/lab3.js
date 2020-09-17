
let xPos = 400;
let yPos = 300;
let size = 1;

function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(0, 0, 255);
    circle(xPos, yPos, size);

    size = size + 1;

    if(size > 200){
        size = 1;
    }
}

