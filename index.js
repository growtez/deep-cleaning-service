// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Navigation scroll effect
    let isScrolled = false;
    const nav = document.querySelector('nav');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20 && !isScrolled) {
            nav.classList.add('bg-white/95', 'backdrop-blur-md', 'shadow-lg');
            isScrolled = true;
        } else if (window.scrollY <= 20 && isScrolled) {
            nav.classList.remove('bg-white/95', 'backdrop-blur-md', 'shadow-lg');
            isScrolled = false;
        }
    });

    // Mobile menu functionality
    const menuButton = document.querySelector('#menuButton');
    const mobileMenu = document.querySelector('#mobileMenu');
    let isOpen = false;

    menuButton?.addEventListener('click', () => {
        isOpen = !isOpen;
        if (isOpen) {
            mobileMenu?.classList.remove('hidden');
            menuButton.innerHTML = '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>';
        } else {
            mobileMenu?.classList.add('hidden');
            menuButton.innerHTML = '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/></svg>';
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target?.scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu if open
            if (isOpen) {
                mobileMenu?.classList.add('hidden');
                isOpen = false;
                menuButton.innerHTML = '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/></svg>';
            }
        });
    });
});