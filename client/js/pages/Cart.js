class Cart {
    constructor() {

    }

    emptyCart() {
        const cartIcon = document.querySelector('#cart-icon');
        const cartIconSvg = document.querySelector('#cart-icon-svg');
        cartIcon.classList.add("cart-active");
        cartIconSvg.classList.add("cart-active-icon");
        return `<h1>You'r Cart Is Empty</h1>`;
    }

    fullCart() {
        const cartIcon = document.querySelector('#cart-icon');
        const cartIconSvg = document.querySelector('#cart-icon-svg');
        cartIcon.classList.add("cart-active");
        cartIconSvg.classList.add("cart-active-icon");
        return `<h1>You Have Item</h1>`;
    }

    rnederCartPage = () => {
        const isCart = CartStrorage.getCart();
        if (isCart) {
            console.log(this.fullCart());
            return this.fullCart();
        } else {
            return this.emptyCart();
        }

    }

}

export class CartStrorage {
    static getCart() {
        const savedCart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : null;
        return savedCart;
    }
}

export default new Cart;