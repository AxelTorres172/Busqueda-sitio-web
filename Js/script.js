// Escuchar los cambios en los inputs de cantidad
document.querySelectorAll('input[type="number"]').forEach(input => {
    input.addEventListener('change', actualizarTotal);
});

// Función para actualizar el total
function actualizarTotal() {
    let totalCarrito = 0;

    // Iterar sobre cada producto en el carrito
    document.querySelectorAll('.producto-carrito').forEach(producto => {
        let cantidad = producto.querySelector('input[type="number"]').value;
        let precioUnitario = parseFloat(producto.querySelector('.precio-unitario').innerText.replace('$', ''));
        let precioTotalProducto = cantidad * precioUnitario;

        // Actualizar el total del producto en el DOM
        producto.querySelector('.total-producto').innerText = `$${precioTotalProducto.toFixed(2)}`;

        // Sumar al total del carrito
        totalCarrito += precioTotalProducto;
    });

    // Actualizar el total del carrito (si tienes un campo para el total)
    document.getElementById('total-carrito').innerText = `Total Carrito: $${totalCarrito.toFixed(2)}`;
}

