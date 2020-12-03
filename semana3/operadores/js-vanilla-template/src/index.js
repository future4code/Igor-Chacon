// 1.
// a. false
// b. false
// c. true,
// e. boolean

// 2.
// a. undefined
// b. null
// c. 11
// d. 3
// e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// f. 9


// 1.
idadeUsuario = prompt("Qual a sua idade?")
idadeAmigo = prompt("Qual idade do seu melhor amigo?")

resultado1 = idadeUsuario > idadeAmigo

console.log("Sua idade é maior do que a do seu melhor amigo? "+resultado1)
console.log(idadeUsuario - idadeAmigo)


// 2.
numero = prompt("Insira um número par.")
console.log(numero%2)
o resultado é sempre zero para números pares.
se o número digitado for impar, o resto é 1


// 3.
listaDeTarefas = []
listaDeTarefas[0] = prompt("digite uma tarefa pra realizar no dia de hoje")
listaDeTarefas[1] = prompt("digite uma tarefa pra realizar no dia de hoje")
listaDeTarefas[2] = prompt("digite uma tarefa pra realizar no dia de hoje")
console.log(listaDeTarefas)
i = prompt("digite um índice já utilizado (0, 1, 2)")
listaDeTarefas.splice(i, 1)
console.log(listaDeTarefas)


// 4.
nomeUsuario = prompt("digite seu nome.")
emailUsuario = prompt("digite seu e-mail.")
console.log("O e-mail " + emailUsuario + " foi cadastrado com sucesso. Seja bem-vindo(a), " +  nomeUsuario + ".")


// Desafios
// 1.
fahrenheit = 77
kelvin = (fahrenheit - 32)*5/9 + 273.15
console.log("77 F em K é: "+kelvin)

celsius = 80
fahrenheit = (celsius)*9/5 + 32
console.log("80C em F é: "+fahrenheit)

celsius = 30
fahrenheit = (celsius)*9/5 + 32
kelvin = (fahrenheit - 32)*5/9 + 273.15
console.log("30C em F é: "+fahrenheit)
console.log("30C em K é: "+kelvin)

celsius = prompt("insira o valor em ºC")
fahrenheit = (celsius)*9/5 + 32
kelvin = (fahrenheit - 32)*5/9 + 273.15
console.log("30C em F é: "+fahrenheit)
console.log("30C em K é: "+kelvin)

// 2.
kwhUsuario = 280
gasto = kwhUsuario*0.05
console.log("O gasto foi de: R$" + gasto)
desconto = 0.15
novoGasto = gasto*(1 - desconto)
console.log("Com desconto de 15% o novo gasto é: R$"+novoGasto)

// 3.
mLb = 20
mKg = mLb * 0.45359237
console.log(mLb + "lb equivalem a "+mKg+" kg")

mOz = 10.5
mKg = mOz * 0.02834952
console.log(mOz + "oz equivalem a "+mKg+" kg")

mi = 100
m = mi * 1609,344
console.log(mi + "mi equivalem a "+m+" m")

ft = 50
m = ft / 3.2808
console.log(ft + "ft equivalem a "+m+" m")

gal = 103.56
l = gal * 3.785412
console.log(gal + "gal equivalem a "+l+" l")

xic = 450
l = xic / 0.24
console.log(xic + "xic equivalem a "+l+" l")

xic = prompt("insira o valor em xic:")
l = xic / 0.24
console.log(xic + "xic equivalem a "+l+" l")