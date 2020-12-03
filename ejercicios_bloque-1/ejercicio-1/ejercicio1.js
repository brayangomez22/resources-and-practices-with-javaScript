'use strict'

//=============================================
// Programa que pide dos numeros y dice cual es el mayor, el menor o si son iguales,
// o si los numeros son un string o menores  o iguales a cero, que los vuelva a pedir
//=============================================

var numero1 = parseInt(prompt('Introduce el primer numero', 0));
var numero2 = parseInt(prompt('Introduce el segundo numero', 0));

while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)){

    var numero1 = parseInt(prompt('Introduce el primer numero', 0));
    var numero2 = parseInt(prompt('Introduce el segundo numero', 0));

}

console.log(numero1, numero2);

if(numero1 == numero2){

    alert("LOS NUMEROS SON IGUALES");

}else if(numero1 > numero2){

    alert("EL NUMERO MAYOR ES EL NUMERO: " + numero1);
    alert("EL NUMERO MENOR ES EL NUMERO: " + numero2);

}else if(numero2 > numero1){

    alert("EL NUMERO MAYOR ES EL NUMERO: " + numero2);
    alert("EL NUMERO MENOR ES EL NUMERO: " + numero1);

}else{

    alert("INTRODUCE NUMEROS CORRECTOS");  

}