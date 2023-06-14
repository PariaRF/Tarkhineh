const MainPage = () => {
    window.addEventListener("scroll", () => {
        let container = document.querySelector('.restaurant__menu__content');
        const scrollPossition = window.scrollY;
        const triggerPossition = container.offsetTop / 2;
        console.log(scrollPossition, triggerPossition, container.offsetTop, container.offsetHeight);
        if (scrollPossition >= 100) {
            container.classList.add('showResturantMenuContent');
            // container.style.opacity = "1";
        }
    })
    return `
        <div id="slider" class="body-text body-xl">
            <div class="slider__header flex-center">            
                <button id="chevron-right" class="reset flex-center slider__chevron-left">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.91003 19.9201L15.43 13.4001C16.2 12.6301 16.2 11.3701 15.43 10.6001L8.91003 4.08008" stroke="#fff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>    
                <h1>تجربه غذای سالم و گیاهی به سبک ترخینه</h1>
                <button id="chevron-left" class="reset flex-center slider__chevron-left">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 19.9201L8.47997 13.4001C7.70997 12.6301 7.70997 11.3701 8.47997 10.6001L15 4.08008" stroke="#fff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>    
            </div>
            <div class="slider__body">
                <button class="reset slider__order-btn body-md">سفارش آنلاین غذا</button>                
            </div>
            <div class="slider__controller">
                <div class="slider__controller__container">
                    <span class="slider__controller__circle circle-active">.</span>
                    <span class="slider__controller__circle">.</span>
                    <span class="slider__controller__circle">.</span>
                    <span class="slider__controller__circle">.</span>
                    <span class="slider__controller__circle">.</span>
                    <span class="slider__controller__circle">.</span>
                </div>    
            </div>
        </div>
        <div class="restaurant__menu flex-center">
            <div class="search-box">
                <input class="reset search-box__input body-md" type="text" placeHolder="جستجو"/>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="#353535" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22 22L20 20" stroke="#353535" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <h4 class="h-three">منوی رستوران</h4>
            <div class="restaurant__menu__content">              
                <div class="menu__content__item item-main-area">
                    <img class="content__item__img" src="client/assets/images/main-course.png"/>
                    <button class="content__item__btn">غذای اصلی</button>
                </div>
                <div class="menu__content__item item-appetizer-area">
                    <img class="content__item__img" src="client/assets/images/Appetizer.png"/>
                    <button class="content__item__btn">پیش غذا</button>
                </div>
                <div class="menu__content__item item-dessert-area">
                    <img class="content__item__img" src="client/assets/images/Dessert.png"/>
                    <button class="content__item__btn">دسر</button>
                </div>
                <div class="menu__content__item item-drink-area">
                    <img class="content__item__img" src="client/assets/images/Drink.png"/>
                    <button class="content__item__btn">نوشیدنی</button>
                </div>
            </div>           
        </div>
        `;
};

export default MainPage;