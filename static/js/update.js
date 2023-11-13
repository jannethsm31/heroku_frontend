const urlParams = new URLSearchParams(window.location.search);
const email = urlParams.get('email');

function getContactById(email) {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.open('GET', "https://herokubackend-605c0ee15b4e.herokuapp.com/contactos/" + email);
        request.send();

        request.onload = (e) => {
            const response = request.responseText;
            const contacto = JSON.parse(response);
            resolve(contacto);
        };

        request.onerror = (e) => {
            reject(new Error("Error en la solicitud AJAX."));
        };
    });
}

function updateData(email, nombre, telefono) {
    var request = new XMLHttpRequest();
    var url = "https://herokubackend-605c0ee15b4e.herokuapp.com/contactos/" + email;

    var data = {
        email: email,
        nombre: nombre,
        telefono: telefono
    };

    request.open('PUT', url, true);
    request.setRequestHeader('Content-type','application/json; charset=utf-8');

    return new Promise((resolve, reject) => {
        request.onreadystatechange = function () {
            if (request.readyState === 4) {
                if (request.status === 200) {
                    resolve(request.responseText);
                } else {
                    reject(new Error("Error en la solicitud de actualización."));
                }
            }
        };

        request.send(JSON.stringify(data));
    });
}

getContactById(email)
    .then((contacto) => {
        const emailInput = document.getElementById("emailInput");
        const nombreInput = document.getElementById("nombreInput");
        const telefonoInput = document.getElementById("telefonoInput");

        emailInput.value = contacto.email;
        nombreInput.value = contacto.nombre;
        telefonoInput.value = contacto.telefono;
    })
    .catch((error) => {
        console.error(error.message);
    });


getAll();



 //request.open('GET', "http://localhost:8000/contactos/" + email);