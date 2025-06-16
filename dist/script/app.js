document.addEventListener("DOMContentLoaded", () => {
    'use strict'

    const header = document.querySelector(".header");
    const modalWindow = document.querySelector(".modal-window");
    const closeBtn = document.querySelector(".close");
    const menu = document.querySelector(".menu");
    const headerSearch = document.querySelector(".header-search");
    const formLogin = document.querySelector("#form-login");

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
    window.addEventListener("scroll", (e) => {

    });
});