
document.getElementById("button").onclick = function AddTarefa() {
    valorTarefa = document.getElementById("tarefa").value //pega o valor da tarefa
    valorDia = document.getElementById("dias-semana").value //pega o dia da semana
    valorHora = document.getElementById("horas-dia").value //pega hora do dia
    listaTarefaDoDia = document.getElementById(valorDia) //pega o elemento cujo dia foi escolhido
    if (valorTarefa === "") {
        alert("Foi detectada a tentativa de adicionar uma tarefa inválida.")
    } else {
        let h = new Date()
        numeroID = h.getTime()  //numero identificador da tarefa em seu id para manipulá-la.
        listaTarefaDoDia.innerHTML += `<div><li id=\"${numeroID}\" onclick=\"riscar(${numeroID})\" class=\"deletavel\">${valorHora.bold()} - ${valorTarefa}</li></div>`

    }
    document.getElementById("tarefa").value = ""
}

function riscar(idTarefa) {
    let tarefaRiscada = document.getElementById(idTarefa)
    tarefaRiscada.classList.add("riscar")
}

document.getElementById("buttonDelete").onclick = function deletarTarefas() {
    if (confirm("Tem certeza?")) {
        arrayDiasSemana = ["domingo", "segunda", "terca", "quarta", "quinta", "sexta", "sabado"]
        for (let i = 0; i < arrayDiasSemana.length; i++) {
            dia = document.getElementById(`${arrayDiasSemana[i]}`)
            dia.innerHTML = ""
        }
    }
}