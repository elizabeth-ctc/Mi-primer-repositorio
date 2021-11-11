
/*var nombre = 'ana'
if (nombre.length > 7) {
    console.log('Qué nombre tan largo tienes!');
    alert('Que nombre tan largo tienes!');
} else {
    console.log('Tu nombre no es muy largo');
    alert('tu nombre no es muy largo');
}*/

/* varios if y else:
var num = parseInt(prompt('Ingresa un número'));
if (num <10) {
    alert('Diste un número pequeño');
} else if (num < 100){
    alert('Diste un número mediano');
} else {
    alert('Diste un número grande');
}
*/

//if anidados:

var temperatura = parseInt(prompt('Ingresa una temperatura'));
    if (temperatura > 10){
        if (temperatura < 26){
            alert("temperatura moderada.");
       } else if (temperatura > 26) {
           alert("La temperatura es alta.");
       }
    } else {
        alert("Hace frio en la ciudad")
    }