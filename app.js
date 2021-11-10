
/*  Metodos para seleciconar elementos del DOM (Nodos del tipo1) */
/*document.getElementById()  //nodo del tipo elemento que coincida con el id indicado
document.getElementsByTagName() // coleccion de elementos HTML
document.getElementsByClassName() // coleccion de elementos HTML
document.querySelector() // primer elemento que cumpla la condicion 
document.querySelectorAll() // todos los elementos que cumplan la condicion */

var litle = document.getElementById("litle");
console.log(litle);
console.log(litle.firstChild);



var linklist = document.getElementsByTagName("a");
console.log(linklist);
console.log(linklist[0]);
console.log(linklist[0].firstChild);

document.getElementsByClassTagName()



