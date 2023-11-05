// se define la funcion que usa email como parametro
function getContactoEmail(email) {
    // creo que una instancia del objeto que realiza solicitudes HTTP desde el navegador
    var request = new XMLHttpRequest();
    // configura la solicitud HTTP, se establece el metodo GET y la url a la que se le hara la solicitud
    request.open('GET', "https://herokubackend-605c0ee15b4e.herokuapp.com/contactos?email=" + email);
    // Envia la solicitud al servidor
    request.send();

    // Define los eventos que se realizaran con la solicitud se completo con exito
    request.onload = (e) => {
        // obtiene la respuesta de la solicitud y la almacena en response
        const response = request.responseText;
        // analiza la cadena como un objeto JSON, haciendo que la respuesta se un JSON valido
        const json = JSON.parse(response);
        // registra en la consola si la solicitud fue exitosa o no
        console.log("status_code: " + request.status);

        // comprueba si json contiene un solo elemento, es decir si se encontro el contacto con el correo dado
        if (json.length == 1) {
            // si se encuentra, se guarda en el array json, en la variable contacto
            const contacto = json[0];

            // obtiene una referencia al elemento HTML
            const tbody_contactos = document.getElementById("tbody_contactos");
            // borra el contenido en la tabla
            tbody_contactos.innerHTML = "";

            // crea elementos de la tabla y asigna los valores de esta
            var tr = document.createElement("tr");
            var td_email = document.createElement("td");
            var td_nombre = document.createElement("td");
            var td_telefono =  document.createElement("td");

            td_email.innerHTML = contacto["email"];
            td_nombre.innerHTML = contacto["nombre"];
            td_telefono.innerHTML = contacto["telefono"];

            // agrega los elementos a la tabla
            tr.appendChild(td_email);
            tr.appendChild(td_nombre);
            tr.appendChild(td_telefono);

            tbody_contactos.appendChild(tr);
            
            // si no se encuentran entonces manda el texto a la consola
        } else {
            console.log("No existe registro con el correo electronico proporcionado.");
        }
    };
}