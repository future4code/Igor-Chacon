// Exercícios de interpretação de código
// 1
/*
O código é uma função que recebe um valor, pega esse valor numérico que é recebido em uma string, mas é transformado em number,
depois retorna "R$" + o valor informado multiplicado pela cotação
depois de executar a função, ele chama essa função (recebendo o valor 100) e guarda na variável "meuDinheiro"
por fim, imprime essa variável.
*/

// 2
/*
Uma função que recebe dois parâmetros. Dentro dela, cria uma variável (valorAposInvestimento), cria um switch com 5 casos de tipos de investimento e, dependendo do case,
multiplica o valor colocado como parâmetro e o multiplia por um número, o guardando na variável valorAposInvestimento. Por fim, retorna valorAposInvestimento.
ao final, invoca a função duas vezes, uma para os marâmetros "Ações" e 150 e outra para "Tesouro direto" e 200, guardando o retorno em duas variáveis. Por fim, imprime no console essas variáveis.
*/

// 3
/*
Cria 3 arrays, um com números definidos e outro vazio.
Depois há um for que preenche os dois arrays vazios, um com números impares e outro com os números pares
do array inicialmente declarado com números.
por fim, imprime 3 coisas:
primeiro a quantidade de elementos do primeiro array
depois o tamanho do array que recebeu os números pares do primeiro array
depois o tamanho do array que recebem os números ímpares do primeiro array
*/

// 4
/*
cria um array com números chamado numeros
cria uma variável numero1 que guarda o valor Infinity
cria uma variável numero2 com o valor 0
Em um for, guarda na variavel numero1 o menor valor do array numeros
e o maior valor do array numeros na variável numero2
por fim, imprime numero1 e numero2
*/


// Exercícios de Lógica de Programação
// 1.
/*
Podemos iterar uma lista (array, obj, etc), usando um filter, map ou forEach
*/
let arr = [1, 2, 3, 4, 5]

let pessoas = [
    pessoa1 = {
        nome: "joao",
        idade: 16,
        peso: 60,
    },
    pessoa2 = {
        nome: "Maria",
        idade: 17,
        peso: 50,
    },
    pessoa3 = {
        nome: "Vitor",
        idade: 50,
        peso: 70,
    }
]
const callbackForEach = (parametro, index, array) => {
    console.log(parametro)
}
// arr.forEach(callbackForEach)

const callbackMap = (parametro, index, array) => {
    return parametro.nome
}
arrNomes = pessoas.map(callbackMap)
// console.log(arrNomes)

const callbackFilter = (parametro, index, array) => {
    return parametro.idade < 18
}

let arrMenores = pessoas.filter(callbackFilter)
// console.log(arrMenores)

// // 2
// const booleano1 = true
// const booleano2 = false
// const booleano3 = !booleano2 // booleano3 == true
// const booleano4 = !booleano3 // booleano4 == false
/*
a) booleano1 && booleano2 && !booleano4
false
b) (booleano1 && booleano2) || !booleano3
false
c) (booleano2 || booleano3) && (booleano4 || booleano1)
true
d) !(booleano2 && booleano3) || !(booleano1 && booleano3)
true
e) !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)
true
*/

// 3
// o codigo dado ainda não funciona, falta inicializar quantidadeDeNumerosPares e fazer ajustes. Também falta fazer parar e mandar imprimir apenas os pares!!!!
// const quantidadeDeNumerosPares = prompt("quantidadeDeNumerosPares")
// let i = 0
// while(i < quantidadeDeNumerosPares*2) {
//     if (i % 2 == 0) {
//         console.log(i)
//     }
//     i++
// }

// 4 
// const verificaTriangulo = (a, b, c) => {
//     if (a == b && a == c && c == b) {
//         return console.log("Triangulo Equilátero")
//     } else if (a != b && a != c && b != c) {
//         return console.log("Triangulo Escaleno")
//     } else if (a == b || a == c || b == c) {
//         return console.log("Triangulo Isósceles")
//     }
// }
// const lado1 = prompt("lado1")
// const lado2 = prompt("lado2")
// const lado3 = prompt("lado3")
// verificaTriangulo(lado1, lado2, lado3)

// 5
const funcEx5 = (num1, num2) => {
    if (num1 > num2) {
        console.log("O maior é: " + num1)
    } else if (num2 > num1) {
        console.log("O maior é: " + num2)
    } else if (num1 === num2) {
        console.log("erro")
    }

    if (num1 % num2 == 0) {
        console.log(num1 + " é divisível por " + num2)
    } else {
        console.log(num1 + " não é divisível por " + num2)
    }

    if (num2 % num1 == 0) {
        console.log(num2 + " é divisível por " + num1)
    } else {
        console.log(num2 + " não é divisível por " + num1)
    }

    if (num1 > num2) {
        console.log("A diferença entre eles é: " + (num1 - num2))
    } else if (num2 > num1) {
        console.log("A diferença entre eles é: " + (num2 - num1))
    } else if (num1 === num2) {
        console.log("A diferença entre eles é: " + (num2 - num1))
    }

}
// funcEx5(5, 10)

// exercícios de funções
// 1
const numeros = [5, 6, 200, 4, 7, 22, 8, 50, 99, 21, 100]
let maior = 0
let sMaior = 0
const maiorNumero = (arr, indice) => {

    if (numeros[indice] > maior) {
        maior = numeros[indice]
    }
}
numeros.forEach(maiorNumero)
// console.log(maior)
// console.log(sMaior)

// 2
const alertando = function () {
    return alert("Hello Labenu!")
}

const alerta = alertando()