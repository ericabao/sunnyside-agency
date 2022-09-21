const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu-mobile-wrap");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger-active");
    navMenu.classList.toggle("nav-menu-mobile-wrap-active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.remove("nav-menu-mobile-wrap-active");
}))