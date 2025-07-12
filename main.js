// Preloader
window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    preloader.classList.add('hidden');
}); 

// Typed.js Animation
var typed = new Typed('#typed', {
    strings: ['DevOps Engineer', 'Cloud Architect', 'Full-Stack Developer'],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 2000,
    startDelay: 1000,
    loop: true
});

// Mobile Menu Toggle
document.querySelector('.mobile-menu-toggle').addEventListener('click', function() {
    document.querySelector('.mobile-menu').classList.toggle('hidden');
});

// Smooth Scroll
document.querySelectorAll('a.smoothscroll').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Modal Functionality
document.querySelectorAll('.modal-close, .modal').forEach(item => {
    item.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal-close') || e.target.classList.contains('modal')) {
            document.querySelectorAll('.modal').forEach(modal => modal.classList.remove('active'));
        }
    });
});

document.querySelectorAll('a[href^="#modal-"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const modalId = this.getAttribute('href');
        document.querySelector(modalId).classList.add('active');
    });
});
