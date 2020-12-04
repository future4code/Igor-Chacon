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
// // // a.
console.log("3. a. ")
for (valor of array) {
    console.log(valor)
}

// // // b.
console.log("3. b. ")
for (valor of array) {
    console.log(valor/10)
}


// // // c.
console.log("3. c. ")
let arrayNovo = []
for (valor of array) {
    if (valor%2 === 0) {
        arrayNovo.push(valor)
    }
}
for (valor of arrayNovo) {
    console.log(valor)
}


// // // d. 
console.log("3. d. ")
for (i = 0; i < array.length; i++) {
    console.log("O elemento do índex " + i + " é: " + array[i])
}


// // e.
console.log("3. e. ")
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
console.log("O maior número é " + maiorNumero +  " e o menor é " + menorNumero)


/* Desafios */
/* DESAFIO 1 */
/*
O código imprime linhas com 0, um 0 para a primeira linha, dois para a segunda e assim por diante.
se o usuário digitar 4, a respota será:
0
00
000
0000
*/

/* DESAFIO 2 */
console.log("Desafio 2 ")
alert("Vamos jogar!")
let numeroAlvo = Number(prompt("Escolha o número!"))
alert("Agora o outro jogador tenta advinhar! Boa sorte")
let numeroChutado

while (numeroChutado !== numeroAlvo) {
    numeroChutado = Number(prompt("Chute um número"))
    if (numeroChutado > numeroAlvo) {
        
        console.log("O número chutado foi: " + numeroChutado)
        console.log("O número chutado é maior que o número alvo.")
        console.log("DIMINUA DIMINUA DIMINUA")
        
    } else if (numeroChutado < numeroAlvo) {
        
        console.log("O número chutado foi: " + numeroChutado)
        console.log("O número chutado é menor que o número alvo.")
        console.log("AUMENTE AUMENTE AUMENTE")
        
    }

}

console.log("Você acertou! O número era: " + numeroAlvo)





