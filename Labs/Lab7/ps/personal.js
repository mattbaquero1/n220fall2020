var myCircle = {
    r: 50,
    x: 200,
    y: 200,
    color: [156, 0, 250],
    update: function () {
        fill(this.color);
        circle(this.x, this.y, this.r);

        if (keyIsDown(RIGHT_ARROW)) {
            this.x += 2;
        }

        if (keyIsDown(LEFT_ARROW)) {
            this.x -= 2;
        }

        if (keyIsDown(DOWN_ARROW)) {
            this.y += 2;
        }

        if (keyIsDown(UP_ARROW)) {
            this.y -= 2;
        }
    }

}



function setup() {
    createCanvas(400, 400);
}


function draw() {
    background(220);
    myCircle.update();


    if (myCircle.x >= 400) {
        myCircle.x = 0;
    }
    if (myCircle.y >= 400) {
        myCircle.y = 0;
    }

}

