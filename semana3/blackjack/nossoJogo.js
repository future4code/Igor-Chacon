/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
alert("Bem vindo ao jogo de Blackjack!")
if(confirm("Quer iniciar uma nova rodada?")) {
   console.log("Vamos lá")
   const carta1Jogador = comprarCarta()
   const carta2Jogador = comprarCarta()
   const carta1Computador = comprarCarta()
   const carta2Computador = comprarCarta()
   console.log("Cartas do jogador: "+carta1Jogador.texto, carta2Jogador.texto)
   console.log("Pontuação do jogador: " + (carta1Jogador.valor + carta2Jogador.valor))
   console.log("Cartas do computador: "+carta1Computador.texto, carta2Computador.texto)
   console.log("Pontuação do jogador: " + (carta1Computador.valor + carta2Computador.valor))

   if ((carta1Jogador.valor + carta2Jogador.valor) > (carta1Computador.valor + carta2Computador.valor)) {
      console.log("Jogador ganha a rodada")
   } else if ((carta1Jogador.valor + carta2Jogador.valor) < (carta1Computador.valor + carta2Computador.valor)) {
      console.log("Computador ganha a rodada")
   } else if ((carta1Jogador.valor + carta2Jogador.valor) === (carta1Computador.valor + carta2Computador.valor)) {
      console.log("A rodada empatou")
   }


} else {
   console.log("O jogo acabou.")
	// o que fazer se o usuário clicar "cancelar"
}