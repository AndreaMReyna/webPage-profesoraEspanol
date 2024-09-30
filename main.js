// Validación del formulario de contacto
document.querySelector('.contacto__formulario').addEventListener('submit', function (event) {
    const nombre = document.querySelector('.contacto__campo[type="text"]').value;
    const correo = document.querySelector('.contacto__campo[type="email"]').value;
    const mensaje = document.querySelector('.contacto__campo--textarea').value;

    if (!nombre || !correo || !mensaje) {
        event.preventDefault(); // Evita el envío del formulario
        alert('Por favor, completa todos los campos.');
    }
});

// Manejo del evento de búsqueda
document.querySelector('form[role="search"]').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita el envío del formulario
    const query = event.target.querySelector('input[type="search"]').value;
    console.log(`Buscando: ${query}`);
});

// Mostrar un mensaje al hacer clic en los botones "Explorar"
const botonesExplorar = document.querySelectorAll('.btn.btn-primary');
botonesExplorar.forEach(boton => {
    boton.addEventListener('click', function () {
        alert('¡Explorando más sobre ' + this.parentElement.querySelector('.card-title').innerText + '!');
    });
});

// Animación de entrada en el carrusel
const carouselItems = document.querySelectorAll('.carousel-item');
carouselItems.forEach(item => {
    item.addEventListener('slide.bs.carousel', function () {
        item.classList.add('fade-in');
    });
});

// Frase aleatoria al cargar la página
const frases = [
    '"La vida es una aventura, atrévete."',
    '"El aprendizaje nunca agota la mente."',
    '"No se puede descubrir nuevos océanos a menos que se tenga el valor de perder de vista la costa."'
];

document.addEventListener('DOMContentLoaded', () => {
    const fraseElemento = document.querySelector('.phrase h1');
    fraseElemento.textContent = frases[Math.floor(Math.random() * frases.length)];
});