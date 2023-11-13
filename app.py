from flask import Flask
from flask import render_template

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/buscar", methods=["GET", "POST"])
def buscar():
    return render_template('buscar.html')


@app.route("/insertar", methods=["GET", "POST"])
def insertar():
    return render_template('insertar.html')

@app.route("/eliminar", methods=["GET", "POST"])
def eliminar():
    return render_template('borrar.html')

@app.route("/ver", methods=["GET", "POST"])
def ver():
    return render_template('ver.html')


@app.route("/editar", methods=["GET", "POST"])
def editar():
    return render_template('editar.html')

@app.route("/prueba", methods=["GET", "POST"])
def prueba():
    """Pagina para probar DOM"""
    return render_template('prueba.html')

#if __name__ == '__name__':
#    app.run()