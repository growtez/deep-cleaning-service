
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const body = document.body;

    function closeMenu() {
        mobileMenu.classList.remove('active');
        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
        body.style.overflow = 'auto';
    }
    
    function openMenu() {
        mobileMenu.classList.add('active');
        menuToggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        body.style.overflow = 'hidden';
    }

    menuToggle.addEventListener('click', () => {
        if (mobileMenu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    const homeSwiper = new Swiper('.testimonial-slider-home', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.pagination-home',
            clickable: true,
        },
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
            640: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 30 }
        }
    });

    const autoSwiper = new Swiper('.testimonial-slider-auto', {
        loop: true,
        autoplay: {
            delay: 4500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.pagination-auto',
            clickable: true,
        },
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
            640: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 30 }
        }
    });

    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Updated tab variables to point to the new sticky tabs
    const tabs = {
        home: document.getElementById('tab-home'),
        auto: document.getElementById('tab-auto'),
        homeMobile: document.getElementById('tab-home-mobile-sticky'), // Changed
        autoMobile: document.getElementById('tab-auto-mobile-sticky'), // Changed
    };

    const contents = {
        home: document.getElementById('home-content'),
        auto: document.getElementById('auto-content'),
    };

    const navLinks = {
        home: document.getElementById('nav-link-home'),
        services: document.getElementById('nav-link-services'),
        about: document.getElementById('nav-link-about'),
        contact: document.getElementById('nav-link-contact'),
    };
    
    const mobileNavLinks = {
        home: document.getElementById('mobile-link-home'),
        services: document.getElementById('mobile-link-services'),
        about: document.getElementById('mobile-link-about'),
        contact: document.getElementById('mobile-link-contact'),
    };

    const footerLinks = {
        home: document.getElementById('footer-link-home'),
        auto: document.getElementById('footer-link-auto'),
    };

    function showHomeService() {
        tabs.home.classList.add('active');
        tabs.homeMobile.classList.add('active');
        tabs.auto.classList.remove('active');
        tabs.autoMobile.classList.remove('active');

        contents.home.classList.add('active');
        contents.auto.classList.remove('active');

        navLinks.home.href = "#home";
        navLinks.services.href = "#services";
        navLinks.about.href = "#about";
        navLinks.contact.href = "#contact";
        
        mobileNavLinks.home.href = "#home";
        mobileNavLinks.services.href = "#services";
        mobileNavLinks.about.href = "#about";
        mobileNavLinks.contact.href = "#contact";
        
        window.scrollTo(0, 0);
        closeMenu(); // This will close the slide-in menu if it's open
    }

    function showAutoService() {
        tabs.home.classList.remove('active');
        tabs.homeMobile.classList.remove('active');
        tabs.auto.classList.add('active');
        tabs.autoMobile.classList.add('active');

        contents.home.classList.remove('active');
        contents.auto.classList.add('active');

        navLinks.home.href = "#auto-hero";
        navLinks.services.href = "#auto-services";
        navLinks.about.href = "#auto-about";
        navLinks.contact.href = "#auto-contact";

        mobileNavLinks.home.href = "#auto-hero";
        mobileNavLinks.services.href = "#auto-services";
        mobileNavLinks.about.href = "#auto-about";
        mobileNavLinks.contact.href = "#auto-contact";
        
        window.scrollTo(0, 0);
        closeMenu(); // This will close the slide-in menu if it's open
    }

    tabs.home.addEventListener('click', showHomeService);
    tabs.homeMobile.addEventListener('click', showHomeService);
    tabs.auto.addEventListener('click', showAutoService);
    tabs.autoMobile.addEventListener('click', showAutoService);
    
    footerLinks.home.addEventListener('click', (e) => {
        e.preventDefault();
        showHomeService();
        setTimeout(() => {
            document.getElementById('services').scrollIntoView();
        }, 100);
    });
    footerLinks.auto.addEventListener('click', (e) => {
        e.preventDefault();
        showAutoService();
        setTimeout(() => {
            document.getElementById('auto-services').scrollIntoView();
        }, 100);
    });
});
    