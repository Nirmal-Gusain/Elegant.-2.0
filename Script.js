let cross = document.querySelector(".fa-x")
let FlyMenu = document.querySelector(".Flymenu")
let body = document.querySelector("body")

function openFlyMenu(){
    FlyMenu.style.left = "0px"
    body.style.backgroundColor = "grey"
}

function closeFlymenu(){
    FlyMenu.style.left = "-343px"
    body.style.backgroundColor = "white"
}