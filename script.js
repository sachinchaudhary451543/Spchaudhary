const navToggle =document.querySelector('.nav_toogle');
const navList =document.querySelector('.nav_list');
const navLinks =document.querySelectorAll('.nav_link');

navToggle.addEventListener('click', () =>{

    navList.classList.toggle('show');
    
    navToggle.querySelector('i').classList.toggle('fa-xmark');
    navToggle.querySelector('i').classList.toggle('fa-bars');
    
});

navLinks.forEach(link => {

    link.addEventListener('click', () =>{

        if (window.innerWidth <= 768) {
            navList.classList.toggle('show');
            
            navToggle.querySelector('i').classList.toggle('fa-xmark');
            navToggle.querySelector('i').classList.toggle('fa-bars');

        }
    });
});




// Function to check if an element is in the viewport
function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight - 100; // Trigger animation 100px before element is fully in view
}

// Function to add animation class
function animateOnScroll() {
    const animatedElements = document.querySelectorAll('.animated');
    animatedElements.forEach(el => {
        if (isInViewport(el)) {
            const animation = el.dataset.animation || 'fadeInUp'; el.classList.add(animation); // Add the second class (e.g., fadeInUp)
            el.style.visibility = 'visible'; // Ensure element is visible
        }
    });
}

// Event listeners for scroll and load
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

