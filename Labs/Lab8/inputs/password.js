let txtUsername = document.getElementById("txtUsername");
let txtPassword = document.getElementById("txtPassword");
let dvResult = document.getElementById("dvResult");
dvResult.innerHTML = "Insert password"


function checkInput() {

    if(txtUsername.value == "Username" && txtPassword.value == "Password"){
        dvResult.innerHTML = "Success"
    }else{
        dvResult.innerHTML = "Wrong information"
    }
}