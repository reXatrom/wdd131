// Product array
const products = [
    { id: "product1", name: "Product A" },
    { id: "product2", name: "Product B" },
    { id: "product3", name: "Product C" },
    { id: "product4", name: "Product D" }
];

document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById("product-name");

    // Populate the dropdown
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
});

// Dynamically display the current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();