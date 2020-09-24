let dObj = {x:300, y:0, velocityY:5}
let gravity = 2;

function setup() {
    createCanvas(600, 600);
}
function draw() {
    background(192, 192, 192);

    circle(dObj.x, dObj.y, 20);
    fill(0)
    dObj.y += dObj.velocityY;
    dObj.velocityY += gravity;
}