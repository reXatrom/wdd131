// Select the hamburger button and the menu
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

// Toggle the 'show' class on the menu when hamburger is clicked
hamburger.addEventListener('click', () => {
    menu.classList.toggle('show');
});

// Get the current year
const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;

// Get the last modified date
const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = lastModified;
