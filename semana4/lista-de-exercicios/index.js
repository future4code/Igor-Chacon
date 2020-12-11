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
const quantidadeDeNumerosPares = prompt("quantidadeDeNumerosPares")
let i = 0
while(i < quantidadeDeNumerosPares*2) {
    if (i % 2 == 0) {
        console.log(i)
    }
    i++
}