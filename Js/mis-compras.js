document.querySelectorAll('.producto').forEach(producto => {
    // Eliminar producto
    const eliminarBtn = producto.querySelector('.eliminar-btn');
    eliminarBtn.addEventListener('click', function() {
        producto.remove(); // Elimina el producto del DOM
        alert('Producto eliminado.');
    });

    // Marcar como recibido
    const recibidoBtn = producto.querySelector('.recibido-btn');
    recibidoBtn.addEventListener('click', function() {
        producto.style.backgroundColor = '#DFF0D8'; // Cambia el fondo a verde claro
        alert('Producto marcado como recibido.');
    });

    // Cambiar estado de envío
    const estadoEnvioBtn = producto.querySelector('.estado-envio-btn');
    estadoEnvioBtn.addEventListener('click', function() {
        const estadoActual = estadoEnvioBtn.textContent;
        if (estadoActual === 'Cambiar Estado de Envío') {
            estadoEnvioBtn.textContent = 'En Camino';
            estadoEnvioBtn.style.backgroundColor = '#FFA500'; // Cambia a naranja
        } else if (estadoActual === 'En Camino') {
            estadoEnvioBtn.textContent = 'Entregado';
            estadoEnvioBtn.style.backgroundColor = '#28A745'; // Cambia a verde
        } else {
            estadoEnvioBtn.textContent = 'Cambiar Estado de Envío';
            estadoEnvioBtn.style.backgroundColor = '#1C5D99'; // Regresa al color original
        }
    });
});
