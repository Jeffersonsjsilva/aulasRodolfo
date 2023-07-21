/* faça um algoritmo que pergunte ao usuario uma operação
e um número e depois exiba sua respectiva tabuada*/

let op = prompt("Qual é a operação desejada? ")
let n = parseFloat(prompt("Qual é o número? "))

for(let i = 0; i <=10; i++){
    switch(op){
        case "+":
            console.log(`${n} + ${i} = ${n+i}`)
            break;
        case "*":
            console.log(`${n} * ${i} = ${n*i}`);
            break;
        case "/":
            n===0 && i===0 ? console.log("Impossivel dividir 0 por 0") : console.log (`${n} / ${i} = ${n/i}`);
            break;
        case "-":
            console.log(`${n} - ${i} = ${n-i}`)
            break;
    }

}