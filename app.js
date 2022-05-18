let cantidad = "";
let sumatoria = 0;
let sumar = false;
let restar = false;
let multiplicador = false;
let divisor = false;
let mood = false;
let potenciacion = false;
let borrador = false;

function mostrarnumero(numero) {
    document.getElementById("display").value = cantidad + numero;
    cantidad = document.getElementById("display").value
}

function suma() {
    sumatoria = sumatoria + parseFloat(cantidad);
    document.getElementById("display").value = sumatoria;
    cantidad = "";
    sumar = true;

}

function resta() {
    sumatoria = sumatoria + parseFloat(cantidad)
    document.getElementById("display").value = sumatoria;
    cantidad = "";
    restar = true;

}

function multiplicacion() {
    sumatoria = sumatoria + parseFloat(cantidad)
    document.getElementById("display").value = sumatoria;
    cantidad = "";
    multiplicador = true;
}

function division() {
    sumatoria = sumatoria + parseFloat(cantidad)
    document.getElementById("display").value = sumatoria;
    cantidad = "";
    divisor = true;
}

function residuo() {
    sumatoria = sumatoria + parseFloat(cantidad)
    document.getElementById("display").value = sumatoria;
    cantidad = "";
    mood = true;
}

function potencia() {
    sumatoria = sumatoria + parseFloat(cantidad)
    document.getElementById("display").value = sumatoria;
    cantidad = "";
    potenciacion = true;
}

function borrar() {
    document.getElementById("display").value = 0;
    cantidad = 0;
    borrador = true;
}

function igual() {
    if (sumar) {
        document.getElementById("display").value = sumatoria + parseFloat(cantidad);
    }
    if (restar) {
        document.getElementById("display").value = sumatoria - parseFloat(cantidad);
    }
    if (multiplicador) {
        document.getElementById("display").value = sumatoria * parseFloat(cantidad);
    }
    if (divisor) {
        document.getElementById("display").value = sumatoria / parseFloat(cantidad);
    }
    if (mood) {
        document.getElementById("display").value = sumatoria * parseFloat(cantidad) / 100;
    }
    if (potenciacion) {
        document.getElementById("display").value = sumatoria ** parseFloat(cantidad);
    }
}