
export function initialiseAnimations() {
    document.querySelectorAll('.favourite-button').forEach(button => {
        button.addEventListener('click', function() {
            // Select the previous sibling SVG element
            const svg = this.previousElementSibling; 
            const path = svg.querySelector('.product-save-path');
            // Remove the class to reset the animation
            path.classList.remove('animate-save'); 
            void path.offsetWidth; 
            // Trigger a reflow to restart the animation
            path.classList.add('animate-save'); // Add the class to start the animation
        });
    });
}