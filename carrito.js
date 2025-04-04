window.onload = function() {
    actualizarCarrito();  
};

function actualizarCarrito() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    let productosAgrupados = {};

    carrito.forEach((producto) => {
        if (productosAgrupados[producto.nombre]) {
            productosAgrupados[producto.nombre].cantidad += 1;
            productosAgrupados[producto.nombre].precioTotal += producto.precio;
        } else {
            productosAgrupados[producto.nombre] = { ...producto, cantidad: 1, precioTotal: producto.precio };
        }
    });

    let carritoAgrupado = Object.values(productosAgrupados);

    if (carritoAgrupado.length === 0) {
        document.querySelector('.lista-productos').innerHTML = '';  
        document.getElementById('total-amount').innerText = '$0.00';  
        document.querySelector(".contenedor-costos").style.display = "none";  
        document.querySelector(".boton-pago").style.display = "none";  
    } else {
        let listaProductos = document.querySelector('.lista-productos');
        let totalCompra = 0;

        listaProductos.innerHTML = '';  

        carritoAgrupado.forEach((producto, index) => {
            let productoDiv = document.createElement('div');
            productoDiv.classList.add('producto-en-carrito');
            productoDiv.innerHTML = `
                <p>${producto.nombre} (x${producto.cantidad})</p>
                <p>$${producto.precioTotal.toFixed(2)}</p>  
                <button class="boton-eliminar" onclick="eliminarDelCarrito(${index})">
                    <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#1f1f1f">
                        <path d="m251.33-204.67-46.66-46.66L433.33-480 204.67-708.67l46.66-46.66L480-526.67l228.67-228.66 46.66 46.66L526.67-480l228.66 228.67-46.66 46.66L480-433.33 251.33-204.67Z"/>
                    </svg>
                </button>
            `;
            listaProductos.appendChild(productoDiv);

            totalCompra += producto.precioTotal;
        });

        document.getElementById('total-amount').innerText = '$' + totalCompra.toFixed(2);
        document.querySelector(".contenedor-costos").style.display = "block";  
        document.querySelector(".boton-pago").style.display = "block";  
    }
}

function eliminarDelCarrito(index) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    carrito.splice(index, 1);  

    localStorage.setItem('carrito', JSON.stringify(carrito));

    actualizarCarrito();
}

function agregarAlCarrito(producto) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    
    const productoExistente = carrito.find(p => p.nombre === producto.nombre);

    if (productoExistente) {
        productoExistente.cantidad += 1;
        productoExistente.precioTotal += producto.precio;
    } else {
        carrito.push({ ...producto, cantidad: 1, precioTotal: producto.precio });
    }

    localStorage.setItem('carrito', JSON.stringify(carrito));

    actualizarCarrito();
}

function irAlPago() {
    document.querySelectorAll(".boton-eliminar").forEach(boton => {
        boton.style.display = "none";  
    });

    const listaProductos = document.querySelector('.lista-productos');
    listaProductos.style.display = "block";  

    document.getElementById("mensaje-exitoso").style.display = "block";

    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let totalCompra = 0;
    let productosDiv = "";

    carrito.forEach((producto) => {
        productosDiv += `<p>${producto.nombre} (x${producto.cantidad}) - $${producto.precioTotal.toFixed(2)}</p>`;
        totalCompra += producto.precioTotal;
    });

    document.getElementById("productos-pagar").innerHTML = productosDiv;
    document.getElementById('total-amount').innerText = '$' + totalCompra.toFixed(2);

    localStorage.removeItem('carrito');
    
    listaProductos.innerHTML = '';
    document.querySelector(".boton-pago").style.display = "none";  
}
