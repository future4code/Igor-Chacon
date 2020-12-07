/* Exercícios de interpretação de código */
/* EXERCÍCIO 1 */
/*
a. 10
50

b. não apareceria nada no console, pois a função está sendo executada, porém, não está imprimindo nada.
*/


/* EXERCÍCIO 2 */
/* 
a. A funçãoo tem um for que imprime o elemento 0 e o elemento 1 do array.
Por isso, a saída são os primeiros 2 elementos do array impressos no console.
"Darvas"
"Caio"

b. seria impresso:
 "Amanda" 
 "Caio"
*/

/*  EXERCÍCIO 3 */
/*
A função está criando um novo array vazio. Depois verifica se os elementos são impares
e se forem, os adiciona ao array arrayFinal, porém, multiplicando esse valor por ele mesmo.
No final, a função retorna o arrayFinal que foi criado.
*/


// Exercícios de escrita de código

// EXERCÍCIO 4
// a.
// function sobreMim() {
//     console.log("Eu sou Igor, tenho 31 anos, moro em Natal e sou psicólogo e professor.")
// }
// sobreMim()

// b.
// function sobreMim2(nome, idade, cidade, estudante) {
//     if (estudante) {
//         console.log("Eu sou " + nome + ", tenho " + idade + " anos, moro em " + cidade + " e sou estudante.")
//     } else {
//         console.log("Eu sou " + nome + ", tenho " + idade + " anos, moro em " + cidade + " e não sou estudante.")
//     }
// }

// sobreMim2("nome", 31, "cidade", false)

/* EXERCÍCIO 5 */
// a.
// let soma = function (x, y) {
//     s = x + y
//     return s
// }
// console.log(soma(10, 20))

// b.
// let verificacao = function (num1, num2) {
//     if (num1 > num2) {
//         return true
//     } else if (num2 > num1) {
//         return false
//     } else if (num1 === num2) {
//         return false
//     }
// }
// console.log(verificacao(40, 30))

// c.
// let repeticao = function (frase) {
//     for (i = 0; i < 10; i++) {
//         console.log(frase)
//     }
// }
// repeticao("olá, mundo")

// EXERCÍCIO 6 //

// a.
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

function contaArray(array) {
    console.log(array.length)
}
contaArray(array)

// b.
let parOuImpar = function (numero) {
    if (numero %2 === 0) {
        return true
    } else {
        return false
    }
}
console.log(parOuImpar(7))

// c.
let quantosPares = (a) => {
    let cont = 0
    for (let x of a) {
        if (x %2 === 0) {
            cont++
        } else {
            cont = cont
        }
    }
    return cont
}

console.log(quantosPares(array))

// d.
let parOuImpar = function (numero) {
    if (numero %2 === 0) {
        return true
    } else {
        return false
    }
}
let quantosParesD = (a) => {
    let cont = 0
    for (let x of a) {
        if (parOuImpar(x)) {
            cont++
        } else {
            cont = cont
        }
    }
    return cont
}
console.log(quantosParesD(array))
