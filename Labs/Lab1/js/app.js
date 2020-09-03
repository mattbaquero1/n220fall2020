function setup() {
    var x = 300;
    var y = 200;

    createCanvas(800,300);
    
    //face
    fill(255, 255, 0);
    circle(x, y, 100);
    

    //left eye
    fill(0);
    circle(260, 150, 15, 10);

    //right eye
    circle(340, 150, 15, 10);

    //mouth
    arc(300, 210, 100, 100, 0, radians(180), PIE);

}