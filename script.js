var button = document.getElementById('menuButton')
var menu = document.getElementById('menu')

function openMenu() {
    console.log('DONE')
    
    if (menu.style.display === "none" || menu.style.display === "" ){
        menu.style.display = "block"
        button.style.marginLeft = "205px"
    } else {
        menu.style.display = "none"
        button.style.marginLeft = "20px"
    }
}

button.addEventListener('click', openMenu)