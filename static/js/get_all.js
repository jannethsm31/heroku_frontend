function getAll() {
    var request = new XMLHttpRequest();
    // request.open('GET', "http://localhost:8000/contactos");
    request.open('GET', "https://herokubackend-605c0ee15b4e.herokuapp.com/contactos");
    request.send();

    request.onload = (e) => {
        const response = request.responseText;
        const json = JSON.parse(response);
        console.log("status_code: " + request.status);
        const tbody_contactos = document.getElementById("tbody_contactos");

        // Limpia el contenido existente en tbody_contactos
        tbody_contactos.innerHTML = "";

        for (let i = 0; i < json.length; i++) {
            const contacto = json[i];

            var tr = document.createElement("tr");
            var td_email = document.createElement("td");
            var td_nombre = document.createElement("td");
            var td_telefono = document.createElement("td");
            var td_opciones = document.createElement("td");


            td_email.innerHTML = contacto["email"];
            td_nombre.innerHTML = contacto["nombre"];
            td_telefono.innerHTML = contacto["telefono"];
            td_opciones.innerHTML = "<a href='/ver?email=" + contacto["email"] + "'>Ver</a> <a href='/editar?email=" + contacto["email"] + "'>Editar</a> <a href='/borrar?email="+ contacto["email"]+"'>Borrar</a>";


            tr.appendChild(td_email);
            tr.appendChild(td_nombre);
            tr.appendChild(td_telefono);
            tr.appendChild(td_opciones);

            tbody_contactos.appendChild(tr);
        }
    };
}
