let dvCoin = document.getElementById("coin");

dvCoin.innerHTML = "Tails";
dvCoin.style.backgroundColor = "#e01ee3";
dvCoin.style.height = "200px";
dvCoin.style.width = "200px";

function flipCoin() {
    let flip = Math.random();
    let side = "Heads";
    if(flip > 0.5) side = "Tails";
    dvCoin.innerHTML = side;

    if(side == "Tails") {
        dvCoin.style.backgroundColor = "#0e999c";
    } else {
        dvCoin.style.backgroundColor = "#e01ee3";
    }
}