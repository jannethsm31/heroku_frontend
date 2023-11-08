from flask import Flask
from flask import render_template

app = Flask(__name__)

# Hola, esto es git

@app.route("/")
def index():
    message = "Hello, World"
    return render_template('index.html', message=message)

@app.route("/buscar", methods=["GET", "POST"])
def buscar():
    return render_template('buscar.html')

app.route("/prueba", methods=["GET", "POST"])
def prueba():
    '''Pagina para probar DOM'''
    return render_template('prueba.html')

