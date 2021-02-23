
function showMenu() {
    let menu = document.querySelector("nav");
    menu.classList.toggle("LargeNav")

    let menuitem = document.querySelector(".navitem")
    menuitem.classList.toggle(".navitemshow")

}
let menuButton = document.querySelector("nav")
menuButton.addEventListener("click",showMenu)