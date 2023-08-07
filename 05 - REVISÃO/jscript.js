/*01 - Escreva um programa em JavaScript que declare uma variável "idade" com o valor 15. Em seguida, 
utilize uma estr  é maior ou igual a 18. Caso seja, 
imprima no console a mensagem "Pode entrar!". Caso contrário, não imprima nada. */
// let idade = 15

// idade >= 18 ? console.log("Pode entrar!") : console.log()

/* 02 -  Escreva um programa em JavaScript que declare uma constante "nome" com o valor "Ana".
 Em seguida, utilize uma estrutura condicional if para 
verificar se o valor da constante "nome" é igual a "Ana". 
Caso seja, imprima no console a mensagem "Olá Ana, tudo bem?"
utilizando o recurso de template literals para interpolar a 
variável "nome" na mensagem.
*/
// const nome = "ana";
// if (nome == "ana"){
//     console.log(`Olá ${nome}, tudo bem?`);
// } 

/*  03 - Escreva um programa em JavaScript que declare uma constante "num" com o valor 18.
Em seguida, utilize a função Math.pow() para calcular e 
imprimir no console o valor de 2 elevado ao quadrado (2²), 
3 elevado ao quadrado (3²) e "num" elevado ao quadrado ("num"²).
*/

// const num = 18;
// console.log(Math.pow(2,2))
// console.log(Math.pow(3,2))
// console.log(Math.pow(num,2))

/* 04 - Imagine que alguém está dirigindo um carro em uma estrada, 
cujo limite de velocidade é de 80 km/h. Se essa pessoa estiver 
dirigindo a 55 km/h, não há problema e ela não receberá uma multa 
por excesso de velocidade. No entanto, se ela estiver dirigindo a 
uma velocidade maior que 80 km/h, ela será multada. 
O programa em JavaScript simula essa situação, verificando se a velocidade do veículo 
é maior que 80 km/h e imprimindo a mensagem "Levou multa" 
caso seja, ou "Não levou multa" caso contrário. 
Isso pode ser útil para os motoristas se conscientizarem sobre a 
importância de respeitar os limites de velocidade 
e evitar multas e acidentes. */

// let velocidade = Number(prompt("Digite a velocidade: "))
// if(velocidade > 80){
//     console.log("levou multa")
// }else{
//     console.log("não levou multa")
// }

/* 05 - Escreva um programa em JavaScript que declare uma variável "idade" com o valor 23 e uma variável "cnh" com o 
valor false.
 
Em seguida, utilize uma estrutura condicional 
if-else-if para verificar se a idade é maior ou 
igual a 18 e se a pessoa possui CNH. Caso ambas as 
condições sejam verdadeiras, imprima no console a mensagem "Sim, pode dirigir".
Caso a idade seja maior ou igual a 18 mas a pessoa 
não possui CNH, imprima no console a mensagem "Não pode dirigir, mas pode fazer a CNH".
Caso contrário, ou seja, se a pessoa tiver menos de 18 anos, 
imprima no console a mensagem "Não pode dirigir".
Certifique-se de que a estrutura condicional esteja completa, 
com o uso das chaves {} para delimitar o bloco de código a ser executado em caso de cada condição.
*/

// let idade = 23
// let cnh = false

// if(idade >= 18 && cnh == true){
//     console.log("Não pode dirigir, mas pode fazer a CNH");
// }else{
//     console.log("Não pode dirigir");
// }

/* 06 - Escreva um programa em JavaScript que utilize a estrutura de 
repetição while para imprimir no console os números de 0 a 10.
 Certifique-se de utilizar uma variável de controle "i" 
inicializada em 0 e incrementada em 1 a cada iteração, 
verificando se o valor de "i" é menor ou igual a 10 para evitar um loop infinito. 
Utilize a função console.log() para imprimir os valores de "i" em cada iteração do loop.
*/
// let i = 0
// while(i <10){
//     i++
//     console.log(i)
// }

/* 07 - Crie um programa em Javascript que conte de 100 até 50 em ordem decrescente 
e imprima cada número no console. Utilize um laço de repetição for para realizar essa tarefa. */

// for(let i = 100; i >= 50; i--){
//     console.log(i)
// }

/* 08 - Crie um programa em Javascript que conte de 0 até 50 e 
imprima no console se cada número é par ou ímpar. 
Utilize um laço de repetição for para percorrer cada número de 0 a 50 e utilize 
uma estrutura condicional if...else para verificar se o número é par ou ímpar. 
Caso o número seja par, o programa deve imprimir a mensagem "O número X é par", onde X é o número em questão. 
Caso o número seja ímpar, o programa deve imprimir a mensagem "O número X é ímpar". */

// for(let i = 0; i <= 50; i++){
//     if( i%2 != 0){
//         console.log(`O número ${i} é impar`)
//     }else{
//         console.log(`O número ${i} é par`)
//     }

//     }

/* 09 - Crie um programa em Javascript que verifique se um número é primo ou não. 
O número a ser verificado deve ser armazenado em uma variável chamada num. 
O programa deve contar quantas divisões exatas o número tem utilizando um laço de repetição 
for que percorre todos os números de 1 até o próprio número. 
caso o número seja divisível por um desses números, 
aumenta-se o valor da variável divisoes. 
Ao final do laço, utiliza-se uma estrutura condicional if...else para verificar se o número é primo ou não. 
Se o número tiver exatamente duas divisões exatas (1 e ele mesmo), 
o programa deve imprimir a mensagem "O número X é primo", onde X é o número em questão. Caso contrário, 
o programa deve imprimir a mensagem "O número X não é primo".*/

// let num = parseFloat(prompt("digite um número"))
// let divisão = 0
// for(i = 1; i < num; i++){
//     if(num % i == 0){
//     divisão++
//     }

//     if(divisão = 2){
//         console.log(`o número ${num} é primo`)
//     }else{
//         console.log(`o numero ${num} não é primo`)
//     }
// }
// Configuração
function findGreaterOrEqual(a, b) {
    return (a === b) ? "a and b are equal" 
    : (a > b) ? "a is greater" 
    : "b is greater";
}
console.log(findGreaterOrEqual(1,4))