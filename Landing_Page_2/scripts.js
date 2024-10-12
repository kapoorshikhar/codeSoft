 // Smooth scrolling for navigation links
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add to cart functionality
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartCount = document.getElementById('cart-count');
let itemsInCart = 0;

addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        itemsInCart++;
        cartCount.textContent = itemsInCart;
        
        // Animate the button
        this.classList.add('added');
        this.textContent = 'Added to Cart';
        
        setTimeout(() => {
            this.classList.remove('added');
            this.textContent = 'Add to Cart';
        }, 2000);
    });
});

// Intersection Observer for fade-in effect
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.product-card').forEach(card => {
    observer.observe(card);
});