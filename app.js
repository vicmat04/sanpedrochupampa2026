// CONFIGURACIÓN DE LA CUENTA REGRESIVA
// Fecha objetivo: Solemnidad de San Pedro, 29 de Junio de 2026 a las 19:00 horas.
const targetDate = new Date("June 29, 2026 19:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    // Si la fecha ya pasó
    if (difference < 0) {
        document.getElementById("countdown").innerHTML = "<p style='font-weight:bold; color:#8b0000; font-size:20px;'>¡Vivamos con Alegría la Solemnidad!</p>";
        return;
    }

    // Cálculos de tiempo
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Renderizado en pantalla con formato de dos dígitos
    document.getElementById("days").innerText = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;
}

// Inicializar y ejecutar cada segundo
setInterval(updateCountdown, 1000);
updateCountdown();





// EFECTO ACTIVO EN LA NAVEGACIÓN (Resaltar dónde está parado el usuario)
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section, header');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSectionId = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 120) {
            currentSectionId = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
            link.classList.add('active');
        }
    });
});


// RESALTADO DINÁMICO DEL DÍA ACTUAL
function highlightCurrentDay() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const todayString = `${year}-${month}-${day}`;

    const targets = document.querySelectorAll('[data-date]');
    targets.forEach(target => {
        if (target.getAttribute('data-date') === todayString) {
            target.classList.add('today-highlight');
        } else {
            target.classList.remove('today-highlight');
        }
    });
}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    highlightCurrentDay();
    startCapillaCarousel();
});

// CARRUSEL AUTOMÁTICO DE FOTOS DE LA CAPILLA
function startCapillaCarousel() {
    const slides = document.querySelectorAll('.carousel-slide');
    if (slides.length <= 1) return;

    let currentSlideIndex = 0;

    setInterval(() => {
        // Quitar active del slide actual
        slides[currentSlideIndex].classList.remove('active');

        // Siguiente slide
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;

        // Añadir active al nuevo slide
        slides[currentSlideIndex].classList.add('active');
    }, 4000); // Cambiar cada 4 segundos
}