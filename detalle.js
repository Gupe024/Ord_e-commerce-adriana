window.onload = function() {
    let productoSeleccionado = JSON.parse(localStorage.getItem("productoSeleccionado"));

    if (productoSeleccionado) {
        document.getElementById("imagen-producto").src = productoSeleccionado.imagen;
        document.getElementById("nombre-producto").textContent = productoSeleccionado.nombre;
        document.getElementById("descripcion-producto").textContent = productoSeleccionado.descripcion;
        document.getElementById("precio-producto").textContent = productoSeleccionado.precio;
    } else {
        window.location.href = "Inicio.html"; 
    }
};

function agregarAlCarrito() {
    let nombreProducto = document.getElementById("nombre-producto").textContent;
    let precioProducto = document.getElementById("precio-producto").textContent;
    let idProducto = localStorage.getItem("productoSeleccionadoId");  

    let precioNumerico = parseFloat(precioProducto.replace('$', '').trim());

    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let producto = {
        id: idProducto,       
        nombre: nombreProducto,
        precio: precioNumerico 
    };

    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));

    alert(nombreProducto + ' ha sido agregado al carrito.');
}

function regresar() {
    window.history.back();
}