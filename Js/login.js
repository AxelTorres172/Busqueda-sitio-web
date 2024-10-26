document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe y recargue la página

    // Obtiene los valores de usuario y contraseña
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validación de credenciales (ejemplo simple)
    if (username === 'Axelrt' && password === '12345') {
        alert('Inicio de sesión correcto. Redirigiendo al inicio...');
        window.location.href = '/html/index.html'; // Redirige a la página de inicio
    } else {
        // Si las credenciales son incorrectas, muestra un mensaje de error
        document.getElementById('errorMsg').innerText = 'Usuario o contraseña incorrectos';
    }
});
