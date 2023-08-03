import Cart, { CartLogic } from "../Cart.js";
import { mainCourse } from "./mainCourse.js";


let cart = [];
const cartItemCount = document.querySelector(".cart-item-count");
class SearchResult {

    menuItem() {
        return mainCourse;
    }

    createHeader() {
        return `
        <div class="search-result__header">
            <h1>نتایج جستجو برای:<strong>  پاستا</strong></h1>
            <div class="search-box-result">
                <input class="reset" type="text" disabled value="پاستا">
                <i>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                            stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M22 22L20 20" stroke="#292D32" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </i>
            </div>
        </div>
        `;
    }

    createCards() {
        const mainCourses = Storage.getMenuItemFromStorage();
        let maincoursesCard = "";
        let getCartItms = JSON.parse(localStorage.getItem("cart")) || [];
        mainCourses.forEach(item => {
            let ExistInCart = getCartItms.find(findItem => parseInt(findItem.id) === parseInt(item.id));

            const addToCartButton = document.createElement('button');
            addToCartButton.classList.add("reset", "main-courses-card__btn");
            addToCartButton.classList.add(ExistInCart ? "exist-in-cart" : "nothing");
            addToCartButton.dataset.id = item.id;
            addToCartButton.textContent = ExistInCart ? "موجود در سبد خرید" : "افزودن به سبد خرید";

            maincoursesCard += `
               <div class="main-courses-card">
                    <img src="${item.imageUrl}"/>
                    <div class="main-courses-card__body">
                    <h3>${item.title}</h3>
                    <div class="main-courses-card__info">
                        <div class="main-courses-card__info__action">
                            <div class="main-courses-card__info__action__card fav-icon">
                                <i>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="vuesax/outline/heart">
                                        <g id="vuesax/outline/heart_2">
                                        <g id="heart">
                                        <path id="Vector" d="M7.99967 14.4336C7.79301 14.4336 7.59301 14.4069 7.42634 14.3469C4.87967 13.4736 0.833008 10.3736 0.833008 5.79356C0.833008 3.46023 2.71967 1.56689 5.03967 1.56689C6.16634 1.56689 7.21967 2.00689 7.99967 2.79356C8.77967 2.00689 9.83301 1.56689 10.9597 1.56689C13.2797 1.56689 15.1663 3.46689 15.1663 5.79356C15.1663 10.3802 11.1197 13.4736 8.57301 14.3469C8.40634 14.4069 8.20634 14.4336 7.99967 14.4336ZM5.03967 2.56689C3.27301 2.56689 1.83301 4.01356 1.83301 5.79356C1.83301 10.3469 6.21301 12.8802 7.75301 13.4069C7.87301 13.4469 8.13301 13.4469 8.25301 13.4069C9.78634 12.8802 14.173 10.3536 14.173 5.79356C14.173 4.01356 12.733 2.56689 10.9663 2.56689C9.95301 2.56689 9.01301 3.04023 8.40634 3.86023C8.21967 4.11356 7.79301 4.11356 7.60634 3.86023C6.98634 3.03356 6.05301 2.56689 5.03967 2.56689Z" fill="#ADADAD"/>
                                        </g>
                                        </g>
                                        </g>
                                    </svg>                            
                                </i>
                                <span class="main-courses-card__info__text" id="add-to-fav">افزودن به علاقه مندی ها</span>
                            </div>
                            <div class="main-courses-card__info__action__card">
                                <i>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="Star rate">
                                        <path id="Star" d="M8 0.404509L9.67723 5.56649L9.70529 5.65286H9.79611H15.2237L10.8327 8.84315L10.7592 8.89653L10.7873 8.9829L12.4645 14.1449L8.07347 10.9546L8 10.9012L7.92653 10.9546L3.53548 14.1449L5.21271 8.9829L5.24078 8.89653L5.1673 8.84315L0.776258 5.65286H6.20389H6.29471L6.32277 5.56649L8 0.404509Z" fill="#F4B740" stroke="#CBCBCB" stroke-width="0.25"/>
                                        </g>
                                    </svg>                                                        
                                </i>
                                <span class="main-courses-card__info__text">${persianJs(5).englishNumber().toString()} (${persianJs(63).englishNumber().toString()} امتیاز)</span>
                            </div>
                        </div>
                        <div class="main-courses-card__info__price">
                        <span class="card__info__price__org-price">${CartLogic.formatter(item.orgPrice)}</span>
                        <span class="card__info__price__discount">${persianJs(item.discount).englishNumber().toString()}</span>
                            <span class="card__info__price__discounted-price">${CartLogic.formatter(item.discountedPrice)} تومان</span>
                        </div>
                    </div>
                    ${addToCartButton.outerHTML}
                    </div>                   
               </div>
            `;
        })
        return maincoursesCard;
    }

    addToCart() {
        const addToCartBtns = [...document.querySelectorAll('.main-courses-card__btn')];
        addToCartBtns.forEach(btn => {
            const id = btn.dataset.id;
            const isInCart = cart.find(item => parseInt(item.id) === parseInt(id));
            if (isInCart) {
                btn.innerText = 'موجود در سبد خرید';
                btn.disabled = true;
                btn.style.opacity = "0.8";
                btn.style.cursor = "not-allowed";
            } else {
                btn.innerText = 'افزودن به سبد خرید';
                btn.disabled = false;
                btn.style.opacity = "1";
                btn.style.cursor = "pointer";
            }
        })
    }

    setCartValue(cart) {
        let tempCartItems = 0;
        if (cart.length > 0) {
            cart.forEach(item => {
                tempCartItems += item.quantity;
            })
            cartItemCount.textContent = tempCartItems >= 1 ? persianJs(tempCartItems).englishNumber().toString() : persianJs("0").englishNumber().toString();
        } else {
            const numTostring = String(tempCartItems);
            cartItemCount.textContent = persianJs(numTostring).englishNumber().toString();
        }
    }

    SearchResultPage = () => {
        const mainCoursesContainer = document.createElement("div");
        mainCoursesContainer.classList.add('main-courses-container');

        let renderPage = this.createHeader() + `
            <div class="main-courses-container__cards">${this.createCards()}</div>
        `;

        mainCoursesContainer.innerHTML = renderPage;

        const app = document.getElementById("app");
        app.addEventListener("click", (event) => {
            const checkClick = event.target.classList.contains('main-courses-card__btn');
            if (checkClick) {
                const addToCardButton = event.target;
                const id = addToCardButton.dataset.id;
                addToCardButton.innerText = 'موجود در سبد خرید';
                addToCardButton.disabled = true;
                addToCardButton.style.opacity = "0.8";
                addToCardButton.style.cursor = "not-allowed";

                const adddedItem = Storage.findMenuItem(id);
                cart = [...cart, { ...adddedItem, quantity: 1 }];
                Storage.saveCart(cart);
                this.setCartValue(cart);
            }
        })

        return mainCoursesContainer.outerHTML;
    }

    setupApp() {
        cart = Storage.getCart() || [];
        this.setCartValue(cart);
        // this.addToCart();
    }

    clearCart() {
        cart = [];
        localStorage.removeItem("cart");
    }
}

export class Storage {
    static savedMenuItemOnStrorage(getAllMenuItem) {
        let savedMenuItems = getAllMenuItem ? getAllMenuItem : [];
        localStorage.setItem("menuItems", JSON.stringify(savedMenuItems));
    }

    static getMenuItemFromStorage() {
        const savedMenuItems = JSON.parse(localStorage.getItem("menuItems")) ? JSON.parse(localStorage.getItem("menuItems")) : [];
        return savedMenuItems;
    }

    static findMenuItem(id) {
        const savedMenuItems = JSON.parse(localStorage.getItem("menuItems"));
        return savedMenuItems.find(item => item.id === parseInt(id));
    }

    static saveCart(cart) {
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    static getCart() {
        return JSON.parse(localStorage.getItem("cart"));
    }
}

export default new SearchResult();