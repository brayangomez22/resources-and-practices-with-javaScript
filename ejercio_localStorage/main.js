'use strict'

var formulario = document.querySelector("#formPeliculas");

formulario.addEventListener('submit', function(){
    var titulo = document.querySelector("#addPelicula").value;
    if(titulo.length >= 1){
        localStorage.setItem(titulo, titulo);
    }
});

//=============================================
// AÑADE PELICULA 
//=============================================

var ul = document.querySelector("#peliculas-list");

for(var i in localStorage){

    if(typeof localStorage[i] == 'string'){
        var li = document.createElement("li");
        li.append(localStorage[i]);
        ul.append(li);
    }

}

//=============================================
// ELIMINA PELICULA 
//=============================================

var formularioB = document.querySelector("#formBorrarPeliculas");

formularioB.addEventListener('submit', function(){
    var titulo = document.querySelector("#borraPelicula").value;
    if(titulo.length >= 1){
        localStorage.removeItem(titulo);
    }
});