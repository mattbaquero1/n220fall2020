let txtTip = document.getElementById("txtTip");
let dvResult = document.getElementById("dvResult");
let dvTip = document.getElementById("dvTip");
let dvTotal = document.getElementById("dvTotal");
dvResult.innerHTML = "Tip calculator"


function calcTip() {
    let tipAmount = Number(txtTip.value) * 0.1;
    let totalAmount = Number(txtTip.value) + tipAmount;
    console.log("Tip: $" + tipAmount + " Total: $" + totalAmount);

    dvTip.innerHTML = "Tip: $" + tipAmount;
    dvTotal.innerHTML = " Total: $" + totalAmount;
}


