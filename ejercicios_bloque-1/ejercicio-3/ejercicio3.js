'use strict'

//=============================================
// HACER UN PROGRAMA QUE MUESTRE LOS NUMEROS ENTRES DOS NUMEROS
//  INTRODUCIDOS POR EL USUARIO
//=============================================

var numero1 = parseInt(prompt('Introduce el primer numero', 0));
var numero2 = parseInt(prompt('Introduce el segundo numero', 0));

document.write("<center><h1>Del " + numero1 + " Al " + numero2 + " Estan estos numeros: </h1></center>");

for(var i = numero1; i <= numero2; i++){

    document.write("<center>" + i + "<br/></center>");

}