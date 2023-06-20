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
        <div class="about-restaurant">
            <div class="about-restaurant__container">
                <div class="about-restaurant__text">
                    <h4 class="text__header h h-four">رستوران های زنجیزه ای ترخینه</h4>
                    <p class="text__body body-md">
                        مهمان نوازی یکی از مشخصه های ایرانیان است و باعث افتخار
                        ماست که پیش از 20 سال است خدمت گزار مردم شریف ایران هستیم. ما در
                        رستوران های زنجیره ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور
                        شان شما عزیزان ارائه دهیم.
                    </p>
                    <div class="text__btn-container">
                        <button class="reset text__btn-more button-lg">
                            اطلاعات بیشتر
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 19.9201L8.47997 13.4001C7.70997 12.6301 7.70997 11.3701 8.47997 10.6001L15 4.08008" stroke="#fff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="about-restaurant__icons">
                    <div class="icons-personels icons__item-layout">
                        <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span class="body-md icons__item__text">پرسنلی مجرب و حرفه ای</span>
                    </div>
                    <div class="icons-quality icons__item-layout">
                        <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 2V19C2 20.66 3.34 22 5 22H22" stroke="#fff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M5 17L9.59 11.64C10.35 10.76 11.7 10.7 12.52 11.53L13.47 12.48C14.29 13.3 15.64 13.25 16.4 12.37L21 7" stroke="#fff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>                
                        <span class="body-md icons__item__text">کیفیت بالای غذاها</span>
                    </div>
                    <div class="icons-environment icons__item-layout">
                        <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.07 2.81997L3.14004 8.37002C2.36004 8.99002 1.86002 10.3 2.03002 11.28L3.36001 19.24C3.60001 20.66 4.96002 21.8101 6.40002 21.8101H17.6C19.03 21.8101 20.4 20.65 20.64 19.24L21.97 11.28C22.13 10.3 21.63 8.99002 20.86 8.37002L13.93 2.82998C12.86 1.96998 11.13 1.96997 10.07 2.81997Z" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M9.88 14.38C11.15 13.17 12.85 13.17 14.12 14.38" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M16.24 12.2601C15.7 11.7301 15.1 11.3201 14.48 11.0201C12.89 10.2601 11.11 10.2601 9.51001 11.0201C8.89001 11.3201 8.3 11.7301 7.75 12.2601" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11.9955 17H12.0045" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>                               
                        <span class="body-md icons__item__text">محیطی دلنشین و آرام</span>
                    </div>
                    <div class="icons-menu  icons__item-layout">
                        <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.93 6.76001L18.56 20.29C18.32 21.3 17.42 22 16.38 22H3.24001C1.73001 22 0.650023 20.5199 1.10002 19.0699L5.31001 5.55005C5.60001 4.61005 6.47003 3.95996 7.45003 3.95996H19.75C20.7 3.95996 21.49 4.53997 21.82 5.33997C22.01 5.76997 22.05 6.26001 21.93 6.76001Z" stroke="#fff" stroke-width="1.5" stroke-miterlimit="10"/>
                            <path d="M16 22H20.78C22.07 22 23.08 20.91 22.99 19.62L22 6" stroke="#fff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M9.67999 6.38L10.72 2.06006" stroke="#fff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M16.38 6.39001L17.32 2.05005" stroke="#fff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M7.70001 12H15.7" stroke="#fff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6.70001 16H14.7" stroke="#fff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>                                               
                        <span class="body-md icons__item__text">منوی متنوع</span>
                    </div>
                </div>
            </div>
        </div>
        `;
};

export default MainPage;