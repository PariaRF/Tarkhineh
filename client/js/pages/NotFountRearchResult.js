class NotFountRearchResult {
    constructor() {

        let observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                if (mutation.addedNodes && mutation.addedNodes.length > 0) {

                    let resultOfSearch = document.getElementById("result-of-search");
                    if (resultOfSearch) {

                        let inputValue = localStorage.getItem("searchValue");

                        resultOfSearch.value = inputValue;

                        observer.disconnect();
                    }
                }
            });
        });

        observer.observe(document, { childList: true, subtree: true });
    }



    renderNotFoundSearchResult() {
        return `
        <div class="not-found-search-container">
            <h1>موردی با این مشخصات پیدا نکردیم!</h1>
            <div class="search-box-not-found-container">
                <input class="reset" type="text" id="result-of-search" autocomplete="off" disabled>
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
            <img src="client/assets/images/MatchNotFound.png"/>
        </div>
        `;
    }
}

export default new NotFountRearchResult();

// export const NotFountRearchResult = () => {
//     window.addEventListener("load", () => {
//         let resultOfSearch = document.getElementById("result-of-search");
//         let inputValue = localStorage.getItem("searchValue");

//         console.log(resultOfSearch, inputValue);
//         resultOfSearch.value = inputValue;
//     })
//     return `
//     <div class="not-found-search-container">
//         <h1>موردی با این مشخصات پیدا نکردیم!</h1>
//         <div class="search-box-not-found-container">
//             <input class="reset" type="text" id="result-of-search">
//             <i>
//                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path
//                         d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
//                         stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
//                     <path d="M22 22L20 20" stroke="#292D32" stroke-width="1.5" stroke-linecap="round"
//                         stroke-linejoin="round" />
//                 </svg>
//             </i>
//         </div>
//         <img src="client/assets/images/MatchNotFound.png"/>
//     </div>
//     `
// }
