// crear una función que tome como parámetro el año actual y el año de nacimiento
// y calcule la edad del usuario (más o menos).
// Preguntarle estos datos al usuario y guardarlos en 2 variables
// Ejecutar la función con estos datos



// Preguntar el salario anual y calcular el salario mensual
// Preguntar el salario mensual y calcular el anual
// diario... semanal, por hora. etc.


function validarSiDeseaSalir() {
    let deseaSalir = prompt("¿Desea salir?");

    if(validarSiSeIngresoEscapeOCancelar(deseaSalir) === true) {
        validarSiDeseaSalir();

    } else if (validarSiSeIngresoEspacioEnBlanco(deseaSalir) === true) {
        alert("No puede ingresar espacios en blanco");
        validarSiDeseaSalir();

    } else if (deseaSalir.trim().toLowerCase() === "si") {
        return true;

    } else if (deseaSalir.trim().toLowerCase() === "no") {
        return false;
    } else {
        alert("No entiendo tu respuesta. Intenta nuevamente");
        validarSiDeseaSalir(mensaje);
    }
}

function validarSiSeIngresoEscapeOCancelar(dato1, dato2) {
    if(dato1 === null || dato2 === null) {
        return true;
    } else {
        return false;
    }
}

function validarSiSeIngresoEscapeOCancelar(dato1) {
    if(dato1 === null) {
        return true;
    } else {
        return false;
    }
}

function validarSiSeIngresoEspacioEnBlanco(dato1, dato2) {
    if(dato1 === "" || dato2 === "") {
        return true;
    } else {
        return false;
    }
}

function validarSiSeIngresoEspacioEnBlanco(dato1) {
    if(dato1 === "") {
        return true;
    } else {
        return false;
    }
}

function ingresarDatos() {
    let salirDelPrograma = false;
    let ingresoEspacioEnBlanco = false;
    do {
        const fechaActual = prompt("Ingresa la fecha actual");
        const fechaDeNacimiento = prompt("Ingresa su fecha de nacimiento");
    
        if(validarSiSeIngresoEscapeOCancelar(fechaActual, fechaDeNacimiento) === true) {
            if(validarSiDeseaSalir() === true) {
                salirDelPrograma = true;
            } else {
                salirDelPrograma = false;
            }
        } else {
            if(validarSiSeIngresoEspacioEnBlanco(fechaActual, fechaDeNacimiento) === true) {
                alert("No puede ingresar espacios en blanco");
                ingresoEspacioEnBlanco = true;
            } else {
                console.log("Hola");
            }
        }
    
    }while(salirDelPrograma === false || ingresoEspacioEnBlanco === true);
}

ingresarDatos();

/*
  
Analicemos el inconveniente, primero intentamos crear funciones que intenten adpatarse a todos los
tipos de ingreso de datos. Hasta ahi bien, intentamos con un dato y funcionó perfecto. Luego
queríamos utilizar esa automatización para un dato más. El problema surgía en el desea salir, le colocabamos
que si y, cómo esas validaciones son por cada dato, no salía del programa y pasaba a la siguiente ingreso de datos.
Esto no podía ser así porque le dijimos que SALGA DEL PROGRAMA.

Entonces probamos que ingrese todos los datos y luego valide. El problema es que las funciones que automatizan las
validaciones ya no funcionan, o reciben 1 dato o reciben 2. No podemos crear 2 funciones que reciba 1 y otra
identica que reciba 2. 

Entonces ¿que hacemos?
 
*/

/// SCOPE

// Variable hoisting -> izar
// console.log(hola); //Falla porque no está definida

// console.log(mensaje); //No falla, pero muestra undefined... por qué?
// var mensaje = 'Hola, mundo';
// console.log(mensaje); //Hola, mundo

// Y con let?
// let mensaje = 'Hola, mundo';
// console.log(mensaje); //error

// function hoisting

/*
pruebaHoisting(); //funciona!
function pruebaHoisting(){
    console.log('prueba');
}
//pruebaHoisting();
*/

/*
var a = 1; //global
let b = 2; //global

function prueba(c) { //c es un parámetro de la función prueba. LOCAL.
    let d = 4; //local a la función

    if(c === 3){
        var e = 5; // por hoisting termina siendo local a la función
        let f = 6; // local al IF

        console.log('a dentro del if vale: ' + a); // 1
        console.log('b dentro del if vale: ' + b); // 2
        console.log('c dentro del if vale: ' + c); // lo que sea que le pasen a prueba
        console.log('d dentro del if vale: ' + d); // 4
        console.log('e dentro del if vale: ' + e); // 5
        console.log('f dentro del if vale: ' + f); // 6
    }

    console.log('a dentro de la funcion pero fuera del if, vale: ' + a); // 1
    console.log('b dentro de la funcion pero fuera del if, vale: ' + b); // 2
    console.log('c dentro de la funcion pero fuera del if, vale: ' + c); // lo que sea que le pasen a prueba
    console.log('d dentro de la funcion pero fuera del if, vale: ' + d); // 4
    console.log('e dentro de la funcion pero fuera del if, vale: ' + e); // 5
    // console.log('f dentro de la funcion pero fuera del if, vale: ' + f); // error
}

prueba(3);

console.log('a vale: ' + a); // 1
console.log('b vale: ' + b); // 2
// console.log('c vale: ' + c); // error
// console.log('d vale: ' + d); // error
// console.log('e vale: ' + e); // error
// console.log('f vale: ' + f); // error
*/
