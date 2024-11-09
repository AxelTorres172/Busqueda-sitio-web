document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('errorMsg');

    // Definimos los usuarios y sus roles
    const users = {
        admin: { username: 'Axelrt', password: 'admin123', role: 'admin' },
        normal: { username: 'user', password: 'user123', role: 'normal' }
    };

    // Validación de credenciales
    if (username === users.admin.username && password === users.admin.password) {
        alert('Inicio de sesión correcto. Redirigiendo al inicio...');
        localStorage.setItem('role', users.admin.role); // Guardamos el rol en localStorage
        window.location.href = '/html/index.html'; // Redirigimos a index.html
    } else if (username === users.normal.username && password === users.normal.password) {
        alert('Inicio de sesión correcto. Redirigiendo al inicio...');
        localStorage.setItem('role', users.normal.role); // Guardamos el rol en localStorage
        window.location.href = '/html/index.html'; // Redirigimos a index.html
    } else {
        errorMsg.innerText = 'Usuario o contraseña incorrectos';
    }
});
