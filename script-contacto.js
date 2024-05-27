document.addEventListener('DOMContentLoaded', (event) => {
    let txtNombre = document.getElementById("nombre");
    let apelli = document.getElementById("apellido");
    let email = document.getElementById("mail");
    let comment = document.getElementById("comentario");
    let ltaErrores = document.getElementById("ltaErrores");
    let ltaMensajes = document.getElementById("ltaMensajes");

    function validar() {
        ltaErrores.innerHTML = "";
        //ltaMensajes.innerHTML = "";

        txtNombre.classList.remove("error");
        apelli.classList.remove("error");
        email.classList.remove("error");
        comment.classList.remove("error");

        let errores = [];
        let regex_mail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let nbre = txtNombre.value.trim();
        let apelliVal = apelli.value.trim();
        let emailVal = email.value.trim();
        let comVal = comment.value.trim();

        // Validación de nombre
        if (nbre.length === 0) {
            errores.push("Falta el nombre");
            txtNombre.classList.add("error");
        } else if (nbre.length > 9) {
            errores.push(" Nombre muy largo (máximo 9 caracteres)");
            txtNombre.classList.add("error");
        }

        // Validación de apellido
        if (apelliVal.length < 3) {
            errores.push("Apellido muy corto (mínimo 3 caracteres)");
            apelli.classList.add("error");
        }

        // Validación de email
        if (emailVal.length === 0) {
            errores.push("Falta el email");
            email.classList.add("error");
        } else if (!regex_mail.test(emailVal)) {
            errores.push("Email inválido");
            email.classList.add("error");
        }

        // Validación de comentario
        if (comVal.length === 0) {
            errores.push("Falta el comentario");
            comment.classList.add("error");
        }

        // Mostrar errores
        for (let err of errores) {
            let li = document.createElement("li");
            li.innerHTML = err;
            ltaErrores.appendChild(li);
            ltaErrores.appendChild(document.createElement("br"));
        }

        if (errores.length == 0) {
            let li = document.createElement("li");
            li.innerHTML = `Formulario enviado correctamente`;
            ltaMensajes.appendChild(li);
            document.forms[0].reset();
            return false; // return true para enviar el formulario
        } else {
            return false; // Si hubo errores cancelar el envío
        }
    }

    document.getElementById('formulario').onsubmit = validar;

    function evitarNumeros(event) {
        if (/\d/.test(event.key)) {
            event.preventDefault();
        }
    }

    txtNombre.addEventListener('keydown', evitarNumeros);
    apelli.addEventListener('keydown', evitarNumeros);
});
