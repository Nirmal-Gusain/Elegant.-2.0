let cross = document.querySelector(".fa-x")
let FlyMenu = document.querySelector(".Flymenu")
let body = document.querySelector("body")

function openFlyMenu() {
    FlyMenu.style.left = "0px"
    body.style.backgroundColor = "grey"
}

function closeFlymenu() {
    FlyMenu.style.left = "-343px"
    body.style.backgroundColor = "white"
}

let username = document.querySelector("#username")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let checkbox = document.querySelector("#checkbox")

let usernamePattern = /^[a-zA-Z0-9_-]{3,20}$/;
let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}\[\]:;"'<>?,./\\|-]).{8,}$/

let userError =document.querySelector(".user")
let emailError =document.querySelector(".email")
let passError =document.querySelector(".pass")

function checkValidation(e) {
    e.preventDefault()



    if (checkbox.checked) {

        if (usernamePattern.test(username.value)) {
            username.style.color = "green"
            userError.style.right = "-280px"
        } else if(username.value == ""){
            userError.style.right = "110px"
        }else{
            username.style.color = "red"

        }
        if (emailPattern.test(email.value)) {
            email.style.color = "green"
            emailError.style.right = "-280px"
        } else if(email.value == ""){
            emailError.style.right = "110px"
        }else{
            email.style.color = "red"

        }
        if (passwordPattern.test(password.value)) {
            password.style.color = "green"
            passError.style.right = "-280px"
        } else if(password.value == ""){
            passError.style.right = "110px"
        }else{
            password.style.color = "red"

        }

       
    }
}



