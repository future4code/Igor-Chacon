import React from 'react';
import axios from "axios";

export class GetCapsules extends React.Component {

    state = {
        capsulas: [],
        capsula: '',
        capsulasNaoLancadas: [],
    }

    componentDidMount = () => {
        this.pegarCapsulas()
    }

    pegarCapsulas = async () => {
        try {
            const res = await axios
                .get(
                    'https://api.spacexdata.com/v3/capsules',
                )
            this.setState({ capsulas: res.data })
        } catch (err) {
            console.log(`Erro: ${err.message} !!!`)
        }
    }

    pegarCapsulasAindaNaoLancadas = async () => {
        try {
            const res = await axios
                .get(
                    'https://api.spacexdata.com/v3/capsules/upcoming',
                )
                this.setState({ capsulasNaoLancadas: res.data})
        } catch (err) {
            console.log(`Erro: ${err.message}`)
        }
    }

    render() {

        const renderCapsulas = this.state.capsulas.map((capsula) => {
            return <p key={capsula.capsule_id}> Número de Série:  {capsula.capsule_serial} │
             Status: {capsula.status} │
             Tipo: {capsula.type} │ 
             <br />
             Missão: {capsula.mission} │ Lançado em: {capsula.original_launch} │ 
            Lançamentos: {capsula.landings}
             </p>
        })

        const renderCapsulasNaoLancadas = this.state.capsulasNaoLancadas.map((capsula) => {
            return <p key={capsula.capsule_id}> Número de Série:  {capsula.capsule_serial} │
            Status: {capsula.status} │
            Tipo: {capsula.type} │ 
            Missão: {capsula.mission} │ 
            <br />
            Lançamentos: {capsula.landings}
            </p>
        })
        return (
            <div>
                Capsulas Lançadas:
                <p>{renderCapsulas}</p>
            </div>
        )
    }
}

export default GetCapsules;