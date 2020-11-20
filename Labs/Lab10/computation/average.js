var txtNums = document.getElementById("txtNums");
var dvAverage = document.getElementById("dvAverage");
var dvSum = document.getElementById("dvSum");

var avg = 0;
var sum = 0;



function calculateData() {
    var splitString = txtNums.value.split(",");
    txtNums.value = "";

    for(i=0; i < splitString.length; i++){
        var txtData = Number(splitString[i]);
        sum = sum + txtData;
        avg = sum / splitString.length;
        dvAverage.innerHTML = "The average: " + avg;
        dvSum.innerHTML = "The sum: " + sum;
    }
    avg = 0;
    sum = 0;
}