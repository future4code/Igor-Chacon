let arrDespesas = []
imprimirDespesas(arrDespesas)
imprimirExtrato()


// PRIMEIRO
function imprimirDespesas(despesas){
    let divDespesas = document.getElementById('despesas')
    divDespesas.innerHTML = '<p><u>Despesas Detalhadas</u></p>'
    
    // AQUI VEM A IMPLEMENTAÇÃO
    const callback = (despesa, index, array) => {
        divDespesas.innerHTML += `Valor: ${despesa.valor} 
                                | Tipo: ${despesa.tipo} 
                                | Descrição: ${despesa.descricao} <br>`
    }
    despesas.forEach(callback)
}


// SEGUNDO 
function imprimirExtrato(){
    let divExtrato = document.getElementById('extrato')
    let gastoTotal = 0
    let gastoAlimentacao = 0
    let gastoUtilidades = 0
    let gastoViagem = 0


    // AQUI VEM A IMPLEMENTAÇÃO
    const callback = (despesa, index, array) => {
        if (despesa.tipo == "alimentação") {
            gastoAlimentacao += despesa.valor
        }
        if (despesa.tipo == "utilidades") {
            gastoUtilidades += despesa.valor
        }
        if (despesa.tipo == "viagem") {
            gastoViagem += despesa.valor
        }
    }

    const callback2 = (despesa, index, array) => {
        return despesa.valor
    }
    //para desafio 3
    let reducer = (acumulador, valorAtual) => { 
        return acumulador + valorAtual
    }

    arrDespesas.forEach(callback)

  
    //linhas 55 e 56 para desafio 3
    const arrValoresDespesa = arrDespesas.map(callback2)
    gastoTotal = arrValoresDespesa.reduce(reducer)

    // gastoTotal += gastoAlimentacao + gastoUtilidades + gastoViagem

    divExtrato.innerHTML = `<p>Extrato: Gasto Total: R$${gastoTotal} | Alimentação: R$${gastoAlimentacao} | 
                                        Utilidades: R$${gastoUtilidades} | Viagem: R$${gastoViagem}</p>`
}


function limparFiltros() {
    document.getElementById('tipoFiltro').value = ""
    document.getElementById('valorFiltroMin').value = ""
    document.getElementById('valorFiltroMax').value = ""
}



function adicionarDespesa(){
    let valorCdt = document.getElementById('valorCadastro')
    let tipoCtd = document.getElementById('tipoCadastro')
    let descricaoCtd = document.getElementById('descricaoCadastro')

    if(validarValor(valorCdt) && validarTipo(tipoCtd) && validarDescricao(descricaoCtd)){
        let novaDespesa = {
            valor: Number(valorCdt.value),
            tipo: tipoCtd.value,
            descricao: descricaoCtd.value,
        }

        arrDespesas.push(novaDespesa)
        
        valorCdt.value = ""
        tipoCtd.value = ""
        descricaoCtd.value = ""

        
        limparFiltros()
        imprimirDespesas(arrDespesas)
        imprimirExtrato()
    } else {
        alert("`Faltou algum valor ou algum valor é um número negativo`")
    }
}



// TERCEIRO
function filtrarDespesas(){
    let tipoFiltro = document.getElementById('tipoFiltro').value
    let valorMin = Number(document.getElementById('valorFiltroMin').value)
    let valorMax = Number(document.getElementById('valorFiltroMax').value)


    let despesasFiltradas = [] // AQUI NESSA VARIÁVEL VEM A IMPLEMENTAÇÃO

    // com desafio 1
    if (tipoFiltro && valorMin && valorMax && valorMin >= 0 && valorMax >= 0 && valorMax >= valorMin) {
        const callback = (despesas, index, array) => {
            if (despesas.tipo === tipoFiltro && despesas.valor >= valorMin && despesas.valor <= valorMax) {
                return true
            } else if (tipoFiltro === "todos") {
                return true
            }
            return false
        }
        despesasFiltradas = arrDespesas.filter(callback)

        imprimirDespesas(despesasFiltradas)
    } else {
        alert("Algo deu errado. Repita!")
        return 0
    }


}

//Desafio 2
const OrdenarDespesas = () => {
    const comparar = (a, b) => {
        const valorA = a.valor
        const valorB = b.valor
        
        let comparar = 0
        if (valorA >= valorB) {
            comparar = -1
        } else if (valorA <= valorB) {
            comparar = 1
        }
        return comparar
    }

    
    arrDespesas = arrDespesas.sort(comparar)

    limparFiltros()
    imprimirDespesas(arrDespesas)
    imprimirExtrato()
}






// FunÇoes que fazem validaÇoes dos inputs de criaÇao de despesas 

// NÃO SE PREOCUPEM EM ENTENDER ESSAS FUNÇÕES

function validarValor(valor){
    if(valor.value.length > 0 && parseInt(valor.value) > 0){
        return true
    }
    return false
}

function validarTipo(tipo){
    if(tipo.value !== ""){
        return true
    }
    return false
}

function validarDescricao(texto){
    if(texto.value.replace(/ /g,"").length !== 0){
        return true
    }
    return false
}