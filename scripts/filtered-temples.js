// Select the hamburger button and the menu
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

// Toggle the 'show' class on the menu when hamburger is clicked
hamburger.addEventListener('click', () => {
    menu.classList.toggle('show');
});

// Update Footer with Last Modified Date
const footerDate = document.getElementById('date');
footerDate.textContent = `Last Modified: ${document.lastModified}`;

const temples = [
    {
        templeName: "Aba Nigeria Temple",
        location: "Aba, Nigeria",
        dedicated: "2005, August 07",
        area: 11500,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-5087-main.jpg"
    },

    {
        templeName: "Accra Ghana Temple",
        location: "Accra, Ghana",
        dedicated: "2004, January 11",
        area: 17500,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg" 
    },

    {
        templeName: "Adelaide Australia Temple",
        location: "Adelaide, Australia",
        dedicated: "2000, June 15",
        area: 10700,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/adelaide-australia-temple/adelaide-australia-temple-4359-main.jpg" 
    },

    {
        templeName: "Albuquerque New Mexico Temple",
        location: "Albuquerque, New Mexico",
        dedicated: "2000, March 05",
        area: 34245,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/albuquerque-new-mexico-temple/albuquerque-new-mexico-temple-56335-main.jpg" 
    },

    {
        templeName: "Anchorage Alaska Temple",
        location: "Anchorage, Alaska",
        dedicated: "1999, January, 9-10",
        area: 11937,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/anchorage-alaska-temple/anchorage-alaska-temple-13886-main.jpg" 
    },

    {
        templeName: "Apia Samoa Temple",
        location: "Apia, Samoa",
        dedicated: "1983, August 5-7",
        area: 18691,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/apia-samoa-temple/apia-samoa-temple-13905-main.jpg" 
    },

    {
        templeName: "Arequipa Peru Temple",
        location: "Arequipa, Peru",
        dedicated: "2019, December 15",
        area: 26969,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/arequipa-peru-temple/arequipa-peru-temple-7186-main.jpg" 
    },

    {
        templeName: "Asuncion Paraguay Temple",
        location: "Asuncion, Paraguay",
        dedicated: "2002, May 19",
        area: 11906,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/asuncion-paraguay-temple/asuncion-paraguay-temple-6969-main.jpg" 
    },

    {
        templeName: "Atlanta Georgia Temple",
        location: "Atlanta, Georgia",
        dedicated: "1983, June 1-4",
        area: 34500,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/atlanta-georgia-temple/atlanta-georgia-temple-13940-main.jpg" 
    },
];

// Function to display temple cards
function displayTemples(filteredTemples) {
    const container = document.getElementById("temples-container");
    container.innerHTML = "";

    filteredTemples.forEach(temple => {
        const card = document.createElement("div");
        card.classList.add("temple-card");

        card.innerHTML = `
            <h2>${temple.templeName}</h2>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area} sq ft</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        `;

        container.appendChild(card);
    });
}

// Filtering Functions
document.getElementById("home").addEventListener("click", () => displayTemples(temples));
document.getElementById("old").addEventListener("click", () => {
    const oldTemples = temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900);
    displayTemples(oldTemples);
});
document.getElementById("new").addEventListener("click", () => {
    const newTemples = temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000);
    displayTemples(newTemples);
});
document.getElementById("large").addEventListener("click", () => {
    const largeTemples = temples.filter(t => t.area > 90000);
    displayTemples(largeTemples);
});
document.getElementById("small").addEventListener("click", () => {
    const smallTemples = temples.filter(t => t.area < 10000);
    displayTemples(smallTemples);
});

// Initialize page with all temples
displayTemples(temples);