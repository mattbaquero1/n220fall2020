var myBox = {
    r: 500,
    x: 300,
    y: 400,
    color: [236, 112, 99],
}

function setup() {
    createCanvas(2000, 2000);

}


function draw() {
    fill(myBox.color)
    square(myBox.x, myBox.y, myBox.r);
}