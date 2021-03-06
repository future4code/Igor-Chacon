let minhaString: string = "Igor Chacon"
console.log(minhaString)
//  a) minhaString = 10 caso eu tente colocar um number ele acusa erro antes mesmo de rodar

var meuNumero: number | string = 10
console.log(meuNumero);
// b) usamos o number | string para a variável também receber strings

const pessoa: {nome: string, idade: number, corFavorita: string} = {
    nome: 'igor',
    idade: 31,
    corFavorita: 'verde'
}

enum corDoArcoires {
    VIOLETA = 'violeta', 
    ANIL = 'anil',
    AZUL = 'azul', 
    VERDE = 'verde', 
    AMARELO = 'amarelo', 
    LARANJA = 'laranja', 
    VERMELHO = 'vermelho'
}

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: corDoArcoires,
    
}

const igor: Pessoa = {
    nome: 'igor',
    idade: 10,
    corFavorita: corDoArcoires.VERDE
}

const gessica: Pessoa = {
    nome: 'gessica',
    idade: 28,
    corFavorita: corDoArcoires.AZUL
}

const gabriel: Pessoa = {
    nome: 'gabriel',
    idade: 4,
    corFavorita: corDoArcoires.ANIL
}

