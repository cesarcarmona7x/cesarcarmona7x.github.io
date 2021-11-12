window.onload = function () {
    var boton = document.getElementById("btnAceptar");
    var tfUsername = document.getElementById("username");
    var tfPassword = document.getElementById("password");
    boton.addEventListener('click', function () {
        let username = tfUsername.value;
        let password = tfPassword.value;
        let arregloUsuarios = [
            { id: 1, nombre: "Federica PLuche", imagen: "fede.jpg", username: "fedep", password: "123" },
            { id: 2, nombre: "Don Camerino", imagen: "dc.jpg", username: "camerino", password: "123" },
            { id: 3, nombre: "Bibi", imagen: "bibi.jpg", username: "bibi", password: "123" },
        ];
        var encontro=false;
        arregloUsuarios.forEach(usuario => {
            if (username.trim() == usuario.username && password.trim() == usuario.password) {
                encontro=true;
                localStorage.setItem("usuario",JSON.stringify(usuario));
                let fecha=new Date();
                localStorage.setItem("fecha",fecha.getFullYear()+"/"+(fecha.getMonth()+1)+"/"+fecha.getDate());
            }
        });
        if(encontro){
            location.href="./index.html";
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