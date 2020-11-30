// 1. 
// 10
// 10 5

// 2.
// 10 10 10

let nome
let idade
console.log(typeof nome, typeof idade)

/* O tipo impresos é undefined, pois as variáveis ainda não foram definidas em seu tipo,
só serão quando houver alguma outra definição.*/
nome = prompt("diga seu nome")
idade = prompt("diga sua idade")
console.log(nome)
console.log(idade)

console.log(typeof nome, typeof idade)

/* agora que as variáveis foram definidas, o js pode definir um tipo para elas. */


console.log("Olá " + nome +", você tem " + idade + " anos")


pergunta1 = prompt("1. Qual seu maior sonho?")
pergunta2 = prompt("2. onde você quer estar daqui 10 anos?")
pergunta3 = prompt("3. se voce fosse para uma ilha deserta, qual livro levaria?")
pergunta4 = prompt("4. se fosse um animal, qual seria?")
pergunta5 = prompt("5. se fosse um país, qual seria?")

console.log("Olá " + nome +", você tem " + idade + " anos")
console.log("1. Qual seu maior sonho?")
console.log(pergunta1)
console.log("2. onde você quer estar daqui 10 anos?")
console.log(pergunta2)
console.log("3. se voce fosse para uma ilha deserta, qual livro levaria?")
console.log(pergunta3)
console.log("4. se fosse um animal, qual seria?")
console.log(pergunta4)
console.log("5. se fosse um país, qual seria?")
console.log(pergunta5)

