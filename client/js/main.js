import AboutUs from "./pages/AboutUs.js";
import ContactUs from "./pages/ContactUs.js";
import MainPage from "./pages/mainPage/MainPage.js";
import Menu from "./pages/Menu.js";
import NotFountRearchResult from "./pages/NotFountRearchResult.js";
import Representation from "./pages/Representation.js";
import SearchResualt from "./pages/searchResualtPage/SearchResualt.js";

const mobileMenuIcon = document.getElementById('mobile-menu-icon');
const mobileMenuClose = document.querySelector('.mobile-menu__close');
const mobileMenu = document.getElementById('mobile-menu');
const submenuLabel = document.querySelector('#submenu-label');
const mobileMenuSubmenu = document.querySelector('#mobile-menu__submenu');
const app = document.getElementById("app");
const msgFormMessageTextarea = document.querySelector(".msg__form__message");
const msgFormFullNameInput = document.querySelector(".msg__form__full-name");
const msgFormNumberInput = document.querySelector(".msg__form__number");
const msgFormCount = document.querySelector(".msg__form__count");
const msgFormBtn = document.querySelector(".msg__form__btn");
const searchIcon = document.querySelector("#search-icon");
const backdropModal = document.querySelector('.backdrop-modal');
const searchModal = document.querySelector(".search-modal");
const searchModalCloseIcon = document.querySelector(".search-modal__close-icon");
const searchContainer = document.querySelector(".search-container");
const searchInMenu = document.querySelector('#search-in-menu');
const body = document.getElementsByTagName("body");

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
    if (mobileMenuSubmenu.classList.contains('mobile-menu__submenu')) {
        setTimeout(() => {
            mobileMenuSubmenu.parentElement.style.display = "flex";
        }, 1000);
    } else {
        mobileMenuSubmenu.parentElement.style.display = "block";
    }
})

// SPA
function router(params) {
    const routes = [
        { path: "/", view: MainPage },
        { path: "/menu", view: Menu },
        { path: "/representation", view: Representation },
        { path: "/aboutus", view: AboutUs },
        { path: "/contactus", view: ContactUs },
        { path: "/notfoundsearchresult", view: NotFountRearchResult.renderNotFoundSearchResult },
        { path: "/searchresult", view: SearchResualt.SearchResultPage },
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
    app.innerHTML = match.route.view();
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
    // SearchResualt.createCards();
})

// CHANGE ROUTE ON SEARCH RESULT
searchInMenu.addEventListener("keydown", (e) => {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
        if (e.target.value == "پاستا") {
            closeModalSearch();
            e.preventDefault();
            let newUrl = "http://localhost:5000/searchresult";
            setTimeout(() => {
                window.history.pushState(null, null, newUrl);
                router();
            }, 600);
        } else {
            localStorage.setItem("searchValue", searchInMenu.value);
            closeModalSearch();
            e.preventDefault();
            let newUrl = "http://localhost:5000/notfoundsearchresult";
            setTimeout(() => {
                window.history.pushState(null, null, newUrl);
                router();
            }, 600);
        }

    }
})

// COUNTING LETTERS OF TEXTAREA IN THE FOOTER AND SHOW
msgFormMessageTextarea.addEventListener("input", (event) => {
    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    const EnDigits = event.target.value.length;
    const digits = EnDigits.toString().split('');
    let persianNum = '';
    digits.forEach(digit => {
        persianNum += persianDigits[digit];
        msgFormCount.textContent = `${persianNum}/۲۰۰`;
    });
})

// ENABLE BUTTON IN THE FOOTER-FORM WITH CONDITION AND ADD TOOLTIP FOR INPUTS IN THE FOOTER-FORM
let formInputs = [msgFormMessageTextarea, msgFormFullNameInput, msgFormNumberInput];

formInputs.forEach(value => {
    value.classList.add('tooltip');

    value.addEventListener("input", (e) => {
        // CHECK NUMBER AND CONVERT TO PERSIAN NUMBER
        if (e.target == msgFormNumberInput) {
            let regex = /^[^0-9]+$/;
            if (e.target.value) {
                if (regex.test(e.target.value)) {
                    e.target.value = e.target.value.replace(/\b[^0-9]+$\b/g, '');
                } else {
                    e.target.value = persianJs(e.target.value).englishNumber().toString();
                }
            }
        }

        if (msgFormMessageTextarea.value.length > 10 && msgFormFullNameInput.value.length > 3 && msgFormNumberInput.value.length == 11) {
            msgFormBtn.disabled = false;
            msgFormBtn.style.cursor = "pointer";
            msgFormBtn.style.opacity = 1;
        } else {
            msgFormBtn.disabled = true;
            msgFormBtn.style.cursor = "not-allowed";
            msgFormBtn.style.opacity = 0.2;
        }
    })
})

msgFormBtn.addEventListener("click", (e) => {
    if (!msgFormBtn.disabled) {
        e.preventDefault();
    }
    msgFormBtn.classList.add('tooltip');
})

// SEARCH MODAL
searchIcon.addEventListener("click", () => {
    body[0].style.overflowY = "hidden";
    searchContainer.style.zIndex = "9";
    backdropModal.style.visibility = "visible";
    backdropModal.style.transform = "scale(1)";
    searchModal.style.visibility = "visible";
    searchModal.style.transform = "scale(1)";
})

backdropModal.addEventListener("click", closeModalSearch);
searchModalCloseIcon.addEventListener("click", closeModalSearch);

function closeModalSearch() {
    backdropModal.style.visibility = "hidden";
    backdropModal.style.transform = "scale(0)";
    searchModal.style.visibility = "hidden";
    searchModal.style.transform = "scale(0)";
    searchModal.style.transition = "all 1s ease-in-out";
    body[0].style.overflowY = "auto";
    searchContainer.style.zIndex = "-9";
}