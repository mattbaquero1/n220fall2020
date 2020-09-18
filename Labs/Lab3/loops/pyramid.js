const density = 50;

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(200);
    fill(255, 0, 0);
    stroke(255, 255, 255)

    let numRows = density / height;
    pyramid(numRows);
}

function pyramid() {
    for (var i = 1; i < 5; i++) {

        var y = i * density;

        for (let j = 0; j < i; j++) {
            fill(255, 0, 0);
            rect(width / 2 + j * density - (i - 1) * density, y, density, density);
        }
    }
}