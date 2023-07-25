/* EXEMPLO - 01*/

// let diaDaSemana = parseFloat(prompt("Digite um número"))

// switch(diaDaSemana){
// case 1:
//     console.log("Segunda-Feira");
//     break;
// case 2:
//     console.log("Terça-Feira");
//     break;
// case 3:
//     console.log("Quarta-Feira");
//     break;
// case 4:
//     console.log("Quinta-Feira");
//     break;
// case 5:
//     console.log("Sexta-Feira");
//     break;
// default:
//     console.log("Fim de semana");
//     break;
// }


/* EXEMPLO - 02 */

// let nomeDaFruta = prompt();

// switch(nomeDaFruta){
//     case "limão":
//     case "uva":
//     case "laranja":
//         console.log("Frutas citricas");
//         break;
//     case "abacate":
//     case "manga":
//     console.log ("Frutas tropicais");
//     break;
//     default:
//         console.log ("Não sei o tipo");
//         break;
// }

/* Exercicio 1 - Crie um programa que solicite ao usuario que insira dois números 
e selecione  uma operação (soma, subtração, multiplicação e divisão).
Use um switch para selecionar a operação apropriada com base na entrada do 
usuario e exiba o resultado no console*/

// let n1 = parseInt(prompt("Digite o primeiro número"));
// let n2 = parseInt(prompt("Digite o segundo número"));
// let op = prompt("Escolha a operação que quer realizar:\n Soma (+) \n Subtração(-)\n Multiplicação (*)\n Divisão (/)");

// switch(op){
//     case "+":
//         console.log("A soma dos números é", n1+n2);
//         break;
//     case "-":
//         console.log("A subtração dos números é", n1-n2);
//         break;
//     case "*":
//         console.log ("A multiplicação dos números é", n1*n2);
//         break;
//     case "/":
//       n2 === 0 ? console.log("impossivel dividir 0 por 0") : console.log("A divisão dos números é", n1/n2);
//         break;
//     default:
//         console.log("não reconheço a operação")
//         break;
//     }

/* exercicio 02 - Escreva um programa em JavaScript que 
solicite ao usuário que insira um número e verifique se ele é 
positivo, negativo ou zero. Se o número for maior que zero, 
o programa deve exibir "O número é positivo". 
Se o número for menor que zero, o programa deve exibir "O número é negativo". 
Se o número for igual a zero, o programa deve exibir "O número é zero". 
Se a entrada do usuário não for um número válido, o programa deve exibir "Entrada inválida".
Para implementar a verificação, utilize um switch statement. O programa deve seguir a seguinte estrutura:
Solicitar ao usuário que insira um número.
Verificar se o número é positivo, negativo ou zero utilizando um switch statement.
Exibir a mensagem correspondente ao tipo de número.
Se a entrada do usuário não for um número válido, exibir "Entrada inválida". */

// let n = parseInt(prompt("Digite um número"))

// switch(true){
//     case (n > 0):
//         console.log("O numero é positivo");
//         break;
//     case (n < 0): 
//         console.log("O número é negativo");
//         break;
//     case (n == 0):
//         console.log ("O número é exatemente zero");
//         break;
//    default:
//         console.log("Entrada invalida");
//         break;
// }

/* Exercicio 02 - Escreva um programa em JavaScript que solicite ao usuário que insira 
um número correspondente ao dia da semana (1-7) 
e exiba o nome do dia da semana correspondente à entrada do usuário. 
Se a entrada do usuário não for um número válido, o programa deve exibir "Entrada inválida".
 
Para implementar a verificação do nome do dia da semana, 
utilize um switch statement. O programa deve seguir a seguinte estrutura:
 
Solicitar ao usuário que insira um número correspondente ao dia da semana (1-7).
Verificar qual é o número inserido pelo usuário e 
exibir o nome do dia da semana correspondente utilizando um switch statement.
Se a entrada do usuário não for um número válido, exibir "Entrada inválida".
 */

// let n = Number(prompt("Digite um número equivalente ao dia da semana:\n Domingo (1)\n Segunda-Feira (2)\n Terça-Feira (3)\n Quarta-Feira (4)\n Quinta-feira (5)\n Sexta-Feira (6)\n Sábado (7)"));
//  switch (n){
//     case 1:
//         console.log("Domingo");
//         break;
//     case 2:
//         console.log("Segunda-Feira");
//         break;
//     case 3:
//         console.log("Terça-Feira");
//         break;
//     case 4:
//         console.log("Quarta-Feira");
//         break;
//     case 5:
//         console.log("Quinta-Feira");
//         break;
//     case 6:
//         console.log("Sexta-Feira");
//         break;
//     case 7:
//         console.log("Sábado");
//         break;
//     default:
//         alert("Não é um numero correspondente a um dia da semana, digite um numero de 1 a 7")
//         break;
//  }

