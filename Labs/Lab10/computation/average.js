function calculateAverage() {
    let numberSeries = document.getElementById("numberSeries").value;
    var arr = numberSeries.split(" ");
    var sum = 0;
    var avg = 0;

    for(var i = 0; i < arr.lenght; i++) {
        sum += +arr[i];
    }
}