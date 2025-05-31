// Contador de días juntos (desde el 5 de abril de 2025, 4 PM)
function updateLoveCounter() {
    const startDate = new Date("April 5, 2025 16:00:00").getTime();
    const now = new Date().getTime();
    const distance = now - startDate;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days.toString().padStart(2, "0");
    document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
}

setInterval(updateLoveCounter, 1000);
updateLoveCounter();

// Carrusel automático de imágenes
const carouselSlide = document.querySelector(".carousel-slide");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const dotsContainer = document.querySelector(".carousel-dots");

// Cargar imágenes dinámicamente (1.jpg, 2.jpg, ..., 35.jpg)
let currentIndex = 0;
const totalImages = 35;
let intervalId;

function loadImages() {
    for (let i = 1; i <= totalImages; i++) {
        const img = document.createElement("img");
        img.src = `../assets/SongsImages/${i}.jpg`;
        img.alt = `Fragmento ${i}`;
        carouselSlide.appendChild(img);
    }

    // Crear puntos indicadores
    for (let i = 0; i < totalImages; i++) {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        dot.addEventListener("click", () => {
            currentIndex = i;
            updateCarousel();
            resetInterval();
        });
        dotsContainer.appendChild(dot);
    }

    updateDots();
}

function updateCarousel() {
    carouselSlide.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateDots();
}

function updateDots() {
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentIndex);
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarousel();
}

function startInterval() {
    intervalId = setInterval(nextSlide, 4000); // Cambia cada 4 segundos
}

function resetInterval() {
    clearInterval(intervalId);
    startInterval();
}

// Event listeners
nextBtn.addEventListener("click", () => {
    nextSlide();
    resetInterval();
});

prevBtn.addEventListener("click", () => {
    prevSlide();
    resetInterval();
});

// Iniciar el carrusel
loadImages();
startInterval();

// Pausar el carrusel al pasar el mouse (opcional)
carouselSlide.addEventListener("mouseenter", () => {
    clearInterval(intervalId);
});

carouselSlide.addEventListener("mouseleave", () => {
    startInterval();
});


document.addEventListener('DOMContentLoaded', () => {
    const songs = [
        './assets/SongsAudios/AURORA - Exist For Love.mp3',
        './assets/SongsAudios/BWU - Hazel Eyes.mp3',
        './assets/SongsAudios/Damiano David - Angel.mp3'
    ];

    const player = document.getElementById('audioPlayer');

    function playRandomSong() {
        const randomIndex = Math.floor(Math.random() * songs.length);
        player.src = songs[randomIndex];
        player.play();
    }

    // Reproduce una al cargar
    playRandomSong();

    // Cuando termina, reproduce otra
    player.addEventListener('ended', playRandomSong);
});
