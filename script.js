function datos() {
    var nombres = document.getElementById("nombres").value;
    var apellidos = document.getElementById("apellidos").value;
    var email = document.getElementById("email").value;
    var fechanacimiento = document.getElementById("fechanacimiento").value;
    var f = document.getElementById("f").checked;
    var m = document.getElementById("m").checked;
    var estatura = document.getElementById("estatura").value;
    var peso = document.getElementById("peso").value;
    var deporte = document.getElementById("deporte").checked;

    /*
    var mensaje = "Nombres: " + nombres
    + "\nApellidos: " + apellidos
    + "\nCorreo electronico: " + email
    + "\nFecha de nacimiento: " + fechanacimiento
    + "\nEs mujer: " + f
    + "\nEs hombre: " + m
    + "\nEstatura: " + estatura + "m"
    + "\nPeso: " + peso + "Kg"
    + "\nHace deporte: " + deporte;

    console.log(mensaje);
    */

    var imc =  peso / (estatura**2);
    var obesidad = imc >= 30;
    alert("IMC: " + imc + "\nEs obeso: " + obesidad);

}