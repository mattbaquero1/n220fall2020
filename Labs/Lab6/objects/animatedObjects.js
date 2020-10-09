let squares = [
    {x: 100, y: 20, r: 45},
    {x: 160, y: 50, r: 75},
    {x: 150, y: 200, r: 35},
    {x: 300, y: 250, r: 110},
];


function setup() {
    createCanvas(1000, 500)
    fill(255, 0, 210)
}

function draw() {
    for(var i = 0; i < squares.length; i++) {
        let currentSquare = squares[i];
        square(squares[i].x, squares[i].y, squares[i].r)
        currentSquare.y += 1;

        if(currentSquare.y > 500) {
            currentSquare.y = 0;
            currentSquare.x = Math.random() * 400;
            fill(Math.random() * 300);
        }
    }
}