const registro = document.getElementById('registro');
const inputs = document.querySelectorAll('#registro input');

const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/,
    nombre: /^[a-zA-ZÁ-ÿ\s]{1,40}$/,
    password: /^.{4,12}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{9}$/

}

const campos = {
    usuario: false,
    nombre: false,
    password: false,
    correo: false,
    telefono: false
}

const validarRegistro = (e) => {
    switch(e.target.name) {
        case "usuario":
            validarCampo(expresiones.usuario, e.target, 'usuario');
            
        break

        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre')
        
        break

        case "password":
            validarCampo(expresiones.password, e.target, 'password')
            validarPassword2()
        
        break

        case "password2":
            validarPassword2()
        
        break

        case "correo":
            validarCampo(expresiones.correo, e.target, 'correo')
        
        break

        case "telefono":
            validarCampo(expresiones.telefono, e.target, 'telefono')
        
        break
    }
    

}

const validarPassword2 = () => {
    const inputPassword1 = document.getElementById('password')
    const inputPassword2 = document.getElementById('password2')

    if (inputPassword1.value !== inputPassword2.value) {
        document.getElementById(`grupo__password2`).classList.add('registro__grupo-incorrecto');
        document.getElementById(`grupo__password2`).classList.remove('registro__grupo-correcto');
        document.querySelector(`#grupo__password2 i`).classList.remove('bi-dash-circle-fill');
        document.querySelector(`#grupo__password2 i`).classList.add('bi-check-circle-fill');    
        document.querySelector(`#grupo__password2 .registro__input-error`).classList.add('registro__input-error-activo');
        campos[password]=true;

    } else {
        document.getElementById(`grupo__password2`).classList.remove('registro__grupo-incorrecto');
        document.getElementById(`grupo__password2`).classList.add('registro__grupo-correcto');
        document.querySelector(`#grupo__password2 i`).classList.remove('bi-dash-circle-fill');
        document.querySelector(`#grupo__password2 i`).classList.add('bi-check-circle-fill');
        document.querySelector(`#grupo__password2 .registro__input-error`).classList.remove('registro__input-error-activo');
        campos[password]=false;

    }
}

const validarCampo = (expresion, input, campo) => {

    if (expresion.test(input.value)) {
        document.getElementById(`grupo__${campo}`).classList.remove('registro__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('registro__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.remove('bi-dash-circle-fill');
        document.querySelector(`#grupo__${campo} i`).classList.add('bi-check-circle-fill');
        document.querySelector(`#grupo__${campo} .registro__input-error`).classList.remove('registro__input-error-activo');
        campos[campo]=true;

    } else {
        document.getElementById(`grupo__${campo}`).classList.add('registro__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('registro__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('bi-dash-circle-fill');
        document.querySelector(`#grupo__${campo} i`).classList.remove('bi-check-circle-fill');
        document.querySelector(`#grupo__${campo} .registro__input-error`).classList.add('registro__input-error-activo');
        campos[campo]=false;

    }

}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarRegistro)
    input.addEventListener('blur', validarRegistro)
    
});



registro.addEventListener ('submit', (e)=> {
    e.preventDefault();

    const terminos = document.getElementById('termino')
    if (campos.usuario && campos.nombre && campos.password &&campos.correo && campos.telefono && terminos.checked) {
        registro.reset();

        document.getElementById('registro__mensaje-exito').classList.add('registro__mensaje-exito-activo');
        setTimeout(() => {
            document.getElementById('registro__mensaje-exito').classList.remove('registro__mensaje-exito-activo');
        }, 5000)

        document.querySelectorAll('.registro__grupo-correcto').forEach((icono) => {
            icono.classList.remove('registro__grupo-correcto');
        })
        
    } else{
        document.getElementById('registro__mensaje').classList.add('registro__mensaje-activo');
    }

    

});


