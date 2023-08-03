class NotFountRearchResult {
    renderNotFoundSearchResult() {

        const urlSearchParams = new URLSearchParams(window.location.search);
        const searchTerm = urlSearchParams.get('search');
        const searchTermWhiteSpace = searchTerm;

        return `
        <div class="not-found-search-container">
            <h1>موردی با این مشخصات پیدا نکردیم!</h1>
            <div class="search-box-result">
                <input class="reset" type="text" id="result-of-search" disabled value="${searchTermWhiteSpace}"/>
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
            <img src="client/assets/images/MatchNotFound.png" alt="not-found-result"/>
        </div>
        `;
    }
}

export default new NotFountRearchResult();
