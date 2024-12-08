document.addEventListener("DOMContentLoaded", function () {
    const backToTopBtn = document.getElementById("back-to-top-btn");

    window.addEventListener("scroll", function () {
        const scrollPosition = window.scrollY + window.innerHeight; // Posición actual del scroll + altura de la ventana
        const pageHeight = document.documentElement.scrollHeight; // Altura total de la página

        if (scrollPosition >= pageHeight - 10) {
            // Agrega la clase "show" cuando el usuario llega al final
            backToTopBtn.classList.add("show");
        } else {
            // Remueve la clase "show" cuando no está al final
            backToTopBtn.classList.remove("show");
        }
    });

    // Función para volver al inicio
    backToTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});


$(document).ready(function () {
    $(".mini-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: { items: 2 },  // 2 productos visibles en móvil
            576: { items: 3 }, // 3 productos visibles en tablet
            768: { items: 4 }  // 4 productos visibles en desktop
        }
    });
});
