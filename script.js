document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.style.color = '#ff6600'; // Highlight color
        }
    });
});

// Form validation for Review page
if (window.location.pathname.includes('Review.html')) {
    const form = document.querySelector('form');
    const reviewInput = document.getElementById('review');
    
    form.addEventListener('submit', (event) => {
        if (!reviewInput.value.trim()) {
            event.preventDefault(); // Prevent form submission
            alert('Please enter a review before submitting.');
        }
    });
}

// Automatically update footer year
const footerYear = document.querySelector('footer p');
if (footerYear) {
    footerYear.innerHTML = `Jay's Slamming Burgers ${new Date().getFullYear()}`;
}