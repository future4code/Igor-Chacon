import React from 'react';
import axios from "axios";

export class GetPastCapsules extends React.Component {

    state = {
        capsulas: [],
        capsula: '',
    }

    componentDidMount = () => {
        this.pegarCapsulasAntigas()
    }

    pegarCapsulasAntigas = async () => {
        try {
            const res = await axios
                .get(
                    'https://api.spacexdata.com/v3/capsules/past',
                )
            this.setState({ capsulas: res.data })
        } catch (err) {
            console.log(`Erro: ${err.message} !!!`)
        }
    }

    render() {

        const renderCapsulas = this.state.capsulas.map((capsula) => {
            return <p key={capsula.capsule_serial}> Número de Série:  {capsula.capsule_serial} │
             Status: {capsula.status} │
             Tipo: {capsula.type} │
             <br />
             Detalhes: {capsula.details}
             <br />
              │ Lançado em: {capsula.original_launch} │
            Lançamentos: {capsula.landings}
            <hr />
            </p>
        })

        return (
            <div>
                <br />
                Capsulas Antigas:
                <br />
                {this.state.capsulas.length === 0 && <div>Carregando...</div>}
                <p>{renderCapsulas}</p>
            </div>
        )
    }
}

export default GetPastCapsules;