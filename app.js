function toggleMenu() {
    var contenedor = document.querySelector('.contenedorDeApartados');
    contenedor.classList.toggle('active');
}

function alertCampoNombre() {
    var customAlert = document.getElementById("contenedorAlerta");
    customAlert.style.display = "block";
}

function cerrarAlerta() {
    var customAlert = document.getElementById("contenedorAlerta");
    customAlert.style.display = "none";
}

function alertCampoAsunto(){
    var customAlert = document.getElementById("alertaAsunto");
    customAlert.style.display = "block";
}

function cerrarAlertAsunto() {
    var customAlert = document.getElementById("alertaAsunto");
    customAlert.style.display = "none";
}

function alertMensaje() {
    var customAlert = document.getElementById("alertaMensaje");
    customAlert.style.display = "block";
}

function cerrarAlertMensaje() {
    var customAlert = document.getElementById("alertaMensaje");
    customAlert.style.display = "none";
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('botonEnviar').addEventListener('click', function(event) {
        event.preventDefault();

        verificarCampoContacto();
    });
});

function verificarCampoContacto(){

    let campoNombre = document.getElementById('nombre').value;
    let correoForm = document.getElementById('email').value;
    let campoAsunto = document.getElementById('asunto').value;
    let campoMensaje = document.getElementById('mensaje').value;

    var expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(campoNombre.length > 50){
        alertCampoNombre();
        return false;
    } else {
    } if (campoAsunto.length > 50) {
        alertCampoAsunto();
        return false;
    } else {
    } if (campoMensaje.length > 300) {
        alertMensaje();
        return false;
    } else {

        if(campoNombre.length < 1 || campoAsunto.length < 1 || campoMensaje.length < 1){
            alert('Complete todos los campos');
        }

        if (expresionRegular.test(correoForm)) {
            console.log('Correo electrónico válido');

            if(campoNombre.length > 0 && campoAsunto.length > 0 && campoMensaje.length > 0){

                document.getElementById('botonEnviar').removeAttribute('disabled')
    
                let number = '1702734';
            
                let datosForm = `¡Hola! Vengo de tu Portafolio, estos son los datos, NOMBRE: ${campoNombre}, CORREO: ${correoForm}, ASUNTO: ${campoAsunto}, MENSAJE: ${campoMensaje}`
            
                var encriptado = encodeURIComponent(datosForm);
            
                var whatsappLink = "https://wa.me/52963" + number + "?text=" + encriptado;
            
                window.location.href = whatsappLink;
        
            }
        } else {
            alert('Ingrese un Correo Valido')
        }

        return true;

    } 

}