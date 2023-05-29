const buttonMenu = document.getElementsByClassName('icon__menu')[0];
const buttonEnviar = document.getElementById('enviar');
buttonMenu.addEventListener('click',()=>{
    const menuShow = document.getElementsByClassName('navbar__menu__v2')[0];
    menuShow.classList.toggle('navbar__menu__v2_show');
});
/*
buttonEnviar.addEventListener('click', (e)=>{
    e.preventDefault();
    const inputNombre = document.getElementById('nombre').value;
    const inputCorreo = document.getElementById('correo').value;
    const inputAsunto = document.getElementById('asunto').value;
    const inputMensaje = document.getElementById('mensaje').value;
    let estado = true;
    if(inputNombre.length < 2){
        estado = false;
    }
    if(inputCorreo.length < 2){
        estado = false;
    }
    if(inputAsunto.length < 2){
        estado = false;
    }
    if(inputMensaje.length < 2){
        estado = false;
    }
    if(estado){

    }else{
        alert('Los Datos Son muy cortos');
    }
})

*/