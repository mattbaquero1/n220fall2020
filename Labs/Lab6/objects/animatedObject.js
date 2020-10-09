var myCircle = {
    r: 50,
    x: 400,
    y: 400,
    color: [156, 0, 250],
    update: function () {
        fill(this.color);
        circle(this.x, this.y, this.r);
    }
}

function setup() {
    createCanvas(800, 800);

}


function draw() {
    myCircle.update();
    myCircle.x += 1;

    if(myCircle.x > 812) {
        myCircle.x = 0;
    }
    

}