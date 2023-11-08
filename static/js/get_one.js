function getContactoEmail(email) {
    var request = new XMLHttpRequest();
    request.open('GET', "http://localhost:8000/contactos");
    // request.open('GET', "https://herokubackend-605c0ee15b4e.herokuapp.com/contactos?email=" + email);
    request.send();

    request.onload = (e) => {
        const response = request.responseText;
        const json = JSON.parse(response);
        console.log("status_code: " + request.status);

        if (json.length == 1) {
            const contacto = json[0];

            const tbody_contactos = document.getElementById("tbody_contactos");
            tbody_contactos.innerHTML = "";
            var tr = document.createElement("tr");
            var td_email = document.createElement("td");
            var td_nombre = document.createElement("td");
            var td_telefono =  document.createElement("td");

            td_email.innerHTML = contacto["email"];
            td_nombre.innerHTML = contacto["nombre"];
            td_telefono.innerHTML = contacto["telefono"];


            tr.appendChild(td_email);
            tr.appendChild(td_nombre);
            tr.appendChild(td_telefono);

            tbody_contactos.appendChild(tr);

        } else {
            console.log("No existe registro con el correo electronico proporcionado.");
        }
    };
}