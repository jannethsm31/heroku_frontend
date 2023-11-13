function insertData(email, nombre, telefono) {
    var request = new XMLHttpRequest();
    // var url = "http://localhost:8000/contactos/";
    var url = "https://herokubackend-605c0ee15b4e.herokuapp.com/contactos/";

    var data = {
        email: email,
        nombre: nombre,
        telefono: telefono
    };

    request.open('POST', url, true);
    request.setRequestHeader('Content-Type', 'application/json');

    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            alert(request.responseText);


            window.location.href = 'index.html';
        }
    }

    request.send(JSON.stringify(data));
}
