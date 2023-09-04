// formulario.js

document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("registro-form");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const fechaNacimiento = document.getElementById("fechaNacimiento").value;

        const usuario = {
            nombre,
            apellido,
            fechaNacimiento,
        };

        enviarDatos(usuario);
    });

    function enviarDatos(usuario) {
        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(usuario),
        })
        .then(response => response.json())
        .then(data => {
            console.log("Respuesta del servidor:", data);
            alert("Registro exitoso. Respuesta del servidor:\n" + JSON.stringify(data, null, 2));
        })
        .catch(error => {
            console.error("Error al enviar la solicitud:", error);
            alert("Error al enviar la solicitud.");
        });
    }
});

