'use strict'

//=============================================
// HACER UNA CALCULADORA
// SI METE UN NUMERO MAL QUE LO VUELVA A INTRODUCIR 
// MOSTRAR LA SUMA, LA RESTA, LA MULTIPLICACION Y LA DIVISION 
//=============================================

var numero1 = parseInt(prompt('Mete el primer numero', 0));
var numero2 = parseInt(prompt('Mete el segundo numero', 0));

while(numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)){

    var numero1 = parseInt(prompt('Introduce el primer numero', 0));
    var numero2 = parseInt(prompt('Introduce el segundo numero', 0));

}

var resultado = "La suma es: "+(numero1+numero2)+" <br/>"+
                        "La resta es: "+(numero1-numero2)+" <br/>"+
                        "La multiplicacion es: "+(numero1*numero2)+" <br/>"+
                        "La division es: "+(numero1/numero2)+" <br/>";

document.write("<center><h1>"+resultado+"</h1></center>");