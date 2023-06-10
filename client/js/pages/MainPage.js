const MainPage = () => {
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
        `;
};

export default MainPage;