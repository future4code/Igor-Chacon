// a. Quais são as entradas e saídas dessa função? Copie a função para um arquivo .ts e faça a tipagem desses parâmetros
// a entrada é um array de números e a saída é o maior número, o menor e a média.

// b. Que outras variáveis compõem essa função? Explicite a tipagem de todas elas 
// temos como variáveis o array numeros, que foi tipado como um array de números,
// soma, que foi tipado como number
// e um objeto com 3 chaves cujos valores focam colocados como number também
// este objeto é retornado no final da função.
function obterEstatisticas(numeros: number[]) {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: {maior: number, menor: number, media: number} = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

console.log(obterEstatisticas([1, 3, 4, 5, 9]));

type amostraDeDados = {
    dados: number[]
    obterEstatisticas: number[]
}