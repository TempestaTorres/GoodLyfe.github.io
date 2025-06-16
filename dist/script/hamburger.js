const hamburgerHandler = () => {
    'use strict'

    const mobileMenu = document.querySelector('.nav');
    const hamburger = document.querySelector('.hamburger');
    hamburger.addEventListener('click', (e) => {
        e.preventDefault();
        hamburger.classList.toggle('is-active');

        if (hamburger.classList.contains('is-active')) {
            mobileMenu.classList.add('is-active');
            mobileMenu.classList.remove('not-active');
        }
        else {
            mobileMenu.classList.add('not-active');
            mobileMenu.classList.remove('is-active');
        }
        e.stopPropagation();
    });
}