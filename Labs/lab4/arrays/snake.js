let lastPosition = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let Y = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(192, 192, 192);
    lastPosition.push(mouseX);
    lastPosition.shift();
    Y.push(mouseY);
    Y.shift();

    for(var i = 0; i < lastPosition.length; i++) {
        circle(lastPosition[i], Y[i], 50)
        fill(0, 0, 255);
    }
}