   // Smooth scrolling for navigation links
   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add to cart functionality (for demonstration purposes)
const addToCartButtons = document.querySelectorAll('.cta-button');
addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        alert('Product added to cart!');
    });
});