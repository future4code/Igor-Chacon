// // Exercícios de interpretação de código
// // 1
// /*
// O código é uma função que recebe um valor, pega esse valor numérico que é recebido em uma string, mas é transformado em number,
// depois retorna "R$" + o valor informado multiplicado pela cotação
// depois de executar a função, ele chama essa função (recebendo o valor 100) e guarda na variável "meuDinheiro"
// por fim, imprime essa variável.
// */

// // 2
// /*
// Uma função que recebe dois parâmetros. Dentro dela, cria uma variável (valorAposInvestimento), cria um switch com 5 casos de tipos de investimento e, dependendo do case,
// multiplica o valor colocado como parâmetro e o multiplia por um número, o guardando na variável valorAposInvestimento. Por fim, retorna valorAposInvestimento.
// ao final, invoca a função duas vezes, uma para os marâmetros "Ações" e 150 e outra para "Tesouro direto" e 200, guardando o retorno em duas variáveis. Por fim, imprime no console essas variáveis.
// */

// // 3
// /*
// Cria 3 arrays, um com números definidos e outro vazio.
// Depois há um for que preenche os dois arrays vazios, um com números impares e outro com os números pares
// do array inicialmente declarado com números.
// por fim, imprime 3 coisas:
// primeiro a quantidade de elementos do primeiro array
// depois o tamanho do array que recebeu os números pares do primeiro array
// depois o tamanho do array que recebem os números ímpares do primeiro array
// */

// // 4
// /*
// cria um array com números chamado numeros
// cria uma variável numero1 que guarda o valor Infinity
// cria uma variável numero2 com o valor 0
// Em um for, guarda na variavel numero1 o menor valor do array numeros
// e o maior valor do array numeros na variável numero2
// por fim, imprime numero1 e numero2
// */


// // Exercícios de Lógica de Programação
// // 1.
// /*
// Podemos iterar uma lista (array, obj, etc), usando um filter, map ou forEach
// */
// let arr = [1, 2, 3, 4, 5]

// let pessoas = [
//     pessoa1 = {
//         nome: "joao",
//         idade: 16,
//         peso: 60,
//     },
//     pessoa2 = {
//         nome: "Maria",
//         idade: 17,
//         peso: 50,
//     },
//     pessoa3 = {
//         nome: "Vitor",
//         idade: 50,
//         peso: 70,
//     }
// ]
// const callbackForEach = (parametro, index, array) => {
//     console.log(parametro)
// }
// // arr.forEach(callbackForEach)

// const callbackMap = (parametro, index, array) => {
//     return parametro.nome
// }
// arrNomes = pessoas.map(callbackMap)
// // console.log(arrNomes)

// const callbackFilter = (parametro, index, array) => {
//     return parametro.idade < 18
// }

// let arrMenores = pessoas.filter(callbackFilter)
// // console.log(arrMenores)

// // // 2
// // const booleano1 = true
// // const booleano2 = false
// // const booleano3 = !booleano2 // booleano3 == true
// // const booleano4 = !booleano3 // booleano4 == false
// /*
// a) booleano1 && booleano2 && !booleano4
// false
// b) (booleano1 && booleano2) || !booleano3
// false
// c) (booleano2 || booleano3) && (booleano4 || booleano1)
// true
// d) !(booleano2 && booleano3) || !(booleano1 && booleano3)
// true
// e) !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)
// true
// */

// // 3
// // o codigo dado ainda não funciona, falta inicializar quantidadeDeNumerosPares e fazer ajustes. Também falta fazer parar e mandar imprimir apenas os pares!!!!
// // const quantidadeDeNumerosPares = prompt("quantidadeDeNumerosPares")
// // let i = 0
// // while(i < quantidadeDeNumerosPares*2) {
// //     if (i % 2 == 0) {
// //         console.log(i)
// //     }
// //     i++
// // }

// // 4 
// // const verificaTriangulo = (a, b, c) => {
// //     if (a == b && a == c && c == b) {
// //         return console.log("Triangulo Equilátero")
// //     } else if (a != b && a != c && b != c) {
// //         return console.log("Triangulo Escaleno")
// //     } else if (a == b || a == c || b == c) {
// //         return console.log("Triangulo Isósceles")
// //     }
// // }
// // const lado1 = prompt("lado1")
// // const lado2 = prompt("lado2")
// // const lado3 = prompt("lado3")
// // verificaTriangulo(lado1, lado2, lado3)

// // 5
// const funcEx5 = (num1, num2) => {
//     if (num1 > num2) {
//         console.log("O maior é: " + num1)
//     } else if (num2 > num1) {
//         console.log("O maior é: " + num2)
//     } else if (num1 === num2) {
//         console.log("erro")
//     }

//     if (num1 % num2 == 0) {
//         console.log(num1 + " é divisível por " + num2)
//     } else {
//         console.log(num1 + " não é divisível por " + num2)
//     }

//     if (num2 % num1 == 0) {
//         console.log(num2 + " é divisível por " + num1)
//     } else {
//         console.log(num2 + " não é divisível por " + num1)
//     }

//     if (num1 > num2) {
//         console.log("A diferença entre eles é: " + (num1 - num2))
//     } else if (num2 > num1) {
//         console.log("A diferença entre eles é: " + (num2 - num1))
//     } else if (num1 === num2) {
//         console.log("A diferença entre eles é: " + (num2 - num1))
//     }

// }
// // funcEx5(5, 10)

// // exercícios de funções
// // 1
// const numeros = [5, 6, 800, 1, 200, 4, 7, 22, 999, 8, 50, 99, 21, 100]
// let maior = 0
// let sMaior = 0
// let menor = Infinity
// let sMenor = Infinity
// const segundoMaiorMenor = (array) => {

//     // para segundo maior
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > maior) {
//             maior = array[i]
//         }
//     }

//     array.splice(array.indexOf(maior), 1)
//     novoArray = array

//     for (let i = 0; i < novoArray.length; i++) {
//         if (novoArray[i] > sMaior) {
//             sMaior = novoArray[i]
//         }
//     }

//     // para segundo menor
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] < menor) {
//             menor = array[i]
//         }
//     }

//     array.splice(array.indexOf(menor), 1)
//     novoArrayMenor = array

//     for (let i = 0; i < novoArrayMenor.length; i++) {
//         if (novoArrayMenor[i] < sMenor) {
//             sMenor = novoArrayMenor[i]
//         }
//     }
//     console.log("O segundo maior é: "+sMaior)
//     console.log("O segundo menor é: "+sMenor)
// }
// // segundoMaiorMenor(numeros)


// // 2
// const alertando = function () {
//     return alert("Hello Labenu!")
// }

// // const alerta = alertando()

// // Exercícios objetos
// /*
// 1.
// arrays são listas de elementos, já objetos são listas de objetos que tem chava e valor.
// Podemos usar arrays quando precisamos guardar uma lista de elementos e objetos quando queremos elementos com características próprias.
// */

// // 2

// const criaRetangulo = (lado1, lado2) => {
//     return retanguloNovo = {
//         largura: lado1,
//         altura: lado2,
//         perimetro: 2*(lado1+lado2),
//         area: lado1*lado2,
//     }
// }

// ret = criaRetangulo(90, 3)
// // console.log(ret)

// // 3
// filme = {
//     titulo: "Brilho eterno de uma mente sem lembranças",
//     ano: 2004,
//     diretor: "Michel Gondry",
//     atores: ["Jim Carrey", "Kate Winslet", "Kirsten Dunst"]
// }

// // console.log(`Venha assistir ao filme ${filme.titulo}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}`)

// // 4
// pessoa = {
//     nome: "Qualquer da Silva", idade: "33", email: "joao@gmail.com", endereco: "rua tal",
// }

// const anonimizarPessoa = (objPessoa) => {
//     let NovoObjPessoa = { ... objPessoa}
//     NovoObjPessoa.nome = "ANÔNIMO"
//     return NovoObjPessoa
// }
// novaPessoa = anonimizarPessoa(pessoa)
// // console.log(novaPessoa)

// // Exercícios funções de array
// // 1
// // a)
// let listaPessoas = [
// 	{ nome: "Pedro", idade: 20 },
// 	{ nome: "João", idade: 10 },
// 	{ nome: "Paula", idade: 12 },
// 	{ nome: "Artur", idade: 89 } 
// ]

// const listaAdultos = listaPessoas.filter((adultos, index, array) => {
//     if (adultos.idade >= 18) {
//         return true
//     }
//     return false
// })
// // console.log(listaAdultos)

// // b)
// const listaCriancas = listaPessoas.filter((adultos, index, array) => {
//     if (adultos.idade < 18) {
//         return true
//     }
//     return false
// })
// // console.log(listaCriancas)


// // 2
// // a)
// const array = [1, 2, 3, 4, 5, 6]

// const callbackDobrar = (numero, index, array) => {
//     return numero*2
// }
// const dobrados = array.map(callbackDobrar)
// // console.log(dobrados)

// // b)
// const callbackTriplicar = (numero, index, array) => {
//     let novoNUmero = numero*3
//     let novoString = novoNUmero.toString()
//     return novoString
// }
// const triplicados = array.map(callbackTriplicar)
// // console.log(triplicados)

// // c)
// const parOuImpar = array.map((numero, index, array) => {
//     if (numero % 2 === 0) {
//         return `${numero} é par`
//     } else {
//         return `${numero} é impar`
//     }
// })
// // console.log(parOuImpar)

// // 3

const pessoas = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]

// // a)

const verificarAcessoPermitido = (pessoa) => {
    const acessoPermitido = pessoas.filter((pessoa, index, array) => {
        if (pessoa.idade >= 15 && pessoa.idade <= 60 && pessoa.altura >= 1.5) {
            return true
        }
        return false
    })
}

console.log(verificarAcessoPermitido(pessoas))

// b) 
const acessoNegado = pessoas.filter((pessoa, index, array) => {
    if (pessoa.idade >= 15 && pessoa.idade <= 60 && pessoa.altura >= 1.5) {
        return false
    }
    return true
})
// console.log(acessoNegado)


// 4
const consultas = [
	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
]

const enviarEmail = consultas.map((consulta, index, array) => {
    if (consulta.cancelada === false && consulta.genero === "masculino") {
        return `Olá, Sr. ${consulta.nome}. Estamos enviando esta mensagem para ${consulta.nome} da sua consulta no dia ${consulta.dataDaConsulta}. Por favor, acuse o recebimento deste e-mail.`
    }
    if (consulta.cancelada === false && consulta.genero === "feminino") {
        return `Olá, Sra. ${consulta.nome}. Estamos enviando esta mensagem para ${consulta.nome} da sua consulta no dia ${consulta.dataDaConsulta}. Por favor, acuse o recebimento deste e-mail.`
    }
    if (consulta.cancelada === true && consulta.genero === "masculino") {
        return `Olá, Sr. ${consulta.nome}. Infelizmente, sua consulta marcada para o dia ${consulta.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la`
    }
    if (consulta.cancelada === true && consulta.genero === "feminino") {
        return `Olá, Sra. ${consulta.nome}. Infelizmente, sua consulta marcada para o dia ${consulta.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la`
    }
    })
// console.log(enviarEmail)

// 5
const contas = [
	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
]

const atualizarContas = (conta) => {
    contas.forEach((conta, index, array) => {
        totalCompras = 0
        for (let i = 0; i < (conta.compras).length; i++) {
            totalCompras += conta.compras[i]
        }
        console.log(conta.cliente, totalCompras)
        conta.saldoTotal = conta.saldoTotal - totalCompras
    })
    return conta
}


// console.log(atualizarContas(contas))

