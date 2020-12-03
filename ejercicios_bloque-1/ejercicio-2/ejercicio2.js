//=============================================
// MOSTRAR LA SUMA Y LA MEDIA DE LOS NUMEROS INTRODUCIDOS,
// HASTA INTRODUCIR UN NUMERO NEGATIVO Y HAY MOSTRAR EL RESULTADO 
//=============================================

var suma = 0;
var contador = 0;

do{

    var numero = parseInt(prompt('Introduce numeros hasta meter uno negativo', 0));

    if(isNaN(numero)){

        numero = 0;

    }else if(numero >= 0){

        suma += numero;
        contador++;

    }


}while(numero >= 0)

alert("LA SUMA DE TODOS LOS NUMEROS ES: " + suma);
alert("LA MEDIA DE TODOS LOS NUMEROS ES: " + (suma/contador));