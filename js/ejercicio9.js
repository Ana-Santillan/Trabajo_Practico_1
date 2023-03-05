// Escribe un programa que pida una frase y escriba las vocales que aparecen Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)

const frase = prompt("Escribe una frase");
let vocales = "";
let i = 0;

for (i; i < frase.length; i++) {
    const letra = frase.charAt(i);
    if ("aeiouAEIOU".includes(letra)) {
        vocales += letra;
    }
}

document.write(`Las vocales en la frase "${frase}" son: ${vocales}`);