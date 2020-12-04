let red = document.getElementById("redDiv");
red.addEventListener("click", redClicked);

function redClicked(event) {
    event.target.style.background = "#FF0000";
}

let green = document.getElementById("greenDiv");
green.addEventListener("click", greenClicked);

function greenClicked(event) {
    event.target.style.background = "#00FF00";
}

let blue = document.getElementById("blueDiv");
blue.addEventListener("click", blueClicked);

function blueClicked(event) {
    event.target.style.background = "#0000FF";
}