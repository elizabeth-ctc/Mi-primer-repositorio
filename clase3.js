//** recordar como crear variables del tipo string
var lenguaje = "python";
var ciudad = "lima";
var mensaje = "!Bienvenidos al sitio web!"

const single = 'comillas simple';
const double = "comillas dobles";
const backtick = `backticks`; //comillas invertidas

//** seleccionar una letra con string

var animal = "gato";

console.log(animal.charAt(2))

const saludo = 'Mundo';

console.assert(`Hola ${saludo}` === 'Hola Mundo');

//** caracteres especiales
var frase1 = `Hola:
              amiga 1`;

alert(frase1);
// el \n genera un salto de linea
var frase2 = `Hola:\namiga 2`;
alert(frase2);

//Utlizando string.length

var letras = "abcdjkl";
var conteo = letras.length;
alert(conteo);

// accedindo al ultimo caracter
var ultimo = letras[letras.length - 1];
console.log(ultimo);
alert(ultimo);

//convertir minusculas a mayusculas
var minus = "peru";
alert(minus.toUpperCase()); //Pasa a mayuscula

//Ejemplos con comprobación usando assert

console.assert('Interface'.toUpperCase() ==='INTERFACE');
console.assert('INTERFACE'.toUpperCase() ==='interface');
console.assert('Intercafe'[0].toLowerCase() ==='i');

              