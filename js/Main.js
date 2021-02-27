
function showMenu() {
    let menu = document.querySelector("nav");
    menu.classList.toggle("LargeNav")

    const nodes = document.querySelectorAll (".navitem");

    //this code is quite weird to keep it compatible with internet explorer 6
    Array.prototype.forEach.call (nodes, node => {
    node.classList.toggle ("navitemshow")
    })

}
let menuButton = document.querySelector("nav")
menuButton.addEventListener("click",showMenu)