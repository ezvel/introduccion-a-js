// TAREA: Imprimí cada 3er número del 3 al 22 usando un 'bucle for'.

/*
for(let i = 3; i <= 22; i+=3) {
    alert(i);
}
*/
 

// TAREA: Usando un bucle 'while', decile a tu computadora que registre los números de
//       diez a uno.

/*
let indice = 10;

while(indice > 0) {
    console.log(indice);
    indice--;
}
*/

// TAREA: Ha llegado el momento de un ejercicio clásico: 'FizzBuzz'.
// Cuenta del 1 al 50 e imprime los números:
// * Si un número es múltiplo de tres, imprime 'Fizz'.
// * Si es un múltiplo de 5, imprime 'Buzz'.
// * Si es un múltiplo de 3 y 5, imprime 'FizzBuzz'.
// * Para todo lo demás, imprime el número mismo.
// NOTA: Es posible que desees utilizar el operador aritmético modulo (%):
// Calcula el resto al dividir.
// 10% 3 = 1 - en 10 tenemos 3 * 3 + 1
// 16% 4 = 0 - en 16 tenemos 4 * 4
// 19% 4 = 3 - en 19 tenemos 4 * 4 + 3, etc.

/*
let numero = 1;

while(numero <= 50) {
 
    if(numero % 3 === 0 && numero % 5 === 0) {
        console.log("FizzBuzz");
    } else if (numero % 3 === 0) {
        console.log("Fizz");
    } else if (numero % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(numero);
    }

    numero++;
}
*/

// Calcular el promedio de todos los números en un array de números. (y ponerlo en una función)
// ej.: calcularPromedio([10,5,4,2,8])

/*
function calcularPromedio(arreglo) {
    let total = 0;
    for (let i = 0; i < arreglo.length; i++) {
        total += arreglo[0];
    }
    let promedio = total / arreglo.length;
    return promedio;
}

let promedio = calcularPromedio([3, 2, 3, 2, 5]);
console.log(promedio);
*/