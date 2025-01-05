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
    const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);
});
