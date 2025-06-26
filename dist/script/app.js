document.addEventListener("DOMContentLoaded", () => {
    'use strict'

    const header = document.querySelector(".header");
    const modalWindow = document.querySelector(".modal-window");
    const closeBtn = document.querySelector(".close");
    const menu = document.querySelector(".menu");
    const headerSearch = document.querySelector(".header-search");
    const formLogin = document.querySelector("#form-login");
    const backToTop = document.querySelector(".back-to-top");

    let headerVisible = false;
    let topVisible = false;


    const searchButton = (e) => {
        e.preventDefault();
        menu.classList.toggle("menu-disabled");
        headerSearch.classList.toggle("search-active");
        e.stopPropagation()
    }
    const loginButton = (e) => {
        e.preventDefault();
        modalWindow.style.display = "block";
        e.stopPropagation()
    }

    header.addEventListener("click", (e) => {

        if (e.target.id === "search") {
            searchButton(e);
            return;
        }
        if (e.target.id === "quick-search-input") {
            return;
        }
        // Restore navbar
        if (menu.classList.contains("menu-disabled")) {
            menu.classList.remove("menu-disabled");
            headerSearch.classList.toggle("search-active");
        }
         if (e.target.id === "login" && e.target.textContent === "Login") {

            loginButton(e);
        }
         else if (e.target.id === "login" && e.target.textContent === "Logout") {
             e.target.textContent = "Login";
         }
         if (e.target.id === "login-item") {
             loginButton(e);
         }
         if (e.target.id === "logout-item") {
             e.target.style.display = "none";
             document.querySelector('#login-item').style.display = "flex";
         }

    });
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target === modalWindow || event.target === closeBtn || event.target.id === 'cancel') {
            modalWindow.style.display = "none";
        }
    }
    // Form validation
    validateForm(formLogin);

    // Hamburger
    hamburgerHandler();

    // Hero slider
    const Heroswiper = new Swiper(".hero-swiper", {
        loop: true,
        speed: 1000,
        effect: "fade",
        lazy: true,
        pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
        },
        /*
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
         */
    });
    // Main slider
    const Mainswiper = new Swiper(".main-swiper", {
        loop: true,
        speed: 1000,
        effect: "fade",
        lazy: true,
        pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
        },
    });

    let timerId = setInterval( () => {
        Heroswiper.slideNext();
        Mainswiper.slideNext();
    }, 4000)

    const backToTopObserver = () => {
        if (window.scrollY > 500 && !topVisible) {
            backToTop.classList.add("active");
            topVisible = true;
        }
        else if (window.scrollY <= 500 && topVisible) {
            backToTop.classList.remove("active");
            topVisible = false;
        }
    };

    function headerObserver(e) {

        if (window.scrollY > 0 && !headerVisible) {
            header.classList.add('is-active');
            headerVisible = true;
        }
        else if (window.scrollY === 0 && headerVisible) {
            header.classList.remove('is-active');
            headerVisible = false;
        }
    }
    window.addEventListener("scroll", (e) => {
        headerObserver();
        backToTopObserver();
        setObserver('.slide-up', 'is-active');
    });
    //  Toggle Button
    toggleTheme();
});