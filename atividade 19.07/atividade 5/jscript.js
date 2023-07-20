/* FAÇA UM PROGRAMA QUE LEIA 5 NÚMEROS E INFORME O MAIOR NÚMERO*/
let maior = 0
for(let mN = 0; mN < 5; mN++){
  let n = parseInt(prompt("Digite um número"))
  if (n > 0 ){
    maior = n;
  }
  if (n < maior){
  maior = n; 
}
}
console.log("O maior número é: ", maior)
