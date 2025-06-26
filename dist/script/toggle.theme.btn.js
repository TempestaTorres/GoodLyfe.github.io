function toggleTheme() {
    'use strict'

    const body = document.querySelector("body");
    const toggleButton = document.querySelector(".toggle-btn");

    toggleButton.addEventListener("click", (e) => {
        e.preventDefault();
        toggleButton.classList.toggle("toggled");
        body.classList.toggle("new-theme");
        e.stopPropagation();
    });
}