import React from 'react';
import axios from "axios";

export class GetUpcomingCapsules extends React.Component {

    state = {
        capsula: '',
        capsulasNaoLancadas: [],
    }

    componentDidMount = () => {
        this.pegarCapsulasAindaNaoLancadas()
    }

    pegarCapsulasAindaNaoLancadas = async () => {
        try {
            const resposta = await axios
                .get(
                    'https://api.spacexdata.com/v3/capsules/upcoming',
                )
            this.setState({ capsulasNaoLancadas: resposta.data })
        } catch (erro) {
            console.log(`Erro: ${erro.message}`)
        }
    }

    render() {

        const renderCapsulasNaoLancadas = this.state.capsulasNaoLancadas.map((capsula) => {
            return <p key={capsula.capsule_serial}> Número de Série:  {capsula.capsule_serial} 
            │
            Status: {capsula.status} │
            Tipo: {capsula.type} │ 
            Missão: {capsula.mission} │ 
            <br />
            Lançamentos: {capsula.landings}
            </p>
        })
        return (
            <div>
                Capsulas não lançadas:
                {renderCapsulasNaoLancadas}
            </div>
        )
    }
}

export default GetUpcomingCapsules;