let tarefas = [
    'comprar leite',
    'comprar bananinhas'
]

const addTarefa = (tarefa) => {
    tarefas.push(tarefa)
    console.log("Tarefa adicionada com sucesso!")
    console.log(`tarefas:`)
    console.log(tarefas)
}

addTarefa(process.argv[2])

