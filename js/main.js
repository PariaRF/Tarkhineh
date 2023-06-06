const mobileMenuIcon = document.getElementById('mobile-menu-icon');
const mobileMenuClose = document.querySelector('.mobile-menu__close');
const mobileMenu = document.getElementById('mobile-menu');
const submenuLabel = document.querySelector('#submenu-label');
const branch = document.getElementById('branch');
const mobileMenuSubmenu = document.querySelector('#mobile-menu__submenu');


mobileMenuIcon.addEventListener("click", () => {
    mobileMenu.style.clipPath = "inset(0 0 0 0)";
    mobileMenu.style.visibility = "visible";
})

mobileMenuClose.addEventListener("click", () => {
    mobileMenu.style.transition = "clip-path 1s ease-in-out";
    mobileMenu.style.clipPath = "inset(0 100% 0 0)";
})

submenuLabel.addEventListener("click", () => {
    mobileMenuSubmenu.classList.toggle('mobile-menu__submenu');
    // mobileMenuSubmenu.style.height = "538px";
    // mobileMenuSubmenu.style.position = "unset";
})
