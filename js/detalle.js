// 1. Base de datos de productos COMPLETA
const productos = [
    // --- FILA 1 ---
    {
        id: 1,
        titulo: "Tarjeta de video Nvidia RTX 4060 TI",
        precio: "$ 326.543",
        precioAnterior: "$ 550.000",
        imagen: "https://http2.mlstatic.com/D_Q_NP_2X_646244-CBT91430388474_092025-V.webp",
        descripcion: "Potencia tu PC con la RTX 4060 TI. Ideal para gaming en 1080p y 1440p con DLSS 3.0. Rendimiento superior y bajo consumo."
    },
    {
        id: 2,
        titulo: "Máscara de la Purga con luces LED",
        precio: "$ 12.478",
        precioAnterior: "$ 18.000",
        imagen: "https://http2.mlstatic.com/D_Q_NP_2X_679226-MLA93084314252_092025-T.webp",
        descripcion: "Máscara ideal para Halloween y fiestas de disfraces. Cuenta con 3 modos de luz y funciona con pilas AA (no incluidas)."
    },
    {
        id: 3,
        titulo: "Procesador AMD Ryzen 7 5700g",
        precio: "$ 290.999",
        precioAnterior: "$ 340.000",
        imagen: "https://http2.mlstatic.com/D_Q_NP_2X_937737-MLA96137773911_102025-AB.webp",
        descripcion: "Procesador de 8 núcleos con gráficos integrados Radeon Vega. Excelente para gaming sin tarjeta de video dedicada."
    },
    {
        id: 4,
        titulo: "Alfajor Rasta Chocolate Negro Caja x18",
        precio: "$ 16.800",
        precioAnterior: "$ 20.000",
        imagen: "https://http2.mlstatic.com/D_Q_NP_2X_845119-MLA95676836550_102025-T.webp",
        descripcion: "El alfajor del momento. Relleno de abundante dulce de leche y bañado en chocolate negro de primera calidad."
    },
    {
        id: 5,
        titulo: "Luces De Navidad y Decorativas",
        precio: "$ 14.241",
        precioAnterior: "$ 22.000",
        imagen: "https://http2.mlstatic.com/D_Q_NP_2X_900968-MLA94805217128_102025-T.webp",
        descripcion: "Guirnalda de luces LED calidas tipo arroz. 10 metros de longitud, ideal para decorar el arbolito o habitaciones."
    },

    // --- FILA 2 (Los que te faltaban) ---
    {
        id: 6,
        titulo: "Disfraz Inflable Dinosaurio Trex",
        precio: "$ 113.063",
        precioAnterior: "$ 150.000",
        imagen: "https://http2.mlstatic.com/D_Q_NP_2X_627230-MLA89145742949_082025-T.webp",
        descripcion: "Divertido disfraz inflable de T-Rex. Talle único para adultos. Incluye inflador a pilas. Material resistente y ligero."
    },
    {
        id: 7,
        titulo: "Disfraz Esqueleto Halloween Con Máscara",
        precio: "$ 19.999",
        precioAnterior: "$ 25.000",
        imagen: "https://http2.mlstatic.com/D_Q_NP_2X_773593-MLA92177108064_092025-T.webp",
        descripcion: "Disfraz completo de esqueleto. Tela elástica y cómoda. Incluye la máscara rígida. Ideal para niños de 6 a 10 años."
    },
    {
        id: 8,
        titulo: "Disfraz Hombre Araña Spiderman",
        precio: "$ 14.999",
        precioAnterior: "$ 18.500",
        imagen: "https://http2.mlstatic.com/D_Q_NP_2X_858598-MLA89097990709_082025-T.webp",
        descripcion: "Traje clásico del Hombre Araña. Tela de poliéster respirable. Viene con máscara de tela separada."
    },
    {
        id: 9,
        titulo: "Bon o Bon Bombones de Chocolate 30u",
        precio: "$ 12.000",
        precioAnterior: "$ 15.000",
        imagen: "https://http2.mlstatic.com/D_Q_NP_2X_731095-MLA95497815580_102025-T.webp",
        descripcion: "Caja de 30 unidades de Bon o Bon clásico. Oblea rellena con pasta de maní y baño de chocolate con leche."
    },
    {
        id: 10,
        titulo: "Kit De Adornos De Navidad Esferas",
        precio: "$ 35.699",
        precioAnterior: "$ 42.000",
        imagen: "https://http2.mlstatic.com/D_Q_NP_2X_743825-MLA95637503001_102025-T.webp",
        descripcion: "Set completo de esferas navideñas en colores rojo y dorado. Incluye diferentes texturas (mate, brillo, glitter)."
    }// ... aquí estaban tus productos anteriores ...
    , {
        id: 11,
        titulo: "Juego de cartas de Dragon Ball Z Kai",
        precio: "$ 10.000",
        precioAnterior: "$ 14.500",
        imagen: "./images/main/dragonball.png", /* Asegúrate que esta ruta sea correcta en tu carpeta */
        descripcion: "Mazo de cartas coleccionables de Dragon Ball Z Kai. Edición limitada con ilustraciones exclusivas de los personajes de la saga. Ideal para jugar o coleccionar."
    }

];

// 2. Obtener el ID de la URL
const params = new URLSearchParams(window.location.search);
// Si no hay ID, asumimos que es el 1 para que no de error
const idUrl = parseInt(params.get('id'));

// 3. Buscar el producto en la base de datos
const productoEncontrado = productos.find(producto => producto.id === idUrl);

// 4. Mostrar la información en el HTML
if (productoEncontrado) {
    // Llenar datos de texto
    document.getElementById("titulo-producto").innerText = productoEncontrado.titulo;
    document.getElementById("precio-producto").innerText = productoEncontrado.precio;
    document.getElementById("precio-anterior").innerText = productoEncontrado.precioAnterior;
    document.getElementById("descripcion-producto").innerText = productoEncontrado.descripcion;

    // Cambiar las imágenes
    document.getElementById("img-principal").src = productoEncontrado.imagen;

    // Si tienes IDs para las miniaturas en el HTML:
    const mini1 = document.getElementById("img-mini-1");
    const mini2 = document.getElementById("img-mini-2");
    if (mini1) mini1.src = productoEncontrado.imagen;
    if (mini2) mini2.src = productoEncontrado.imagen;

    // Cambiar título de la pestaña
    document.title = productoEncontrado.titulo + " | Mercado Libre";

} else {
    // Si no encuentra el producto, muestra mensaje de error
    document.querySelector(".producto-container-principal").innerHTML = `
        <div style="text-align:center; padding: 50px;">
            <h1 style="color:#333;">¡Ups! No encontramos ese producto.</h1>
            <p style="color:#666;">Revisa que el enlace sea correcto.</p>
            <a href="index.html" style="color:#3483fa; text-decoration:none; font-weight:bold;">Volver al inicio</a>
        </div>
    `;
}