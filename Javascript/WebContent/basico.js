var nombre = "Juan"

function saludar() {
    window.alert("Hola " + nombre + ", Que tal?")
}

function texto(dato) {
    window.alert(dato)
}

function declarar() {
    var nombre = 'Maria';
    nombre.bold();
    window.alert(nombre.bold());
}

function escribir() {
    var texto = "En un lugar de la Mancha"
    document.getElementById("mensaje").innerHTML = texto.bold();
}

function numero() {
    var edad = 20;
    /* edad++; */
    window.alert(++edad);
}

function leer() {
    window.alert(document.getElementById("noticia").innerHTML)
    window.alert(document.getElementById("caja").value);
}

function comprobar() {
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;

    if (user == ("admin") && pass == "123456") {
        console.log("Dentro")
        document.cookie="Cookie=abc123";
        location.href="http://www.marca.com/";
    } else {
        $("#parrafo").html("Eres un Benzema");
    }
}
