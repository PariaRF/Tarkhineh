import AboutUs from "./pages/AboutUs.js";
import ContactUs from "./pages/ContactUs.js";
import MainPage from "./pages/MainPage.js";
import Menu from "./pages/Menu.js";
import Representation from "./pages/Representation.js";

const mobileMenuIcon = document.getElementById('mobile-menu-icon');
const mobileMenuClose = document.querySelector('.mobile-menu__close');
const mobileMenu = document.getElementById('mobile-menu');
const submenuLabel = document.querySelector('#submenu-label');
const branch = document.getElementById('branch');
const mobileMenuSubmenu = document.querySelector('#mobile-menu__submenu');
const mainContainer = document.getElementById("main-container");

// MOBILE MENU
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
})

// SPA
function router(params) {
    const routes = [
        { path: "/", view: MainPage },
        { path: "/menu", view: Menu },
        { path: "/representation", view: Representation },
        { path: "/aboutus", view: AboutUs },
        { path: "/contactus", view: ContactUs },
    ];

    const potentialRoutes = routes.map((route) => {
        return {
            route: route,
            isMatch: location.pathname === route.path,
        }
    })

    let match = potentialRoutes.find(route => route.isMatch);

    if (!match) {
        match = {
            route: { path: "/not-found", view: () => console.log("not found page") },
            isMatch: true
        }
    };
    mainContainer.innerHTML = match.route.view();
    // console.log(match.route.view());
}

function navigateTo(url) {
    history.pushState(null, null, url);
    router();
}

window.addEventListener("popstate", router)

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", (e) => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })
    router();
})