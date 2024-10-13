$(document).ready(function() {
    // Function to show the popup
    function showPopup(popupId) {
        $('.overlay').fadeIn();
        $(popupId).fadeIn();
    }
    document.querySelector('.hamburger').addEventListener('click', function() {
        document.querySelector('.nav-links').classList.toggle('active');
    });
    
    

    // Close popup and overlay
    function closePopup() {
        $('.overlay').fadeOut();
        $('.popup-box').fadeOut();
    }

    // Show Contact Form popup when contact button is clicked
    $('.contact-button').on('click', function(event) {
        event.preventDefault();
        showPopup('#contact-popup');
    });

    // Show Welcome Popup when page loads
    showPopup('#welcome-popup');

    // Close popups when close button is clicked
    $('.close-btn, .close-welcome').on('click', function() {
        closePopup();
    });

    // Close popup when overlay is clicked
    $('.overlay').on('click', function() {
        closePopup();
    });
});