const urlParams = new URLSearchParams(window.location.search);
const email = urlParams.get('email');

function getContactById(email) {
    const request = new XMLHttpRequest();
    //request.open('GET', "http://localhost:8000/contactos/" + email);
    request.open('GET', "https://herokubackend-605c0ee15b4e.herokuapp.com/contactos" + email);
    request.send();

    request.onload = (e) => {
        const response = request.responseText;
        const contacto = JSON.parse(response);

        const emailInput = document.getElementById("emailInput");
        const nombreInput = document.getElementById("nombreInput");
        const telefonoInput = document.getElementById("telefonoInput");

        emailInput.value = contacto.email;
        nombreInput.value = contacto.nombre;
        telefonoInput.value = contacto.telefono;
    };
}

getContactById(email);

function updateData(email, nombre, telefono) {
    var request = new XMLHttpRequest();
    // var url = "http://localhost:8000/contactos/" + email;
    var url = "https://herokubackend-605c0ee15b4e.herokuapp.com/contactos" + email;


    var data = {
        email: email,
        nombre: nombre,
        telefono: telefono
    };

    request.open('PUT', url, true);
    request.setRequestHeader('Content-type','application/json; charset=utf-8');

    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            alert(request.responseText);
            window.location.href = 'index.html';
        }
    }

    request.send(JSON.stringify(data));
}
