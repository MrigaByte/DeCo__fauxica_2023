const primaryHeader = document.querySelector('.primary-header');
const navToggle = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.getElementById('primary-navigation');

navToggle.addEventListener('click', () => {
    primaryNav.classList.toggle('visible');
    primaryHeader.toggleAttribute('data-overlay');
    navToggle.classList.toggle('open');
})

