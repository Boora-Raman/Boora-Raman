// Preloader and Page Load Animation
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    const pageWrap = document.getElementById('page-wrap');
    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
            pageWrap.classList.add('loaded');
        }, 300);
    }, 500);
});

// Typed.js Animation
var typed = new Typed('#typed', {
    strings: ['DevOps Engineer', 'Cloud Architect', 'Full-Stack Developer'],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 2000,
    startDelay: 1000,
    loop: true,
    cursorChar: '|'
});

// Mobile Menu Toggle
document.querySelector('.mobile-menu-toggle').addEventListener('click', function() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('animate-slide-up');
    if (!mobileMenu.classList.contains('hidden')) {
        setTimeout(() => {
            mobileMenu.classList.add('visible');
        }, 10);
    } else {
        mobileMenu.classList.remove('visible');
    }
});

// Smooth Scroll
document.querySelectorAll('a.smoothscroll').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Modal Functionality
document.querySelectorAll('.modal-close, .modal').forEach(item => {
    item.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal-close') || e.target.classList.contains('modal')) {
            document.querySelectorAll('.modal').forEach(modal => {
                const popup = modal.querySelector('.modal-popup');
                popup.classList.remove('active');
                setTimeout(() => {
                    modal.classList.remove('active');
                    modal.classList.add('hidden');
                }, 500);
            });
        }
    });
});

document.querySelectorAll('a[href^="#modal-"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        // Close any open modals
        document.querySelectorAll('.modal').forEach(modal => {
            modal.classList.remove('active');
            modal.classList.add('hidden');
            const popup = modal.querySelector('.modal-popup');
            popup.classList.remove('active');
        });
        // Open the clicked modal
        const modalId = this.getAttribute('href');
        const modal = document.querySelector(modalId);
        const popup = modal.querySelector('.modal-popup');
        modal.classList.remove('hidden');
        modal.classList.add('active');
        setTimeout(() => {
            popup.classList.add('active');
            // Scroll to the top of the modal to ensure visibility
            modal.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 10);
    });
});

// Close mobile menu when clicking a nav link
document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.mobile-menu').classList.add('hidden');
        document.querySelector('.mobile-menu').classList.remove('visible');
    });
});

// Section Scroll Animations
const sections = document.querySelectorAll('.section');
const observerOptions = {
    root: null,
    threshold: 0.2,
    rootMargin: '0px'
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-slide-up');
            elements.forEach((el, index) => {
                setTimeout(() => {
                    el.classList.add('visible');
                }, index * 150); // Staggered delay for each element
            });
            sectionObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

sections.forEach(section => {
    sectionObserver.observe(section);
});
