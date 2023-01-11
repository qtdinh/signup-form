
function checkPassword() {
    let passwordInput = document.getElementById("password");
    let confirmPass = document.getElementById("confirm");

    if(passwordInput.value === confirmPass.value) {
        passwordInput.setCustomValidity("");
        confirmPass.setCustomValidity("");
        document.querySelector(".message").textContent = "";
    } else {
        passwordInput.setCustomValidity("Passwords do not match");
        confirmPass.setCustomValidity("Passwords do not match");
        document.querySelector(".message").textContent = "* Passwords do not match";
    }
    
};