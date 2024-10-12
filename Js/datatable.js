$(document).ready(function() {
    // Inicializa DataTables con la barra de búsqueda
    $('#productos-table').DataTable({
        "searching": true,  // Permitir búsqueda
        "paging": true,     // Paginación
        "info": false,      // Ocultar información de registros
        "lengthChange": false, // No permitir cambiar el número de registros mostrados
        "pageLength": 5     // Mostrar 5 productos por página
    });

    // Hacer que la barra de búsqueda de la cabecera controle la búsqueda de DataTables
    $('#search').keyup(function() {
        $('#productos-table').DataTable().search($(this).val()).draw();
    });
});
