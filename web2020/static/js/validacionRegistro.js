(function() {
    window.onload = function() {

    $("#divError").hide();
    $("#formularioUsuario").submit(function(event) {
    var nombre = document.getElementById("nombre").value;
	if (nombre == "") {
        $("#divError").show();
        $("#contenidoError").text("Nombre de usuario vacío");
        event.preventDefault();

	}
	n = nombre.length
    if (n < 8) {
        $("#divError").show();
        $("#contenidoError").text("Nombre demasiado corto, se requieren 8 carácteres mínimos.");
        event.preventDefault();
	}

	var nickname = document.getElementById("nickname").value;
	if (nickname == "") {
        $("#divError").show();
        $("#contenidoError").text("Nickname vacío");
        event.preventDefault();
	}

	n2 = nickname.length
    if (n2 < 8) {
        $("#divError").show();
        $("#contenidoError").text("Nickname demasiado corto, se requieren 8 carácteres mínimos.");
        event.preventDefault();
	}

	var contrasena = document.getElementById("contraseña").value;

    n3 = contrasena.length
    if (n3 < 8) {
        $("#divError").show();
        $("#contenidoError").text("Contraseña demasiado corta, se requieren 8 carácteres mínimos.");
        event.preventDefault();
	}

	if (contrasena == "") {
        $("#divError").show();
        $("#contenidoError").text("Contraseña vacía");
        event.preventDefault();
	}


	var Ccontrasena = document.getElementById("Ccontraseña").value;
	if (Ccontrasena != contrasena) {
        $("#divError").show();
        $("#contenidoError").text("Las contraseñas no coinciden.");
        event.preventDefault();
	}



	var correo = document.getElementById("correo").value;
	if (correo == "") {
        $("#divError").show();
        $("#contenidoError").text("El correo esta vacio.");
        event.preventDefault();
	}





    });


    }

})();