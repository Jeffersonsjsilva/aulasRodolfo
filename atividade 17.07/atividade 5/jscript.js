/* Elabore um algoritmo que calcule o que deve ser pago por um produto.
 considerando o prelo normal de etiqueta e a escolha da condição de pagamento. 
 Utilize os codigos da tabela a seguir e para ler qual a condição de pagamento escolhida e efetuar o calculo adequado

 1 à vista em dinheiro ou cheque, recebe 10% de desconto
 2 à vista no cartão de crédito, recebe 15% de desconto
 3 em duas vezes preço normal de etiqueta sem juros
 4 em tres ou mais vezes preço normal de etiqueta com mais juros de 10% */

let valor = parseFloat(prompt("VALOR DO PRODUTO:"))
let pagamento = parseFloat(prompt("FORMA DE PAGAMENTO:"))
switch(pagamento){
    case 1:
        alert(valor *0.9);
        break;
    case 2:
        alert(valor*0.85);
        break;
    case 3:
        alert(valor /2)
        break;
    case 4:
        alert(valor + ( valor * 0.1)) 
        break;
}
