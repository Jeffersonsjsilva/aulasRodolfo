/* FAÇA UM PROGRAMA QUE LEIA 5 NUMEROS 
E MOSTRE A SOMA E A MÉDIA DELES.*/

let i = 0

for(let n = 0; n < 5; n++){
    let num = parseFloat(prompt("digite um número"))
   i += num
}
console.log("A soma dos números digitados é : ", i, "e a média deles é: ", i /5)
