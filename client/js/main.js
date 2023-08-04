import AboutUs from "./pages/AboutUs.js";
import Cart, { CartStrorage } from "./pages/Cart.js";
import ContactUs from "./pages/ContactUs.js";
import MainPage from "./pages/mainPage/MainPage.js";
import NotFound from "./pages/NotFound.js";
import NotFountRearchResult from "./pages/NotFountRearchResult.js";
import Representation from "./pages/Representation.js";
import SearchResualt from "./pages/searchResualtPage/SearchResualt.js";
import { Storage } from "./pages/searchResualtPage/SearchResualt.js";

const mobileMenuIcon = document.getElementById('mobile-menu-icon');
const mobileMenuClose = document.querySelector('.mobile-menu__close');
const mobileMenu = document.getElementById('mobile-menu');
const submenuLabel = document.querySelector('.submenu-label');
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
const searchInMenu = document.querySelector('.search-in-menu');
const body = document.getElementsByTagName("body");
const cartItemCount = document.querySelector(".cart-item-count");
const cartIcon = document.querySelector('#cart-icon');
const cartIconSvg = document.querySelector('#cart-icon-svg');
const navLinkItem = document.querySelectorAll('.nav__link__item');
const searchIconSvg = document.querySelector("#search-icon-svg");
const mobileMenuNav = document.querySelector(".mobile-menu__nav");
export const baseUrl = 'http://localhost:5000';

// MOBILE MENU
mobileMenuIcon.addEventListener("click", () => {
    mobileMenu.style.clipPath = "inset(0 0 0 0)";
    mobileMenu.style.visibility = "visible";
})

mobileMenuNav.addEventListener("click", (e) => {
    if (e.target.tagName === "A" && e.target.innerText !== "شعبه" && e.target.innerText !== "منو") {
        closeMobileMenu();
    }
})

mobileMenuClose.addEventListener("click", () => closeMobileMenu());

function closeMobileMenu() {
    mobileMenu.style.transition = "clip-path 1s ease-in-out";
    mobileMenu.style.clipPath = "inset(0 100% 0 0)";
}

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
export function router() {
    const routes = [
        { path: "/", title: "صفحه اصلی", view: MainPage },
        { path: "/representation", title: "اعطای نمایندگی", view: Representation },
        { path: "/aboutus", title: "درباره ما", view: AboutUs },
        { path: "/contactus", title: "تماس با ما", view: ContactUs },
        { path: "/notfoundsearchresult", title: "!پیدا نشد", view: NotFountRearchResult.renderNotFoundSearchResult },
        { path: "/searchresult", title: "جستجو", view: SearchResualt.SearchResultPage },
        { path: "/cart", title: "سبد خرید", view: Cart.renederCartPage },
        { path: "/not-found", title: "پیدا نشد!", view: NotFound },
    ];

    const potentialRoutes = routes.map((route) => {
        return {
            route: route,
            isMatch: location.pathname === route.path,
        }
    })

    let match = potentialRoutes.find(route => route.isMatch);
    match ? document.title = `ترخینه | ${match.route.title}` : null;
    // ACTIVE MENU ITEM
    const navLinkItemArray = [...navLinkItem];
    match ? navLinkItemArray.forEach(navItem => {
        if (navItem.textContent == match.route.title) {
            navItem.classList.add("active-menu-item");
        } else {
            navItem.classList.remove("active-menu-item");
        }
    }) : null;
    if (match) {
        if (match.route.path == '/cart') {
            cartIcon.classList.add("cart-active");
            cartIconSvg.classList.add("cart-active-icon");
        } else {
            cartIcon.classList.remove("cart-active");
            cartIconSvg.classList.remove("cart-active-icon");
        }
        if (match.route.path == '/searchresult') {
            searchIcon.classList.add("cart-active");
            searchIconSvg.classList.add("cart-active-icon-search");
        } else {
            searchIcon.classList.remove("cart-active");
            searchIconSvg.classList.remove("cart-active-icon-search");
        }
    }

    if (!match) {
        match = {
            route: { path: "/not-found", title: "پیدا نشد!", view: NotFound },
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
    cartItemCount.textContent = persianJs("0").englishNumber().toString();
    const getAllMenuItem = SearchResualt.menuItem();
    Storage.savedMenuItemOnStrorage(getAllMenuItem);
    Storage.getMenuItemFromStorage();
    SearchResualt.setupApp();
    const cartEntity = CartStrorage.getCart();
})

// CHANGE ROUTE ON SEARCH RESULT
searchInMenu.addEventListener("keydown", (e) => {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
        if (e.target.value == "پاستا") {
            e.target.value = "";
            closeModalSearch();
            e.preventDefault();
            let newUrl = `${baseUrl}/searchresult`;
            setTimeout(() => {
                window.history.pushState(null, null, newUrl);
                router();
            }, 600);
        } else {
            const searchTerms = e.target.value;
            const encodedTerms = encodeURIComponent(searchTerms);
            e.target.value = "";
            closeModalSearch();
            e.preventDefault();
            let newUrl = `${baseUrl}/notfoundsearchresult?search=${encodedTerms}`;
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
            let regex = /[^0-9۰-۹\b]/;
            if (e.target.value) {
                if (regex.test(e.target.value)) {
                    e.target.value = e.target.value.replace(regex, '');
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

cartIcon.addEventListener("click", (e) => {
    cartIcon.classList.add("cart-active");
    cartIconSvg.classList.add("cart-active-icon");

    e.preventDefault();
    let newUrl = `${baseUrl}/cart`;
    window.history.pushState(null, null, newUrl);
    router();
})