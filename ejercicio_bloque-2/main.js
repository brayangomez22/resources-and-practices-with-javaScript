'use strict'

//=============================================
// 1. pedir 6 numeros por pantalla y meterlos en un array
// 2. mostrar el array entero (todos sus elementos) en el cerpo de la pantalla y en la consola
// 3.  ordenarlo y mostrarlo
// 4. invertit su orden y mostrarlo
// 5. mostrar cuantos elementos tiene el array
// 6. busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice
//=============================================

function mostrarArray(elementos, textoCustom = ""){
    document.write("<center>");
    document.write("<h3>Contenido del array: "+textoCustom+"</h3>")
    elementos.forEach((elemento, index) => {
        document.write("<strong>"+elemento+"</strong><br/>");
    })
    document.write("</center>");
}

var numeros = [];

for(var i = 0; i <= 5; i++){
    numeros.push(parseInt(prompt('Introduce un numero', 0)));
}

// mostrando el array en la pantalla
mostrarArray(numeros);

// mostrando el array en la consola
console.log(numeros);

// ordenar y mostrarlo en consola y pantalla
numeros.sort(function(a,b){return a-b});
mostrarArray(numeros, "ordenado");

// inventir y mostrar 
numeros.reverse();
mostrarArray(numeros, "invertido");

// mostrar cuantos elementos tiene el array
document.write("<center><h1>El array tiene "+numeros.length+" elementos"+"</h1></center>");

// busqueda
var busqueda = parseInt(prompt('Busca un numero', 0));
var posicion = numeros.findIndex(numero => numero == busqueda);

if(posicion && posicion != -1){
    document.write("<center>");
    document.write("<hr/><h2>ENCONTRADO</h2>");
    document.write("<h3>La posicion del numero es: "+posicion+"</h3>");
    document.write("</center>");
}else{
    document.write("<center>");
    document.write("<hr/><h2>NO ENCONTRADO</h2>");
    document.write("</center>");
}