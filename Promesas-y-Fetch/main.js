'use strict'

var div_usuario = document.querySelector(".usuarios");
var div_janet = document.querySelector(".janet");
var div_brayan= document.querySelector(".brayan");

//=============================================
// MOSTRAR A TODOS LOS USUARIOS Y DESPUES A JANET 
//=============================================

getUsuarios()
    .then(data => data.json())
    .then(users => {
        listadoUsuarios(users.data);
   
        return getInfo();
    })
    .then(data => {
        console.log(data);
        getMostrarPromesa(data);

        return getJanet();  
    })
    .then(data => data.json())
    .then(user => {
        mostrarJanet(user.data);
    })
    .catch(error => {
        alert("Error en las peticiones");
    });
    

//=============================================
// FUNCIONES 
//=============================================

function getUsuarios(){
    return fetch('https://reqres.in/api/users')
}

function getJanet(){
    return fetch('https://reqres.in/api/users/2')
}

//=============================================
// FUNCIO DE VARIOS USUARIOS 
//=============================================

function listadoUsuarios(usuarios){
  
    usuarios.map((users, i) => {
        let nombre = document.createElement('h3');

        nombre.innerHTML = i + ". " + users.first_name + " " + users.last_name; 

        div_usuario.appendChild(nombre);

        document.querySelector(".loading").style.display = 'none';
    })

}

//=============================================
// FUNCION DE JANET  
//=============================================

function mostrarJanet(user){

    let nombre = document.createElement('h4');
    var img = document.createElement('img');

    nombre.innerHTML = user.first_name + " " + user.last_name;
    img.src = user.avatar;

    div_janet.appendChild(nombre);
    div_janet.appendChild(img);

    document.querySelector(".janet .loading").style.display = 'none';

}

//=============================================
// FUNCION PARA CREAR PROMESAS  
//=============================================

function getInfo(){
    var profesor = {
        nombres: 'Brayan Alexander',
        apellidos: 'Gomez Manco',
        url: 'https://brayan.es'
    }
    return new Promise((resolve, reject) => {
        
        var profesor_string = "";

        setTimeout(function(){

            var profesor_string = JSON.stringify(profesor);

            if(typeof profesor_string != 'string' || profesor_string == "") return reject('error 1');
    
            return resolve(profesor_string);

        }, 3000);

    })
}

//=============================================
// MOSTRAR LA PROMESA CREADA 
//=============================================

function getMostrarPromesa(profesor){

    var profesor2 = JSON.parse(profesor);

    let nombre = document.createElement('h4');
    let apellido = document.createElement('h4');
    let sitio = document.createElement('h4');

    nombre.innerHTML = profesor2.nombres;
    apellido.innerHTML = profesor2.apellidos;
    sitio.innerHTML = profesor2.url;

    div_brayan.appendChild(nombre);
    div_brayan.appendChild(apellido);
    div_brayan.appendChild(sitio);

    document.querySelector(".brayan .loading").style.display = 'none';

}