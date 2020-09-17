function setup() {
    createCanvas(600, 600)
}

function draw() {
    background(100)

    noFill();

    for( var i = 0; i < 50; i++){
        circle(300, 300, i * 5);
    }
}