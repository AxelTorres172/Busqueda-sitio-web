// Carrusel de imágenes
const images = ["/img/snacks.jpg", "/img/energy-drink.jpg", "/img/other-product.jpg"];
let currentImageIndex = 0;

function showImage(index) {
    const imgElement = document.getElementById('carrusel-img');
    imgElement.src = images[index];
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
}

// Función de favoritos
function toggleFavorito(button) {
    if (button.innerText === "★ Añadir a Favoritos") {
        button.innerText = "★ En Favoritos";
    } else {
        button.innerText = "★ Añadir a Favoritos";
    }
}

// Fechas de finalización de las promociones
const countdowns = [
    new Date("2024-10-31T23:59:59").getTime(), // Descuento 50% en Snacks
    new Date("2024-11-15T23:59:59").getTime()  // 3x2 en Bebidas Energéticas
];

// Función para actualizar los contadores
function updateCountdown() {
    countdowns.forEach((countdown, index) => {
        const now = new Date().getTime();
        const distance = countdown - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById(`contador${index + 1}`).innerHTML =
            `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (distance < 0) {
            clearInterval(x);
            document.getElementById(`contador${index + 1}`).innerHTML = "¡La oferta ha terminado!";
        }
    });
}

// Actualizar contador cada segundo
setInterval(updateCountdown, 1000);

// Hover dinámico en los recuadros de promociones
const promociones = document.querySelectorAll('.promocion');

promociones.forEach(promo => {
    promo.addEventListener('mouseover', () => {
        promo.classList.add('hover'); // Añade la clase 'hover' al pasar el mouse
    });

    promo.addEventListener('mouseout', () => {
        promo.classList.remove('hover'); // Quita la clase 'hover' al retirar el mouse
    });
});
