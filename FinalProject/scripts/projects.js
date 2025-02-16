const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav_links");
const menuBtnIcon = menuBtn.querySelector("i");

console.log(menuBtn, navLinks, menuBtnIcon);

menuBtn.addEventListener("click", (e) => {
    console.log("button clicked!");
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header_container h1", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".header_container p", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".header_container form", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".feature_card", {
    duration: 1000,
    interval: 500,
});

ScrollReveal().reveal(".destination_card", {
    ...scrollRevealOption,
    interval: 500,
});

const swiper = new Swiper(".swiper", {
    slidesPerView: "auto",
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
    },
});