document.getElementById('recoveryForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const newPassword = document.getElementById('newPassword').value;
    const errorMsg = document.getElementById('errorMsg');
    const successMsg = document.getElementById('successMsg');

    const users = {
        admin: { username: 'Axelrt', password: 'admin123', role: 'admin' },
        normal: { username: 'user', password: 'user123', role: 'normal' }
    };

    // Validar si el usuario existe
    if (users.admin.username === username || users.normal.username === username) {
        if (users.admin.username === username) {
            users.admin.password = newPassword;
        } else {
            users.normal.password = newPassword;
        }

        // Mostrar mensaje de confirmación y redirigir al inicio después de aceptar
        alert('Contraseña actualizada correctamente.');
        window.location.href = '/html/index.html'; // Redirige al inicio después de aceptar
    } else {
        errorMsg.innerText = 'Usuario no encontrado.';
        successMsg.innerText = '';
    }
});
