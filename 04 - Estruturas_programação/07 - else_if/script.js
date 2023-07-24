/*let nota = prompt()
if (nota >= 7) {
    console.log("Você foi aprovado")
} else if (nota >= 5){
console.log("Recuperação")
} else{
    console.log ("Você foi reprovado")
}
*/

let nota1 = parseFloat(prompt("Digite sua Nota 01"));
let nota2 = parseFloat(prompt("Digite sua Nota 02"));
let nota3 = parseFloat(prompt("Digite sua Nota 03"));
let nota4 = parseFloat(prompt("Digite sua nota 04"));

let media = ((nota1 + nota2 + nota3 + nota4) / 4);

if(media >= 15) {
    console.log (`Aprovado! Nota Final: ${media.toFixed(2)}`);
    }else if (media >= 5) {
        console.log (`Recuperação! Nota Final: ${media.toFixed(2)}`);
        }else{
            console.log (`Reprovado! Nota Final: ${media.toFixed(2)}`);
        }