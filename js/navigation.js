/* ==========================================
   EC Framework v1.0
   Navigation
========================================== */

document.addEventListener("click", function (e) {

    const toggle = document.querySelector(".menu-toggle");

    if (!toggle) return;

    if (e.target === toggle) {

        const nav = document.querySelector("nav");

        nav.classList.toggle("show");

    }

});