window.onload = function () {
    var boton = document.getElementById("btnAceptar");
    var tfUsername = document.getElementById("username");
    var tfPassword = document.getElementById("password");
    boton.addEventListener('click', function () {
        let username = tfUsername.value;
        let password = tfPassword.value;
        if (username.trim() == "admin" && password.trim() == "123") {
            alert("LISTO CALISTO");
        }
        else {
            document.getElementById("error").innerHTML = "Credenciales incorrectas";
            tfUsername.style.backgroundColor = '#FF0000';
            tfPassword.style.backgroundColor = '#FF0000';
        }
    });
}
function limpiar() {
    var tfUsername = document.getElementById("username");
    var tfPassword = document.getElementById("password");
    tfUsername.style.backgroundColor = '#FFFFFF';
    tfPassword.style.backgroundColor = '#FFFFFF';
}