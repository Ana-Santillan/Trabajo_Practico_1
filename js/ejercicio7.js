// Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

let numero1 = parseInt(prompt("Ingrese el primer número"));
let numero2 = parseInt(prompt("Ingrese el segundo número"));
let numero3 = parseInt(prompt("Ingrese el tercer número"));

if(numero1 < numero2 && numero3 < numero2){
    document.write("El número mayor es: "+ numero2);
} else if(numero2 < numero1 && numero3 < numero1){
    document.write("El número mayor es: "+ numero1);
}else{
    document.write("El número mayor es: "+ numero3);
}