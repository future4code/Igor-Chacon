/* Exercícios de código */
/* Exercício 1 */

/* 
O código está fazendo um loop que inicia em i=0 e vai acescentando +1 em i
enquanto i for menor que 5. A variável valor inicia em 0 e é acrescida 
dela mesma mais o valor de i. 
1º loop i = 0, valor = 0
2º loop i = 1, valor = 1
3º loop i = 2, valor = 3
4º loop i = 3, valor = 6
5º loop i = 4, valor = 10
O resultado final é 10
*/

/* Exercício 2 */

/*
a. Serão impressos todos os números do array lista que sejam maiores que 18,
ou seja: 
19
21
23
25
27
30

b. o mais fácil seria usar for... in, no lugar de for... of
*/

/* Exercícios de escrita de código */

// 3.
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
a.
for (valor of array) {
    console.log(valor)
}


// // // b.
for (valor of array) {
    console.log(valor/10)
}


// // // c.
// let arrayNovo = []
for (valor of array) {
    if (valor%2 === 0) {
        arrayNovo.push(valor)
    }
}
for (valor of arrayNovo) {
    console.log(valor)
}


// // d. 
for (i = 0; i < array.length; i++) {
    console.log("O elemento do índex " + i + " é: " + array[i])
}


// e.
let maiorNumero = 0
let menorNumero = array[0]
for (valor of array) {
    if (valor > maiorNumero) {
        maiorNumero = valor
    }
    if (valor < menorNumero) {
        menorNumero = valor
    }
}
console.log(maiorNumero)
console.log(menorNumero)

