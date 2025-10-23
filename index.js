document.addEventListener('DOMContentLoaded', function() {

    // --- 1. Sticky Navbar ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- 2. Mobile Menu Toggle ---
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    const body = document.body;

    // Function to close the menu
    function closeMenu() {
        mobileMenu.classList.remove('active');
        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>'; // Change icon to 'bars'
        body.style.overflow = 'auto'; // Re-enable scrolling
    }
    
    // Function to open the menu
    function openMenu() {
        mobileMenu.classList.add('active');
        menuToggle.innerHTML = '<i class="fa-solid fa-xmark"></i>'; // Change icon to 'close'
        body.style.overflow = 'hidden'; // Disable scrolling
    }

    // Toggle menu on button click
    menuToggle.addEventListener('click', () => {
        if (mobileMenu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // Close menu when a link is clicked
    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // --- 3. Testimonial Slider (Swiper.js) ---
    const swiper = new Swiper('.testimonial-slider', {
        // Optional parameters
        loop: true,
        autoplay: {
            delay: 5000, // 5 seconds per slide
            disableOnInteraction: false,
        },
        
        // Pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Responsive breakpoints
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
            // when window width is >= 640px
            640: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            // when window width is >= 1024px
            1024: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
    });

    // --- 4. Set Current Year in Footer ---
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

});
