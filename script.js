// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menuBtn');
    const mobileNav = document.getElementById('mobileNav');
    
    if (menuBtn && mobileNav) {
        menuBtn.addEventListener('click', function() {
            mobileNav.classList.toggle('hidden');
        });
    }


    
    // Animation trigger on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('animate-on-load');
            }
        });
    }, observerOptions);
    
    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.animate-on-load');
    animatedElements.forEach(el => observer.observe(el));
    
    // Trigger initial animations for elements already in view
    setTimeout(() => {
        animatedElements.forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight) {
                el.classList.remove('animate-on-load');
            }
        });
    }, 100);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});




