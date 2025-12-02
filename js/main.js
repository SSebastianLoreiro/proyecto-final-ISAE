const carrusel = document.querySelector(".carrusel");
const imagen = document.getElementById("imagen");
const botonAtras = document.querySelector(".atras");
const botonSiguiente = document.querySelector(".siguiente");
const boton_Carrusel = document.querySelectorAll(".atras, .siguiente");
const dots = document.querySelectorAll(".dot");

carrusel.addEventListener("mouseenter", () => {
    boton_Carrusel.forEach(boton => boton.classList.add("activo"));
});
carrusel.addEventListener("mouseleave", () => {
    boton_Carrusel.forEach(boton => boton.classList.remove("activo"));
});

const imagenes = ["./images/carrusel/fondo1.png",
    "./images/carrusel/fondo2.png",
    "./images/carrusel/fondo3.png",
    "./images/carrusel/fondo4.png",
    "./images/carrusel/fondo5.png",
    "./images/carrusel/fondo6.png",
    "./images/carrusel/fondo7.png"];

function actualizarIndicadores(indice) {
    dots.forEach((dot, i) => {
        if (i === indice) {
            dot.classList.add("actual");
        } else {
            dot.classList.remove("actual");
        }
    });
}
let indice_actual = 0;
function mostrar_imagen(indice) {
    // Fade out
    imagen.style.opacity = 0;

    setTimeout(() => {
        // Cambiar la imagen después del fade out
        imagen.src = imagenes[indice];
        // Esperar un poquito para asegurarse de que la nueva imagen se haya cargado
        imagen.onload = () => {
            imagen.style.opacity = 1; //fade in
        };

    }, 200); // 500 ms = coincide con la mitad del tiempo de transición CSS
    actualizarIndicadores(indice);
}

botonSiguiente.addEventListener("click", () => {
    indice_actual++;
    if (indice_actual >= imagenes.length) {
        indice_actual = 0;
    }
    mostrar_imagen(indice_actual);
});

botonAtras.addEventListener("click", () => {
    indice_actual--; // le restamos 1 al indice actual
    if (indice_actual < 0) { // si el indice actual es menor a 0
        indice_actual = imagenes.length - 1; // le asignamos el valor del ultimo elemento del arreglo de imagenes
    }
    mostrar_imagen(indice_actual);

});

