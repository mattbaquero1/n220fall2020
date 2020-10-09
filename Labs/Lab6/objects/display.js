var myCircle = {
    r: 15,
    x: 200,
    y: 250,
    color: [156, 0, 250],
    update: function () {
        fill(this.color);
        this.x += 2;
        circle(this.x, this.y, this.r);
    }
}

function setup() {
    createCanvas(800, 800);

}


function draw() {
    myCircle.update();

    if(myCircle.x > 812) {
        myCircle.x = 0;
    }

}