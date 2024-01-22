// toggle
const navbarNav = document.querySelector(".navbar-nav");

// jika menu di klikk
document.querySelector("#hamburger-menu").onclick = () => {
    navbarNav.classList.toggle('active');
}

// ketika di klik di luar menu auto menutup menu
const menu = document.querySelector("#hamburger-menu");

document.addEventListener("click", function(element){
    if(!menu.contains(element.target) && !navbarNav.contains(element.target)){
        navbarNav.classList.remove("active")
    }
})