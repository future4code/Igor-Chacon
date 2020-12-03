// Exercício 1
/* O código pede que o usuário digite um número (prompt).
Em seguida pega o número (que era uma string) e transforma em number.
Com isso faz uma condicional onde caso o resto da divisão do número for 0
ele imprime que passou no testo, caso não, imprime que não passou no teste.
Na prática, o código diz se o número é par ou impar.
*/

/* Exercício 2 
a. O código seleciona uma das opções dentro do laço "Switch" dependendo da entrada (fruta).
Em seguida dá a variável "preço" o valor correspondente do caso do switch escolhido.
por fim, imprime a frase com a fruta escolhida e o preço.

b. 
O preço da fruta Maçã é R$ 2.25

c. retirando o break desse case, o código roda o que está no defaut caso se escolha Pêra 
*/

/* Exercício 3
a. A primeira linha do código está pedindo para que o usuário escreva um número e
o transformando em number.

b. se o número digitado for 10 a mensagem será:
Esse número passou no teste

se o número for -10 não haverá mensagem de dentro do if.

c. como a mensagem está declarada como let, ela só pode ser acessada
de dentro do contexto do if.
*/


/* Exercício 4*/

// idadeUsuario = Number(prompt("Escreva sua idade."))
// if (idadeUsuario != false) {
//     if (idadeUsuario >= 18) {
//         console.log("Você pode dirigir.")
//     }else {
//         console.log("Você não pode dirigir.")
//     }
// }else{
//     console.log("Você não digitou um número. Fim")
// }


/* Exercício 5 */

// turdoAluno = prompt("Em qual turno você estuda M (matutino) ou V (Vespertino) ou N (Noturno)?")

// if (turdoAluno === "M") {
//     console.log("Bom dia!")
// }else if (turdoAluno === "V") {
//     console.log("Boa Tarde!")
// }else if (turdoAluno === "N") {
//     console.log("Boa Noite!")
// }else if (turdoAluno != "M" || turdoAluno != "V" || turdoAluno != "N") {
//     console.log("Entrada inválida.")
// }

/* Exercício 6 */

// let turmaAluno = prompt("Em qual turno você estuda M (matutino) ou V (Vespertino) ou N (Noturno)?")
// let mensagemBoasVindas
// switch (turmaAluno) {
//     case "M":
//         mensagemBoasVindas = "Bom dia!"
//         break;
//     case "V":
//         mensagemBoasVindas = "Boa tarde!"
//         break;
//     case "N":
//         mensagemBoasVindas = "Boa Noite!"
//         break;
//     default:
//         mensagemBoasVindas = "Entrada inválida"
//         break;
// }
// console.log(mensagemBoasVindas)

/* Exercício 7 */

// let generoFilme = prompt("Digite o gênero do filme.")
// let precoIngreco = Number(prompt("Digite o preço do ingreço."))

// if (generoFilme === "fantasia" && precoIngreco < 15) {
//     console.log("Bom filme!")
// } else {
//     console.log("Escolha outro filme :(")
// }

/* Desafios */

/* Desafio 1 */

// let generoFilme = prompt("Digite o gênero do filme.")
// let precoIngreco = Number(prompt("Digite o preço do ingreço."))
// let SNACK = prompt("qual o lanche que você vai comprar?")

// if (generoFilme === "fantasia" && precoIngreco < 15) {
//     console.log("Bom filme!")
//     console.log("... com " + SNACK)
// } else {
//     console.log("Escolha outro filme :(")
// }


/* Desafio 2 */

let nomeCliente = prompt("Digite o nome do cliente.")
let tipoJogo = prompt("Digite o tipo de jogo (IN indica internacional; e DO indica doméstico;)")
let etapaJogo = prompt("Digite a etapa do jogo (SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final)")
let categoria = prompt("Escolha categoria (1, 2, 3 ou 4)")
let quantidadeIngressos = prompt("Digite quantidade de ingressos.")
let precoDolar = 4.1

switch (etapaJogo) {
    case "SF":
        if (categoria == 1) {
            precoIngreco = 1320
            precoTotal = quantidadeIngressos * precoIngreco
        } else if (categoria == 2) {
            precoIngreco = 880
            precoTotal = quantidadeIngressos * precoIngreco
        } else if (categoria == 3) {
            precoIngreco = 550
            precoTotal = quantidadeIngressos * precoIngreco
        } else if (categoria == 4) {
            precoIngreco = 220
            precoTotal = quantidadeIngressos * precoIngreco
        }
        break;
    case "DT":
        if (categoria == 1) {
            precoIngreco = 660
            precoTotal = quantidadeIngressos * precoIngreco
        } else if (categoria == 2) {
            precoIngreco = 440
            precoTotal = quantidadeIngressos * precoIngreco
        } else if (categoria == 3) {
            precoIngreco = 330
            precoTotal = quantidadeIngressos * precoIngreco
        } else if (categoria == 4) {
            precoIngreco = 170
            precoTotal = quantidadeIngressos * precoIngreco
        }
    case "FI":
        if (categoria == 1) {
            precoIngreco = 1980
            precoTotal = quantidadeIngressos * precoIngreco
        } else if (categoria == 2) {
            precoIngreco = 1320
            precoTotal = quantidadeIngressos * precoIngreco
        } else if (categoria == 3) {
            precoIngreco = 880
            precoTotal = quantidadeIngressos * precoIngreco
        } else if (categoria == 4) {
            precoIngreco = 330
            precoTotal = quantidadeIngressos * precoIngreco
        }
        break;
    default:
        console.log("Algo deu errado. Comece novamente.")
        break;
}

console.log("---Dados da compra--- ")
console.log("Nome do cliente: " + nomeCliente)
if (tipoJogo == "DO") {
    console.log("Tipo de jogo: Nacional")
} else {
    console.log("Tipo de jogo: Internacional")
}
if (etapaJogo == "SF") {
    console.log("Etapa do jogo: Semifinal")
} else if (etapaJogo == "DT") {
    console.log("Etapa do jogo: Decisão de 3º lugar")
} else if (etapaJogo == "FI") {
    console.log("Etapa do jogo: Final")
}
console.log("Categoria: " + categoria)
console.log("Quantidade de ingressos: " + quantidadeIngressos + " ingressos")
console.log("---Valores--- ")

if (tipoJogo == "DO") {
    console.log("Valor do ingresso: R$" + precoIngreco)
    console.log("Valor total: R$" + precoTotal)
} else if (tipoJogo == "IN") {
    console.log("Valor do ingresso: U$" + precoIngreco/precoDolar)
    console.log("Valor total: U$" + precoTotal/precoDolar)
} else {
    console.log("Algo deu errado. Tente novamente.")
}