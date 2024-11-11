// Initialize AOS (Animate on Scroll) animations
document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
        duration: 800, // Duration of the animation
        easing: "ease-in-out", // Easing function
        once: true, // Trigger animation only once
        mirror: false // No mirror effect when scrolling back
    });
});
