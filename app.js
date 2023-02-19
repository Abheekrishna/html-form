const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const errorText = document.querySelector(".error")


function validPassword () {
    if (password.value != confirmPassword.value) {
        errorText.innerHTML = "Password doesn't match"
    }
}