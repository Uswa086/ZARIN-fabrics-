// Uswa Collections website JavaScript

document.addEventListener("DOMContentLoaded", function () {
    // WhatsApp order links
    const orderButtons = document.querySelectorAll(".order");

    orderButtons.forEach(function (button) {
        button.addEventListener("click", function (event) {
            event.preventDefault();

            const product = button.closest(".product");
            const productName = product.querySelector("h3").textContent;
            const productPrice = product.querySelector("strong").textContent;

            const message =
                "Assalam-o-Alaikum Uswa Collections! " +
                "I want to order " + productName +
                " (" + productPrice + "). Please confirm availability and delivery charges.";

            const whatsappURL =
                "https://wa.me/923157540218?text=" +
                encodeURIComponent(message);

            window.open(whatsappURL, "_blank");
        });
    });

    // Welcome message in browser console
    console.log("Welcome to Uswa Collections!");

    // Current year in footer
    const footer = document.querySelector("footer");

    if (footer) {
        footer.innerHTML =
            "<p>© " + new Date().getFullYear() +
            " Uswa Collections | Premium Unstitched Fabrics</p>";
    }
});
