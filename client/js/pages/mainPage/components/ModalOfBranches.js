class ModalOfBranches {
    openModal() {
        $(document).ready(function () {
            const BranchesModal = document.querySelector(".branches-modal");
            BranchesModal.style.visibility = "visible";
            BranchesModal.style.transform = "scale(1)";
            // Set the background image to the first image by default
            $('.branches-modal').css('background-image', 'url(' + $('.branches-modal img:first-child').attr('src') + ')');
            // When an image is clicked, set it as the background image and make it the active image
            $('.branches-modal img').click(function () {
                $('.branches-modal').css('background-image', 'url(' + $(this).attr('src') + ')');
                $('.branches-modal img').removeClass('active');
                $('.branches-modal img').removeClass('active-item');
                $(this).addClass('active');
                $(this).addClass('active-item');
            });
        })
        return `
        <div class="branches-modal">
        <i class="branches-modal__close-icon">
            <svg width="35" height="35" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="3.72611" height="29.8089" rx="1.86305" transform="matrix(0.698447 -0.715662 0.698447 0.715662 8.45508 11.667)" fill="white"/>
            <rect width="3.72611" height="29.8089" rx="1.86305" transform="matrix(0.698447 0.715662 -0.698447 0.715662 28.6973 9.00049)" fill="white"/>
            </svg>
        </i>
            <div class="branches-modal__container">
                <img src="client/assets/images/branches/Chalus-.webp" class="active active-item"/>
                <img src="client/assets/images/branches/Vanak.webp"/>
                <img src="client/assets/images/branches/Aghdasieh.webp"/>
                <img src="client/assets/images/branches/Ekbatan.webp"/>
            </div>
        </div>
        `;
    }
}

export default new ModalOfBranches();