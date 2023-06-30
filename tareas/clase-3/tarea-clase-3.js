// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

/*
const miNombre = "Ezequiel";
const nombreDeMiAmigo = "Ariel";

const nombreUsuario = prompt("Ingrese su nombre");

if (nombreUsuario === miNombre) {
    alert("Hola Tocayo! Yo también me llamo " + nombreUsuario);
} else if (nombreUsuario === nombreDeMiAmigo) {
    alert("Hola " + nombreUsuario + ", te llamás igual que mi amigo");
} else {
    alert("Hola " + nombreUsuario);
}*/

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

/*
const miEdad = 27;
const edadUsuario = Number(prompt("Ingrese su edad"));

if (edadUsuario < miEdad) {
    alert("Eres más chico que yo");
} else if (edadUsuario > miEdad) {
    alert("Eres más grande que yo");
} else {
    alert("Tienes mi edad");
}*/

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

/*
function solicitarDocumento() {
    const tieneDocumento = prompt("Tiene documento, si o no");
    if (tieneDocumento.toLowerCase() === "si") {
        return true;
    } else if (tieneDocumento.toLowerCase() === "no") {
        return false;
    } else {
        alert("No entendí tu respuesta");
        return solicitarDocumento();
    }
}

function solicitarEdad() {
    const edad = Number(prompt("Indique su edad"));
    if (edad <= 0) {
        alert("Indique un valir válido");
        return solicitarEdad()
    } else {
        return edad;
    }
}

function validarSiEsMayor(edad) {
    if (edad >= 18) {
        return true;
    } else {
        return false;
    }
}

const tieneDocumento = solicitarDocumento();
if (tieneDocumento === true) {
    const edad = solicitarEdad();
    const esMayor = validarSiEsMayor(edad);
    if (esMayor === true) {
        alert("Bienvenido al bar");
    } else {
        alert("No puedes entrar al bar");
    }
} else {
    alert("No puedes entrar al bar");
}

*/