let ball = {   
    x: 400, 
    y: 400,
    xspeed: 3,
    yspeed: 3
}
    
let mouseDirection = {
    x: 20,
    y: 20
}

function setup() {
    createCanvas(800,800);
}
function draw() {
    background(181, 180, 177);
    fill(0, 0, 0);
    
    mouseDirection.x = mouseX - ball.x;
    mouseDirection.y = mouseY - ball.y;
            ball.x += mouseDirection.x * .2;
            ball.y += mouseDirection.y * .2;
    if (distance(mouseX, mouseY, ball.x, ball.y) <= 7) {
        fill(255, 0, 0);            
    }
            circle(ball.x, ball.y, 30, 30);    
}
function distance(targetX, targetY, originX, originY) {
    let xdiff = targetX - originX;
    let ydiff = targetY - originY;
    let d = Math.sqrt((xdiff * xdiff) + (ydiff * ydiff));
    return d;
}