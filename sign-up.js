
function checkPassword() {
    let passwordInput = document.getElementById("password").value;
    let confirmPass = document.getElementById("confirm").value;

    if(passwordInput != confirmPass) {
        document.querySelector(".signup>.information>div>.message").innerHTML = "*Passwords do not match";
        return false;
    } else {
        document.querySelector(".signup>.information>div>.message").innerHTML = "";
        return true;
    }
};