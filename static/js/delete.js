const urlParams = new URLSearchParams(window.location.search);
const email = urlParams.get('email');
function getContactById(email) {
    const request = new XMLHttpRequest();
    // request.open('GET', "http://localhost:8000/contactos/" + email);
    request.open('GET', "https://herokubackend-605c0ee15b4e.herokuapp.com/contactos/" + email);
    request.send();

    request.onload = (e) => {
        const response = request.responseText;
        const contacto = JSON.parse(response);

        const detalle = document.getElementById("detalle");
        detalle.innerHTML = `
            <p>Email: ${contacto.email}</p>
            <p>Nombre: ${contacto.nombre}</p>
            <p>Teléfono: ${contacto.telefono}</p>
        `;
    };
}


getContactById(email);


function deleteData(email){

    const request = new XMLHttpRequest();
    // request.open('DELETE', "http://localhost:8000/contactos/" + email, true);
    request.open('DELETE', "https://herokubackend-605c0ee15b4e.herokuapp.com/contactos/" + email, true);

    request.onload = function () {

        if (request.readyState == 4 && request.status == 200) {
            alert("Se borro el contacto");
            window.location.href = '/';
        } else {
            alert("Ocurrió un error");
        }
    }
    request.send(null);
}
