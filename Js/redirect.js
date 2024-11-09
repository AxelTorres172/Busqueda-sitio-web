function redirectUser(role) {
    if (role === 'admin') {
        window.location.href = 'admin.html';
    } else if (role === 'normal') {
        window.location.href = 'index.html';
    } else {
        console.error('Role not recognized');
    }
}
