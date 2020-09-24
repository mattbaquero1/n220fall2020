
let colors = ["#FF000", "#D2691E", "#F3E5AB"];

function setup() {
    createCanvas(600, 600);
    background(192, 192, 192);

    for (var i = 0; i < colors.length; i++) {
        fill(colors[i]);
        rect(75 * i, 100, 75, 75);
    }
}