function registrar(){
    errores = 0

    var form = document.getElementById('formulario_registro');
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var correo = document.getElementById('email').value;
    var celular = document.getElementById('tel').value;
    var direccion = document.getElementById('direct').value;
    var usuario = document.getElementById('user').value;
    var contraseña = document.getElementById('password').value;

    cantnombre = nombre.split("");
    cantapellido = apellido.split("");
    cantcorreo = correo.split("");
    cantcelular = celular.split("");
    cantdireccion = direccion.split("");
    cantusuario = usuario.split("");
    cantcontraseña = contraseña.split("");

    if(cantnombre.length == 0 && cantapellido.length == 0 && cantcorreo == 0 && cantcelular == 0 && cantdireccion == 0 && cantusuario == 0 && cantcontraseña == 0){
        alert('Complete todos los campos')
        errores = 1
    }else{
        if(cantnombre.length == 0){
            alert('Ingrese su nombre')
            errores = 1
        }else{
            if(cantapellido.length == 0){
                alert('Ingrese su apellido')
                errores = 1
            }else{
                if(cantcorreo.length == 0){
                    alert('Ingrese el correo')
                    errores = 1
                }else{
                    if(cantcelular.length == 0){
                        alert('Ingrese su numero telefonico')
                        errores = 1
                    }else{
                        if(cantdireccion.length == 0){
                            alert('Ingrese su direccion')
                            errores = 1
                        }else{
                            if(cantusuario.length == 0){
                                alert('Elija un nombre de usuario')
                                errores = 1
                            }else{
                                if(cantcontraseña.length == 0){
                                    alert('Elija una contraseña')
                                    errores = 1
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    if(errores == 0){
        alerta = document.createElement('div')
        alerta.className = "alert alert-success"
        alerta.id = "confir"

        form.appendChild(alerta)
        document.getElementById('confir').innerHTML = "Registro exitoso"
        form.reset();
    }
}
