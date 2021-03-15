/*
a) Responda como comentário no seu código: como 
fazemos para acessar os parâmetros passados na 
linha de comando para o Node?

utilizando o process.argv a partir do [2]
*/
const nome = process.argv[2]
const idade = Number(process.argv[3])
console.log(`Olá, ${nome}! você tem ${idade} anos.`)
const novaIdade = Number(process.argv[3]) + 7
console.log(`Olá, ${nome}! você tem ${idade} anos. Em sete anos você terá ${novaIdade}`)