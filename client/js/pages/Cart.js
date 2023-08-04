import { baseUrl, router } from "../main.js";
import SearchResualt, { Storage } from "./searchResualtPage/SearchResualt.js";

const app = document.querySelector("#app");

let cart = [];


class Cart {

    Header() {
        return `
                <div id="multi-step-mobile-header">
                    <i>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="vuesax/outline/arrow-right">
                                <g id="vuesax/outline/arrow-right_2">
                                    <g id="arrow-right">
                                        <path id="Vector" d="M5.93998 13.78C5.81332 13.78 5.68665 13.7333 5.58665 13.6333C5.39332 13.44 5.39332 13.12 5.58665 12.9267L9.93332 8.58001C10.2533 8.26001 10.2533 7.74001 9.93332 7.42001L5.58665 3.07335C5.39332 2.88001 5.39332 2.56001 5.58665 2.36668C5.77998 2.17335 6.09998 2.17335 6.29332 2.36668L10.64 6.71335C10.98 7.05335 11.1733 7.51335 11.1733 8.00001C11.1733 8.48668 10.9866 8.94668 10.64 9.28668L6.29332 13.6333C6.19332 13.7267 6.06665 13.78 5.93998 13.78Z" fill="#353535"/>
                                    </g>
                                </g>
                            </g>
                        </svg>                
                    </i>
                    <h1>سبد خرید</h1>
                    <i>
                        <svg class="cart-bill__clear-cart" width="16" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="vuesax/outline/trash">
                                <g id="vuesax/outline/trash_2">
                                    <g id="trash">
                                        <path id="Vector" d="M13.9999 4.48669C13.9866 4.48669 13.9666 4.48669 13.9466 4.48669C10.4199 4.13336 6.89994 4.00002 3.41328 4.35336L2.05328 4.48669C1.77328 4.51336 1.52661 4.31336 1.49994 4.03336C1.47328 3.75336 1.67328 3.51336 1.94661 3.48669L3.30661 3.35336C6.85328 2.99336 10.4466 3.13336 14.0466 3.48669C14.3199 3.51336 14.5199 3.76002 14.4933 4.03336C14.4733 4.29336 14.2533 4.48669 13.9999 4.48669Z" fill="#353535"/>
                                        <path id="Vector_2" d="M5.66663 3.81331C5.63997 3.81331 5.6133 3.81331 5.57997 3.80665C5.3133 3.75998 5.12663 3.49998 5.1733 3.23331L5.31997 2.35998C5.42663 1.71998 5.5733 0.833313 7.12663 0.833313H8.8733C10.4333 0.833313 10.58 1.75331 10.68 2.36665L10.8266 3.23331C10.8733 3.50665 10.6866 3.76665 10.42 3.80665C10.1466 3.85331 9.88663 3.66665 9.84663 3.39998L9.69997 2.53331C9.60663 1.95331 9.58663 1.83998 8.87997 1.83998H7.1333C6.42663 1.83998 6.4133 1.93331 6.3133 2.52665L6.15997 3.39331C6.11997 3.63998 5.90663 3.81331 5.66663 3.81331Z" fill="#353535"/>
                                        <path id="Vector_3" d="M10.14 15.1667H5.85997C3.53331 15.1667 3.43997 13.88 3.36664 12.84L2.93331 6.12666C2.91331 5.85332 3.12664 5.61332 3.39997 5.59332C3.67997 5.57999 3.91331 5.78666 3.93331 6.05999L4.36664 12.7733C4.43997 13.7867 4.46664 14.1667 5.85997 14.1667H10.14C11.54 14.1667 11.5666 13.7867 11.6333 12.7733L12.0666 6.05999C12.0866 5.78666 12.3266 5.57999 12.6 5.59332C12.8733 5.61332 13.0866 5.84666 13.0666 6.12666L12.6333 12.84C12.56 13.88 12.4666 15.1667 10.14 15.1667Z" fill="#353535"/>
                                        <path id="Vector_4" d="M9.10672 11.5H6.88672C6.61339 11.5 6.38672 11.2733 6.38672 11C6.38672 10.7267 6.61339 10.5 6.88672 10.5H9.10672C9.38005 10.5 9.60672 10.7267 9.60672 11C9.60672 11.2733 9.38005 11.5 9.10672 11.5Z" fill="#353535"/>
                                        <path id="Vector_5" d="M9.66671 8.83331H6.33337C6.06004 8.83331 5.83337 8.60665 5.83337 8.33331C5.83337 8.05998 6.06004 7.83331 6.33337 7.83331H9.66671C9.94004 7.83331 10.1667 8.05998 10.1667 8.33331C10.1667 8.60665 9.94004 8.83331 9.66671 8.83331Z" fill="#353535"/>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </i>
                </div>
                <div class="multi-step__header flex-center" id="multi-step-desktop-header">
                    <div class="multi-step__heade__section flex-center">
                        <i>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.19 17.75H7.53999C6.54999 17.75 5.59999 17.33 4.92999 16.6C4.25999 15.87 3.92 14.89 4 13.9L4.83 3.94C4.86 3.63 4.74999 3.33001 4.53999 3.10001C4.32999 2.87001 4.04 2.75 3.73 2.75H2C1.59 2.75 1.25 2.41 1.25 2C1.25 1.59 1.59 1.25 2 1.25H3.74001C4.47001 1.25 5.15999 1.56 5.64999 2.09C5.91999 2.39 6.12 2.74 6.23 3.13H18.72C19.73 3.13 20.66 3.53 21.34 4.25C22.01 4.98 22.35 5.93 22.27 6.94L21.73 14.44C21.62 16.27 20.02 17.75 18.19 17.75ZM6.28 4.62L5.5 14.02C5.45 14.6 5.64 15.15 6.03 15.58C6.42 16.01 6.95999 16.24 7.53999 16.24H18.19C19.23 16.24 20.17 15.36 20.25 14.32L20.79 6.82001C20.83 6.23001 20.64 5.67001 20.25 5.26001C19.86 4.84001 19.32 4.60999 18.73 4.60999H6.28V4.62Z" fill="#417F56"/>
                            <path d="M16.25 22.75C15.15 22.75 14.25 21.85 14.25 20.75C14.25 19.65 15.15 18.75 16.25 18.75C17.35 18.75 18.25 19.65 18.25 20.75C18.25 21.85 17.35 22.75 16.25 22.75ZM16.25 20.25C15.97 20.25 15.75 20.47 15.75 20.75C15.75 21.03 15.97 21.25 16.25 21.25C16.53 21.25 16.75 21.03 16.75 20.75C16.75 20.47 16.53 20.25 16.25 20.25Z" fill="#417F56"/>
                            <path d="M8.25 22.75C7.15 22.75 6.25 21.85 6.25 20.75C6.25 19.65 7.15 18.75 8.25 18.75C9.35 18.75 10.25 19.65 10.25 20.75C10.25 21.85 9.35 22.75 8.25 22.75ZM8.25 20.25C7.97 20.25 7.75 20.47 7.75 20.75C7.75 21.03 7.97 21.25 8.25 21.25C8.53 21.25 8.75 21.03 8.75 20.75C8.75 20.47 8.53 20.25 8.25 20.25Z" fill="#417F56"/>
                            <path d="M21 8.75H9C8.59 8.75 8.25 8.41 8.25 8C8.25 7.59 8.59 7.25 9 7.25H21C21.41 7.25 21.75 7.59 21.75 8C21.75 8.41 21.41 8.75 21 8.75Z" fill="#417F56"/>
                        </svg>
                        </i>
                        <span>سبد خرید</span>
                    </div>
                    <div class="multi-step__header__line">--------------------------</div>
                    <div class="multi-step__header__section flex-center">
                        <i>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="vuesax/outline/tick-square">
                                <g id="vuesax/outline/tick-square_2">
                                <g id="tick-square">
                                    <path id="Vector" d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z" fill="#CBCBCB"/>
                                    <path id="Vector_2" d="M10.5799 15.58C10.3799 15.58 10.1899 15.5 10.0499 15.36L7.21994 12.53C6.92994 12.24 6.92994 11.76 7.21994 11.47C7.50994 11.18 7.98994 11.18 8.27994 11.47L10.5799 13.77L15.7199 8.62998C16.0099 8.33998 16.4899 8.33998 16.7799 8.62998C17.0699 8.91998 17.0699 9.39998 16.7799 9.68998L11.1099 15.36C10.9699 15.5 10.7799 15.58 10.5799 15.58Z" fill="#CBCBCB"/>
                                </g>
                                </g>
                                </g>
                            </svg>                    
                        </i>
                        <span>تکمیل اطلاعات</span>
                    </div>
                    <div class="multi-step__header__line">--------------------------</div>
                    <div class="multi-step__header__section flex-center">
                        <i>
                        <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="vuesax/outline/wallet-2">
                            <g id="vuesax/outline/wallet-2_2">
                            <g id="wallet-2">
                                <path id="Vector" d="M8.66699 6.5H4.66699C4.39366 6.5 4.16699 6.27333 4.16699 6C4.16699 5.72667 4.39366 5.5 4.66699 5.5H8.66699C8.94033 5.5 9.16699 5.72667 9.16699 6C9.16699 6.27333 8.94033 6.5 8.66699 6.5Z" fill="#CBCBCB"/>
                                <path id="Vector_2" d="M12.6936 9.86613C11.6869 9.86613 10.8336 9.11946 10.7536 8.15946C10.7003 7.60613 10.9003 7.06614 11.3003 6.67281C11.6336 6.32614 12.1069 6.13281 12.6069 6.13281H14.0003C14.6603 6.15281 15.1669 6.67278 15.1669 7.31278V8.68616C15.1669 9.32616 14.6603 9.84613 14.0203 9.86613H12.6936ZM13.9802 7.13281H12.6136C12.3803 7.13281 12.1669 7.21948 12.0136 7.37948C11.8203 7.56614 11.7269 7.81946 11.7536 8.07279C11.7869 8.51279 12.2136 8.86613 12.6936 8.86613H14.0003C14.0869 8.86613 14.1669 8.78616 14.1669 8.68616V7.31278C14.1669 7.21278 14.0869 7.13948 13.9802 7.13281Z" fill="#CBCBCB"/>
                                <path id="Vector_3" d="M10.6663 14.1663H4.66634C2.37301 14.1663 0.833008 12.6263 0.833008 10.333V5.66634C0.833008 3.61301 2.09966 2.12635 4.06632 1.87968C4.24632 1.85301 4.45301 1.83301 4.66634 1.83301H10.6663C10.8263 1.83301 11.033 1.83967 11.2463 1.87301C13.213 2.09967 14.4997 3.59301 14.4997 5.66634V6.63302C14.4997 6.90635 14.273 7.13302 13.9997 7.13302H12.613C12.3797 7.13302 12.1664 7.21968 12.013 7.37968L12.0063 7.38635C11.8197 7.56635 11.733 7.81299 11.753 8.06633C11.7863 8.50633 12.213 8.85966 12.693 8.85966H13.9997C14.273 8.85966 14.4997 9.08633 14.4997 9.35966V10.3263C14.4997 12.6263 12.9597 14.1663 10.6663 14.1663ZM4.66634 2.83301C4.50634 2.83301 4.353 2.84633 4.19967 2.86633C2.733 3.053 1.83301 4.11967 1.83301 5.66634V10.333C1.83301 12.053 2.94634 13.1663 4.66634 13.1663H10.6663C12.3863 13.1663 13.4997 12.053 13.4997 10.333V9.86633H12.693C11.6863 9.86633 10.833 9.11967 10.753 8.15967C10.6997 7.613 10.8997 7.06635 11.2997 6.67969C11.6463 6.32635 12.113 6.13302 12.613 6.13302H13.4997V5.66634C13.4997 4.10634 12.5863 3.03299 11.1063 2.85966C10.9463 2.83299 10.8063 2.83301 10.6663 2.83301H4.66634V2.83301Z" fill="#CBCBCB"/>
                            </g>
                            </g>
                            </g>
                        </svg>                    
                        </i>
                        <span>پرداخت</span>
                    </div>
                </div>
        `;
    }

    emptyCart() {
        app.addEventListener("click", (e) => {
            if (e.target.classList.contains("restaurant-menu")) {
                let newUrl = `${baseUrl}/searchresult`;
                window.history.pushState(null, null, newUrl);
                router();
            }
        })
        return `
            <div class="multi-step flex-center">
                <div class="multi-step__body">
                    <h1>شما در حال حاضر هیچ سفارشی ثبت نکرده اید!</h1>
                    <button class="reset flex-center restaurant-menu">منوی رستوران</button>
                </div>
            </div>
        `;
    }

    createCartItem() {
        const cartEntity = CartStrorage.getCart();
        cart = cartEntity;

        app.addEventListener("click", (e) => {

            if (e.target.classList.contains("cart__item__increase")) {

                let target = e.target;
                CartLogic.increaseQuantityItem(target);

            }

            if (e.target.classList.contains("cart__item__decrease")) {

                let target = e.target;
                CartLogic.deacreseQuantityItem(target);

            }

            if (e.target.classList.contains("cart__item__remove")) {

                const parentElement = e.target.closest(".cart__item");
                const id = e.target.dataset.id;
                CartLogic.removeCartItem(id, parentElement);

            }
        });

        let renderCartItem = "";
        cartEntity.forEach(item => {
            renderCartItem += `<div class="cart__item" data-id=${item.id}>
                <img class="cart__item__img" src="${item.imageUrl}" alt="food"/>
                <div class="cart__item__info">
                    <div class="cart__item__tite info__row">
                        <h3>${item.title}</h3>
                        <i>
                            <svg data-id=${item.id} class="cart__item__remove" width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g class="color-fill" id="vuesax/outline/trash">
                                    <g class="color-fill" id="vuesax/outline/trash_2">
                                        <g class="color-fill" id="trash">
                                            <path id="Vector" d="M13.9999 4.48669C13.9866 4.48669 13.9666 4.48669 13.9466 4.48669C10.4199 4.13336 6.89994 4.00002 3.41328 4.35336L2.05328 4.48669C1.77328 4.51336 1.52661 4.31336 1.49994 4.03336C1.47328 3.75336 1.67328 3.51336 1.94661 3.48669L3.30661 3.35336C6.85328 2.99336 10.4466 3.13336 14.0466 3.48669C14.3199 3.51336 14.5199 3.76002 14.4933 4.03336C14.4733 4.29336 14.2533 4.48669 13.9999 4.48669Z" fill="#353535"/>
                                            <path id="Vector_2" d="M5.66663 3.81331C5.63997 3.81331 5.6133 3.81331 5.57997 3.80665C5.3133 3.75998 5.12663 3.49998 5.1733 3.23331L5.31997 2.35998C5.42663 1.71998 5.5733 0.833313 7.12663 0.833313H8.8733C10.4333 0.833313 10.58 1.75331 10.68 2.36665L10.8266 3.23331C10.8733 3.50665 10.6866 3.76665 10.42 3.80665C10.1466 3.85331 9.88663 3.66665 9.84663 3.39998L9.69997 2.53331C9.60663 1.95331 9.58663 1.83998 8.87997 1.83998H7.1333C6.42663 1.83998 6.4133 1.93331 6.3133 2.52665L6.15997 3.39331C6.11997 3.63998 5.90663 3.81331 5.66663 3.81331Z" fill="#353535"/>
                                            <path id="Vector_3" d="M10.14 15.1667H5.85997C3.53331 15.1667 3.43997 13.88 3.36664 12.84L2.93331 6.12666C2.91331 5.85332 3.12664 5.61332 3.39997 5.59332C3.67997 5.57999 3.91331 5.78666 3.93331 6.05999L4.36664 12.7733C4.43997 13.7867 4.46664 14.1667 5.85997 14.1667H10.14C11.54 14.1667 11.5666 13.7867 11.6333 12.7733L12.0666 6.05999C12.0866 5.78666 12.3266 5.57999 12.6 5.59332C12.8733 5.61332 13.0866 5.84666 13.0666 6.12666L12.6333 12.84C12.56 13.88 12.4666 15.1667 10.14 15.1667Z" fill="#353535"/>
                                            <path id="Vector_4" d="M9.10672 11.5H6.88672C6.61339 11.5 6.38672 11.2733 6.38672 11C6.38672 10.7267 6.61339 10.5 6.88672 10.5H9.10672C9.38005 10.5 9.60672 10.7267 9.60672 11C9.60672 11.2733 9.38005 11.5 9.10672 11.5Z" fill="#353535"/>
                                            <path id="Vector_5" d="M9.66671 8.83331H6.33337C6.06004 8.83331 5.83337 8.60665 5.83337 8.33331C5.83337 8.05998 6.06004 7.83331 6.33337 7.83331H9.66671C9.94004 7.83331 10.1667 8.05998 10.1667 8.33331C10.1667 8.60665 9.94004 8.83331 9.66671 8.83331Z" fill="#353535"/>
                                        </g>
                                    </g>
                                </g>
                            </svg>                                
                        </i>
                    </div>
                    <div class="cart__item__detail info__row">
                        <span>کدو خورد شده ،پاستا، قارچ، گوجه، پیاز خلالی شده</span>
                        <div class="cart__item__main-price">
                            <span class="cart-item__detail__price">${CartLogic.formatter(item.orgPrice)}</span>
                            <span class="cart-item__detail__discount">${persianJs(item.discount).englishNumber().toString()}</span>
                        </div>
                    </div>
                    <div class="cart__item__footer info__row">
                        <div class="cart__item__action info__row">
                            <div class="cart__item__action__container">
                                <div class="cart__item__action__rate flex-center">
                                    <img src="client/assets/images/star.png" alt="rate"/>
                                </div>
                                <div class="cart__item__action__count">
                                    <button class="cart__item__increase reset" data-id=${item.id}>+</button>
                                    <span class="cart__item__quantity">${persianJs(item.quantity).englishNumber().toString()}</span>
                                    <button class="cart__item__decrease reset" data-id=${item.id}>-</button>
                                </div>
                            </div>
                            <span class="cart__item__final__price">${CartLogic.formatter(item.discountedPrice)}تومان</span>
                        </div>
                    </div>
                </div>
            </div>`;

        });

        return renderCartItem;
    }

    fullCart() {
        const cartEntity = CartStrorage.getCart();
        cart = cartEntity;
        const [tempCartItem, totalDiscount, totalPrice] = CartLogic.setCartValue(cart);

        app.addEventListener("click", (e) => {
            if (e.target.classList.contains("cart-bill__clear-cart")) {
                const multiStepCartContainer = document.querySelector(".multi-step__cart-container");
                CartLogic.clearCart(multiStepCartContainer);
                multiStepCartContainer.setAttribute("style", "background-image: url('client/assets/images/EmptyPage.png')");
                multiStepCartContainer.style.backgroundRepeat = "no-repeat";
                multiStepCartContainer.style.backgroundSize = "cover";
            }
        })

        return `
                <div class="multi-step__body-container flex-center">
                    <div class="multi-step__cart-container">
                        ${this.createCartItem()}
                    </div>
                    <div class="cart-bill">
                        <div class="cart-bill__total-quantity cart-bill--row">
                            <div class="cart-bill__count">
                                <span>سبد خرید</span>
                                <span class="cart-bill__temp-count">(${persianJs(tempCartItem).englishNumber().toString()})</span>
                            </div>
                            <i>
                                <svg class="cart-bill__clear-cart" width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="vuesax/outline/trash">
                                        <g id="vuesax/outline/trash_2">
                                            <g id="trash">
                                                <path id="Vector" d="M13.9999 4.48669C13.9866 4.48669 13.9666 4.48669 13.9466 4.48669C10.4199 4.13336 6.89994 4.00002 3.41328 4.35336L2.05328 4.48669C1.77328 4.51336 1.52661 4.31336 1.49994 4.03336C1.47328 3.75336 1.67328 3.51336 1.94661 3.48669L3.30661 3.35336C6.85328 2.99336 10.4466 3.13336 14.0466 3.48669C14.3199 3.51336 14.5199 3.76002 14.4933 4.03336C14.4733 4.29336 14.2533 4.48669 13.9999 4.48669Z" fill="#353535"/>
                                                <path id="Vector_2" d="M5.66663 3.81331C5.63997 3.81331 5.6133 3.81331 5.57997 3.80665C5.3133 3.75998 5.12663 3.49998 5.1733 3.23331L5.31997 2.35998C5.42663 1.71998 5.5733 0.833313 7.12663 0.833313H8.8733C10.4333 0.833313 10.58 1.75331 10.68 2.36665L10.8266 3.23331C10.8733 3.50665 10.6866 3.76665 10.42 3.80665C10.1466 3.85331 9.88663 3.66665 9.84663 3.39998L9.69997 2.53331C9.60663 1.95331 9.58663 1.83998 8.87997 1.83998H7.1333C6.42663 1.83998 6.4133 1.93331 6.3133 2.52665L6.15997 3.39331C6.11997 3.63998 5.90663 3.81331 5.66663 3.81331Z" fill="#353535"/>
                                                <path id="Vector_3" d="M10.14 15.1667H5.85997C3.53331 15.1667 3.43997 13.88 3.36664 12.84L2.93331 6.12666C2.91331 5.85332 3.12664 5.61332 3.39997 5.59332C3.67997 5.57999 3.91331 5.78666 3.93331 6.05999L4.36664 12.7733C4.43997 13.7867 4.46664 14.1667 5.85997 14.1667H10.14C11.54 14.1667 11.5666 13.7867 11.6333 12.7733L12.0666 6.05999C12.0866 5.78666 12.3266 5.57999 12.6 5.59332C12.8733 5.61332 13.0866 5.84666 13.0666 6.12666L12.6333 12.84C12.56 13.88 12.4666 15.1667 10.14 15.1667Z" fill="#353535"/>
                                                <path id="Vector_4" d="M9.10672 11.5H6.88672C6.61339 11.5 6.38672 11.2733 6.38672 11C6.38672 10.7267 6.61339 10.5 6.88672 10.5H9.10672C9.38005 10.5 9.60672 10.7267 9.60672 11C9.60672 11.2733 9.38005 11.5 9.10672 11.5Z" fill="#353535"/>
                                                <path id="Vector_5" d="M9.66671 8.83331H6.33337C6.06004 8.83331 5.83337 8.60665 5.83337 8.33331C5.83337 8.05998 6.06004 7.83331 6.33337 7.83331H9.66671C9.94004 7.83331 10.1667 8.05998 10.1667 8.33331C10.1667 8.60665 9.94004 8.83331 9.66671 8.83331Z" fill="#353535"/>
                                            </g>
                                        </g>
                                    </g>
                                </svg>      
                            </i>
                        </div>
                        <div class="cart-bill__discount cart-bill--row">
                            <span>تخفیف محصولات</span>
                            <span class="cart-bill__discount-num">${CartLogic.formatter(totalDiscount)} تومان</span>
                        </div>
                        <div class="cart-bill__delivery cart-bill--row col">
                            <div class="cart-bill__delivery-cost">
                                <span>هزینه ارسال</span>
                                <span>${persianJs("0").englishNumber().toString()} تومان</span>
                            </div>
                            <div class="cart-bill__note">
                                <i>
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="vuesax/outline/warning-2">
                                            <g id="vuesax/outline/warning-2_2">
                                                <g id="warning-2">
                                                    <path id="Vector" d="M12 13.75C11.59 13.75 11.25 13.41 11.25 13V7.75C11.25 7.34 11.59 7 12 7C12.41 7 12.75 7.34 12.75 7.75V13C12.75 13.41 12.41 13.75 12 13.75Z" fill="#A9791C"/>
                                                    <path id="Vector_2" d="M12 17.25C11.73 17.25 11.48 17.15 11.29 16.96C11.2 16.86 11.13 16.75 11.07 16.63C11.02 16.51 11 16.38 11 16.25C11 15.99 11.11 15.73 11.29 15.54C11.66 15.17 12.34 15.17 12.71 15.54C12.89 15.73 13 15.99 13 16.25C13 16.38 12.97 16.51 12.92 16.63C12.87 16.75 12.8 16.86 12.71 16.96C12.52 17.15 12.27 17.25 12 17.25Z" fill="#A9791C"/>
                                                    <path id="Vector_3" d="M12.0002 22.7501C11.3302 22.7501 10.6502 22.5801 10.0502 22.2301L4.11017 18.8001C2.91017 18.1001 2.16016 16.8101 2.16016 15.4201V8.58011C2.16016 7.19011 2.91017 5.90011 4.11017 5.20011L10.0502 1.77012C11.2502 1.07012 12.7402 1.07012 13.9502 1.77012L19.8902 5.20011C21.0902 5.90011 21.8402 7.19011 21.8402 8.58011V15.4201C21.8402 16.8101 21.0902 18.1001 19.8902 18.8001L13.9502 22.2301C13.3502 22.5801 12.6702 22.7501 12.0002 22.7501ZM12.0002 2.7501C11.5902 2.7501 11.1702 2.8601 10.8002 3.0701L4.86017 6.5001C4.12017 6.9301 3.66016 7.72011 3.66016 8.58011V15.4201C3.66016 16.2701 4.12017 17.0701 4.86017 17.5001L10.8002 20.9301C11.5402 21.3601 12.4602 21.3601 13.1902 20.9301L19.1302 17.5001C19.8702 17.0701 20.3302 16.2801 20.3302 15.4201V8.58011C20.3302 7.73011 19.8702 6.9301 19.1302 6.5001L13.1902 3.0701C12.8302 2.8601 12.4102 2.7501 12.0002 2.7501Z" fill="#A9791C"/>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>                            
                                </i>
                                <span>هزینه ارسال در ادامه بر اساس آدرس، زمان و نحوه ارسال انتخابی شما محاسبه و به این مبلغ اضافه خواهد شد.</span>
                            </div>
                        </div>
                        <div class="cart-bill__total-price cart-bill--row">
                            <span>مبلغ قابل پرداخت</span>
                            <span class="cart-bill__total-price__num">${CartLogic.formatter(totalPrice)} تومان</span>
                        </div>
                        <button class="cart-bill__button reset">
                            <i>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>                        
                            </i>
                            ورود/ثبت نام
                        </button>
                    </div>
                </div>
        `;
    }

    renederCartPage = () => {
        const isCart = CartStrorage.getCart();
        if (isCart) {
            return `<div class="page-container flex-center">                                    
                        <div class="multi-step-container flex-center">
                            ${this.Header()}
                            ${this.fullCart()}          
                        </div>
                    </div>`;

        } else {
            return `<div class="page-container flex-center">                                    
                        <div class="multi-step-container flex-center">
                            ${this.Header()}
                            ${this.emptyCart()}
                        </div>
                    </div>`;

        }

    }

}

export class CartLogic {

    static increaseQuantityItem(target) {
        let countElement = target.nextElementSibling;
        let countElementEnNum = persianJs(countElement.textContent).toEnglishNumber().toString();
        let count = Number(countElementEnNum) + 1;

        countElement.innerText = persianJs(count).englishNumber().toString();

        const id = target.dataset.id;
        let cartItem = cart.find(item => item.id == id);
        let countNumToPersian = persianJs(count).englishNumber().toString();

        cartItem.quantity = count;


        CartStrorage.saveCart(cart);
        let resultCartValue = CartLogic.setCartValue(cart);
        CartLogic.updateCartValue(resultCartValue);
        SearchResualt.setCartValue(cart);

        let decreaseElement = target.nextElementSibling.nextElementSibling;
        decreaseElement.disabled = false;
        decreaseElement.style.cursor = "pointer";
    }

    static deacreseQuantityItem(target) {
        let countElement = target.previousElementSibling;
        let countElementEnNum = persianJs(countElement.textContent).toEnglishNumber().toString();
        if (countElementEnNum > 1) {
            let count = Number(countElementEnNum) - 1;

            countElement.innerText = persianJs(count).englishNumber().toString();

            const id = target.dataset.id;
            let cartItem = cart.find(item => item.id == id);

            cartItem.quantity = count;

            CartStrorage.saveCart(cart);
            let resultCartValue = CartLogic.setCartValue(cart);
            CartLogic.updateCartValue(resultCartValue);
            SearchResualt.setCartValue(cart);


            if (countElement.textContent > 1) {
                SearchResualt.setCartValue(cart);
            }
        } else {
            target.disabled = true;
            target.style.cursor = "not-allowed";
        }
    }

    static setCartValue(cart) {

        let tempCartItem = 0;
        let totalDiscount = 0;
        let totalPrice = 0;
        if (cart) {
            totalPrice = cart.reduce((acc, curr) => {
                tempCartItem += curr.quantity;
                totalDiscount += ((parseInt(curr.orgPrice) - parseInt(curr.discountedPrice)) * curr.quantity);
                return acc + curr.quantity * parseInt(curr.discountedPrice);
            }, 0);
        }

        return [tempCartItem, totalDiscount, totalPrice];
    }

    static updateCartValue(resultCartValue) {
        const [tempCartItem, totalDiscount, totalPrice] = resultCartValue;
        const cartBillTotalPriceNum = app.querySelector(".cart-bill__total-price__num");
        const cartBillTempCount = app.querySelector(".cart-bill__temp-count");
        const cartBillDiscountNum = app.querySelector(".cart-bill__discount-num");

        cartBillTotalPriceNum.innerText = `${CartLogic.formatter(totalPrice)} تومان`;
        cartBillTempCount.textContent = `(${CartLogic.formatter(tempCartItem)})`;
        cartBillDiscountNum.textContent = `${CartLogic.formatter(totalDiscount)} تومان`;
    }

    static removeCartItem(id, parentElement) {
        const cartEntity = CartStrorage.getCart();
        const multiStepCartContainer = app.querySelector('.multi-step__cart-container');
        let cart = cartEntity;
        if (parentElement.parentNode === multiStepCartContainer && multiStepCartContainer.children.length > 0) {
            const filteredCart = cart.filter(item => parseInt(item.id) !== parseInt(id));
            CartStrorage.saveCart(filteredCart);
            let resultCartValue = this.setCartValue(filteredCart);
            CartLogic.updateCartValue(resultCartValue);
            SearchResualt.setCartValue(filteredCart);
            if (cartEntity.length == 1) {
                localStorage.removeItem("cart");
                SearchResualt.clearCart();
            }
            multiStepCartContainer.removeChild(parentElement);
        }
    }

    static clearCart(multiStepCartContainer) {
        const cartEntity = CartStrorage.getCart();
        cart = cartEntity;

        while (multiStepCartContainer.children.length > 0) {
            multiStepCartContainer.firstChild.remove();
            cart.pop();
        }

        SearchResualt.setCartValue(cart);
        let resultCartValue = this.setCartValue(cart);
        this.updateCartValue(resultCartValue);

        localStorage.removeItem("cart");
        SearchResualt.clearCart();
    }

    static formatter(number) {
        let num = Number(number);
        return num.toLocaleString('fa-IR', {
            minimumFractionDigits: 0, maximumFractionDigits: 2
        });
    }
}

export class CartStrorage {
    static getCart() {
        const savedCart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : null;
        return savedCart;
    }

    static saveCart(cart) {
        const saveCart = cart ? localStorage.setItem("cart", JSON.stringify(cart)) : [];
        return saveCart;
    }
}

export default new Cart;