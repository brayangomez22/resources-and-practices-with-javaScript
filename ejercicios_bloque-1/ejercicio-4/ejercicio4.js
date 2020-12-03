'use strict'

//=============================================
// MOSTRAR TODOS LOS NUMEROS IMPARES QUE HAY ENTRE DOS NUMEROS INTRODUCIDOS POR EL USUARIO 
//=============================================

var numero1 = parseInt(prompt('Introduce el primer numero', 0));
var numero2 = parseInt(prompt('Introduce el segundo numero', 0));

while(numero1 < numero2){

    numero1++;

    if(numero1%2 != 0){

        document.write("<center><h1>El " +  numero1+ " es impar" + "</h1></center>");
        
    }

}