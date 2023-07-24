
// for(i =parseFloat(prompt("Digite um número")); i >= 0; i--){
// console.log(i)
// }

/* Desenvolva um programa que solicite ao
//  usuário que digite um número e, em seguida, 
//  imprima no console a soma dos números ímpares entre 1 e esse número.*/

let n =Number(prompt("Digite um número"))
let soma = 0
for(i = 1; i<=n; i+=2){
    soma +=i
}
console.log(`A somas dos numeros impares entre 1 e ${n} é ${soma}   `)

/* Imprima os números de 1 a 10 no console*/

// for ( i = 0; i <= 10; i++){
//     console.log (i)
// }

/* imprima os numeros pares de 0 a 20 no conspçe */

// for ( i = 0; i <= 20; i++){
//    i%2 == 0 ? console.log(i):console.log()
// }

/* imprima os números impares de 10 a 30 no console */

// for ( i = 10; i <= 30; i++){
//    i%2 == 1 ? console.log(i):console.log()
// }

/* Imprima os números de 100 a 0, decrementado de 5 em 5, no console */

// for (let i = 100; i >= 0; i-=5){
//     console.log (i)
// }

/* imprima a tabuada da multiplicação do número 7, do 1 ao 10, no console */
// let n = prompt("Digite um número")
// for (i = 1 ; i <= 10; i++){
//     console.log(`${n} x ${i} = ${i*n}`)
// }

/* Solicite ao usuario que digite um numero no prompt e, em seguida
imprima os números pares de 0 até esse número no console */
// let n =parseFloat(prompt("Digite um número"))
// for(i = 1; i<=n; i++){
//     if (i%2 == 0){
//     console.log(i)
//     }
// }

/* solicite ao usuario que digite dois números e, em seguida, imprime os números 
entre esses números no console, em ordem crescente */

// let n = parseInt(prompt("Digite um número"));
// let nu = parseInt(prompt("Digite outro número"));
// for( let i = n; i <= nu; i++){
//     console.log(i)
// }