
const formulario = document.getElementById('formContacto');
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();
    const nombreUsuario = document.getElementById('nombre').value;
    const emailUsuario = document.getElementById('email').value
    const mensajeRespuesta = document.getElementById('mensajeRespuesta');
    mensajeRespuesta.style.color = "#008000"; 
    mensajeRespuesta.innerText = `¡Gracias, ${nombreUsuario}! Hemos recibido tu solicitud. Te enviaremos la cotización a ${emailUsuario} muy pronto.`;
    formulario.reset();
    setTimeout(function() {
        mensajeRespuesta.innerText = '';
    }, 6000);
});