const activarAnimaciones = () => {
    const elementos = document.querySelectorAll('section, .card, .blog-card, .nosotros-grid');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.15
    });

    elementos.forEach(el => {
        el.classList.add('hidden-fade');
        observer.observe(el);
    });
};

const configurarMenu = () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('activo');
        });
    }
};

const configurarNavbarScroll = () => {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
};


const enviarFormulario = (event) => {
    event.preventDefault();
    const exito = document.getElementById('form-exito');
    if (exito) {
        exito.textContent = ' ¡Mensaje enviado! Te contactaremos pronto.';
        document.getElementById('formulario').reset();
        setTimeout(() => { exito.textContent = ''; }, 5000);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    activarAnimaciones();
    configurarMenu();
    configurarNavbarScroll();
});