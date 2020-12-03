'use strict'


//=============================================
// MOSTRAR LA TABLA DE MULTIPLICAR DEL NUMERO INTRODUCIDO POR EL USUARIO 
//=============================================

var numero = parseInt(prompt('Mete un numero', 0));

document.write("<center><h1>Tabla del: " + numero + "</h1></center>");

for(var i = 1; i <= 10; i++){

    document.write("<center><h3>"+numero+" x "+i+ " = "+(i*numero)+"</h3></center>");

}

document.write("<br/><br/>");

//=============================================
// TODAS LAS TABLAS DE MULTIPLICAR 
//=============================================

for(var c = 1; c <= 10; c++){
    
    document.write("<center><h1>Tabla del: "+c+"</h1></center>");

    for(var i = 1; i <= 10; i++){

        document.write("<center><h3>"+c+" x "+i+ " = "+(i*c)+"</h3></center>");

    }

}