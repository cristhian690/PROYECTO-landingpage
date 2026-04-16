// Función para manejar las animaciones de revelado (Scroll Reveal)
const activarAnimaciones = () => {
    // Seleccionamos todas las secciones y las tarjetas del blog/servicios
    const elementos = document.querySelectorAll('section, .card, .blog-card, .nosotros-grid');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Si el elemento entra en el campo de visión
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.15 // Se activa cuando el 15% del elemento es visible
    });

    elementos.forEach(el => {
        // Primero aseguramos que tengan la clase que los oculta
        el.classList.add('hidden-fade');
        // Los ponemos a observar
        observer.observe(el);
    });
};

// Funcionalidad para el menú hamburguesa (Responsive)
const configurarMenu = () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('activo');
        });
    }
};

// Ejecutar cuando el documento esté listo
document.addEventListener('DOMContentLoaded', () => {
    activarAnimaciones();
    configurarMenu();
});