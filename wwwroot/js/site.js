var mensaje = document.getElementById("mensaje");
mensaje.innerHTML = "";
mensaje.style.display = "none";

function validarCuenta() {
    var usuario = document.getElementById("usuario").value;
    var contrasena = document.getElementById("contrasena").value;
    var mensaje = document.getElementById("mensaje");
    var returnVal = true;
    if (usuario === "" || contrasena === "") {
        mensaje.innerHTML = "Por favor, complete todos los campos.";
        mensaje.style.display = "block";
        returnVal = false;
    } else{
        mensaje.innerHTML = "";
        mensaje.style.display = "none";
    }
    return returnVal;
}

function validarRegistro() {
    var nombreUsuario = document.getElementById("nombreUsuario").value;
    var contrasena = document.getElementById("contrasena").value;
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var tipoUsuario = document.querySelector('input[name="TipoUsuario"]:checked');
    var mensaje = document.getElementById("mensaje");
    var soloLetrasYNumeros = /^[a-zA-Z0-9]+$/;
    var soloLetrasYEspacios = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

    var returnVal = true;

    if (nombreUsuario === "" || contrasena === "" || nombre === "" || apellido === "" || !tipoUsuario) {
        mensaje.innerHTML = "Por favor, complete todos los campos.";
        mensaje.style.display = "block";
        returnVal = false;
    } 
    else if (contrasena.length < 8) {
        mensaje.innerHTML = "La contraseña debe tener al menos 8 caracteres.";
        mensaje.style.display = "block";
        returnVal = false;
    }
    else if (nombreUsuario.length < 3) {
        mensaje.innerHTML = "El nombre de usuario debe tener al menos 3 caracteres.";
        mensaje.style.display = "block";
        returnVal = false;
    }
    else if (!soloLetrasYNumeros.test(nombreUsuario)) {
        mensaje.innerHTML = "El nombre de usuario solo puede contener letras y números, sin espacios ni caracteres especiales.";
        mensaje.style.display = "block";
        returnVal = false;
    }
    else if (!soloLetrasYEspacios.test(nombre)) {
        mensaje.innerHTML = "El nombre solo puede contener letras y espacios, sin caracteres especiales.";
        mensaje.style.display = "block";
        returnVal = false;
    }
    else if (!soloLetrasYEspacios.test(apellido)) {
        mensaje.innerHTML = "El apellido solo puede contener letras y espacios, sin caracteres especiales.";
        mensaje.style.display = "block";
        returnVal = false;
    } else {
        mensaje.innerHTML = "";
        mensaje.style.display = "none";
    }
    
    return returnVal;
}