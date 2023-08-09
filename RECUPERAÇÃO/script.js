/* 01 -criar um programa que solicita ao usuário que insira seu nome usando o comando prompt() 
e exibe uma mensagem de boas-vindas usando o comando alert().*/
// let nome = prompt("Digite seu nome")
// alert(`Seja Bem-indo ${nome}`)

/* 02 - Exemplo: criar um programa que verifica se um número é par ou ímpar usando o 
operador de resto e o operador de igualdade.*/

// let n = Number(prompt("Digite um número"))
// if(n % 2 === 0){
//     alert(`O número ${n} é par`)
// }else{
//     alert(`O número ${n} é impar`)
// }

/*03 - Exemplo: criar um programa que percorre um vetor de 
números usando a estrutura de repetição for e exibe a soma 
dos números usando o método reduce(). */

// const arr = [1,2,3,4,5]
// let soma = (a,b) => a+b

// // for(let x = 0; x < arr.length; x++){
// // soma += arr[x]
// // }
//USANDO O REDUCE()
// const total = arr.reduce(soma,0)
// console.log(total)

/* 04 - Exemplo: criar um programa que solicita ao usuário que insira 
uma lista de números separados por vírgulas usando o comando prompt() 
e exibe a soma e a média dos números usando métodos de vetor em JavaScript, 
como split() e reduce(). Em seguida, exibe os números ordenados em ordem 
crescente usando o método sort(). */




// const n = Number(prompt("Quantos números você irá digitar?"))
// for(let x = 0; x < n; x++){
//     let arr = [Number(prompt("Digite os números separados por virgula exemplo: 1,2,3,4,5"))]
//     console.log(arr)
// }
// let soma = (a,b) => a+b && a/b
// const total = arr.reduce(soma,0)

/* 01 -criar um programa que solicita ao usuário que insira seu nome usando o comando prompt() 
e exibe uma mensagem de boas-vindas usando o comando alert().*/
// let nome = prompt("Digite seu nome")
// alert(`Seja Bem-indo ${nome}`)

/* 02 - Exemplo: criar um programa que verifica se um número é par ou ímpar usando o 
operador de resto e o operador de igualdade.*/

// let n = Number(prompt("Digite um número"))
// if(n % 2 === 0){
//     alert(`O número ${n} é par`)
// }else{
//     alert(`O número ${n} é impar`)
// }

/*03 - Exemplo: criar um programa que percorre um vetor de 
números usando a estrutura de repetição for e exibe a soma 
dos números usando o método reduce(). */

// const arr = [1,2,3,4,5]
// let soma = (a,b) => a+b

// // for(let x = 0; x < arr.length; x++){
// // soma += arr[x]
// // }
//USANDO O REDUCE()
// const total = arr.reduce(soma,0)
// console.log(total)

/* 04 - Exemplo: criar um programa que solicita ao usuário que insira 
uma lista de números separados por vírgulas usando o comando prompt() 
e exibe a soma e a média dos números usando métodos de vetor em JavaScript, 
como split() e reduce(). Em seguida, exibe os números ordenados em ordem 
crescente usando o método sort(). */

// const n = Number(prompt("Quantos números você irá digitar?"))
// let arr = []
// for(let x = 0; x < n; x++){
//     let num = [Number(prompt("Digite os números separados por virgula exemplo: 1,2,3,4,5"))]
//     arr = num.concat(arr)
// }
// console.log(arr)
// let soma = (a,b) => a+b
// const total = arr.reduce(soma,0)
// console.log(total)
// const divisao = n/ arr.length
// console.log(divisao)
// console.log(arr.sort())

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0,"Limao","manga")
// console.log(fruits)


// let n = prompt("Digite os números separados por virgula")
// arr =n.split(",")

// console.log (arr)

let n = 15

console.log(n & 9)