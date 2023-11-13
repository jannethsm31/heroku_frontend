const urlParams = new URLSearchParams(window.location.search);
const email = urlParams.get('email');
function getContactById(email) {

    const request = new XMLHttpRequest();
    // request.open('GET', "http://localhost:8000/contactos/" + email);
    request.open('GET', "https://herokubackend-605c0ee15b4e.herokuapp.com/contactos" + email);
    request.send();

    request.onload = (e) => {
        const response = request.responseText;
        const contacto = JSON.parse(response);

        const detalle = document.getElementById("detalle");
        detalle.innerHTML = `
            <p>Email: ${contacto.email}</p>
            <p>Nombre: ${contacto.nombre}</p>
            <p>Teléfono: ${contacto.telefono}</p>`;
    };
}

getContactById(email);
