let txtName = document.getElementById("txtName");
let dvResult = document.getElementById("dvResult");
dvResult.innerHTML = "Greeter"


function sayHello() {
    console.log("Hello " + txtName.value);
}