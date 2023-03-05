// Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

let numero1 = parseInt(prompt("Ingrese el primer número"));
let numero2 = parseInt(prompt("Ingrese el segundo número"));

if(numero1 < numero2){
    document.write("El número mayor es: "+ numero2);
} else{
    document.write("El número mayor es: "+ numero1);
}