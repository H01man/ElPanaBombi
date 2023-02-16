/* const nombre = document.getElementById('nombre')
const password = document.getElementById('password')
const form = document.getElementById('form')
const error = document.getElementById('error1')

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    if (nombre.value.length == null){
        mostrar = 'Complete el campo "Nombre de usuario"'
        error.innerHTML = mostrar
    }
}) */

function enviar(){
    tot = 0
    const form = document.getElementById('form');
    var nombre = document.getElementById('nombre').value;
    var pass = document.getElementById('password').value;
    cant = nombre.split("")
    cantp = pass.split("")

    if(cant.length < 1 || cant.length < 1 && cantp < 1){
        alerta = document.createElement('div');
        alerta.className = "alert alert-danger mt-3"
        alerta.id = "error1"

        form.appendChild(alerta)
        document.getElementById('error1').innerHTML = "Ingrese los datos solicitados"
        tot = 1
        form.reset()
    }else {
        if(cantp < 1){
            alerta = document.createElement('div');
            alerta.className = "alert alert-danger mt-3"
            alerta.id = "error1"
    
            form.appendChild(alerta);
            document.getElementById('error1').innerHTML = "Ingrese la contraseña";
            tot = 1;
        }
    }

    if(tot == 0){
        window.location.href = "productos.html";
    }

    return 0;
}
