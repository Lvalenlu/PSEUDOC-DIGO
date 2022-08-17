'use strict';//directiva que indica que estamos trabajando en modo strict
/*Comentarios de bloque */
//Declaración de variables o contenedores
/*var variable1 = 10 ;//Carácter global
let variable2 = 23; //De ámbito local
const constante1 = 3.14; // Declarar constantes
console.log(variable2)
var variable1 = 0;
if (true){
    var variable1 = 100;
    let variable2 = 29;
    console.log(variable2)
}

console.log(variable2)*/
//Imprimir por consola

//Realizar un programa que lea 2 números y los sume e imprimir resultado

let num1;
let num2;
num1 = prompt("Introduzca un número");
num2 = prompt("Introduzca un número");
let suma = 0;
suma = parseFloat(num1) + parseFloat(num2)
console.log("El resultado es: " + suma);
alert("La suma es " + suma)
