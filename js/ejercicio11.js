//  Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)

let numero = parseInt(prompt("Ingrese un número"));
let esDivisible = "";

if (numero % 2 == 0) {
    esDivisible += "2 ";
}
if (numero % 3 == 0) {
    esDivisible += "3 ";
}
if (numero % 5 == 0) {
    esDivisible += "5 ";
}
if (numero % 7 == 0) {
    esDivisible += "7 ";
}

if (esDivisible) {
    document.write(`${numero} es divisible por ${esDivisible}`);
} else {
    document.write(`${numero} NO es divisible por 2, 3, 5 y 7`);
}