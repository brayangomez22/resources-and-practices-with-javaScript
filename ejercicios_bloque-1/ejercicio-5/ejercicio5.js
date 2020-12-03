'use strict'

//=============================================
// MOSTRAR TODOS LOS NUMEROS DIVISORES INTRODUCIDOS POR EL USUARIO 
//=============================================

var numero = parseInt(prompt('Mete un numero', 0));


for(var i = 0; i <= numero; i++){

    if(numero%i){

        document.write("<center><h1>Divisor: " + i + "</h1></center>");

    }

}