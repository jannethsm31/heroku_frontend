function getForEmail() {
    var email = document.getElementById("email").value;
    var request = new XMLHttpRequest();
    // var url = "http://localhost:8000/contactos/" + encodeURIComponent(email);
    var url = "https://herokubackend-605c0ee15b4e.herokuapp.com/contactos" + encodeURIComponent(email);
    request.open('GET', url);
    request.send();

    request.onload = (e) => {
        const response = request.responseText;
        const json = JSON.parse(response);
        console.log("response: " + response);
        console.log("json: " + json);
        console.log("status_code: " + request.status);

        var tbody_contactos = document.getElementById("tbody_contactos");
        tbody_contactos.innerHTML = '';

        if (json !== null) {
            var tr = document.createElement("tr");
            var td_email = document.createElement("td");
            var td_nombre = document.createElement("td");
            var td_telefono = document.createElement("td");

            td_email.innerHTML = json["email"];
            td_nombre.innerHTML = json["nombre"];
            td_telefono.innerHTML = json["telefono"];

            tr.appendChild(td_email);
            tr.appendChild(td_nombre);
            tr.appendChild(td_telefono);

            tbody_contactos.appendChild(tr);
        } else {
            td_opciones.innerHTML = "<a href='/ver?email=" + contacto["email"] + "'>Ver</a> <a href='/editar?email=" + contacto["email"] + "'>Editar</a> <a href='/eliminar?email="+ contacto["email"]+"'>Borrar</a>";

        }
    };
}
