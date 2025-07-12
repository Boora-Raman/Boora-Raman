// Preloader
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 300);
    }, 500);
});

// Typed.js for Intro
const typed = new Typed('#typed', {
    strings: ['DevOps Engineer', 'Kubernetes Enthusiast', 'Full-Stack Developer', 'Cloud Architect'],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true,
    backDelay: 1500
});

// Smooth Scrolling
document.querySelectorAll('.smoothscroll').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
        // Close mobile menu if open
        const mobileMenu = document.querySelector('.mobile-menu');
        if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }
    });
});

// Modal Functionality
document.querySelectorAll('a[href^="#modal-"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const modalId = link.getAttribute('href').substring(1);
        const modal = document.getElementById(modalId);
        modal.classList.remove('hidden');
    });
});

document.querySelectorAll('.modal-close').forEach(button => {
    button.addEventListener('click', () => {
        button.closest('.modal').classList.add('hidden');
    });
});

// Close modal when clicking outside
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });
});

// Mobile Menu Toggle
document.querySelector('.mobile-menu-toggle').addEventListener('click', () => {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('hidden');
});
