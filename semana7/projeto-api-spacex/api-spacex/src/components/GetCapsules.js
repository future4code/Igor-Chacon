import React from 'react';
import axios from "axios";
import GetOneCapsule from './GetOneCapsule';

export class GetCapsules extends React.Component {

    state = {
        capsulas: [],
        capsula: '',
        capsule_serial: '',
        etapa: 1,
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

    detalhesCapsula = (capsule_serial) => {
        if (this.state.etapa === 1) {
            this.setState({ etapa: 2, capsule_serial: capsule_serial })
        } else {
            this.setState({ etapa: 1, capsule_serial: "" })
        }

    }

    render() {

        const renderCapsulas = this.state.capsulas.map((capsula) => {
            return <p key={capsula.capsule_serial} onClick={() => { this.detalhesCapsula(capsula.capsule_serial) }}> Número de Série:  {capsula.capsule_serial} │
             Status: {capsula.status} │
             Tipo: {capsula.type} │
             <br />
             Missão: {capsula.mission} │ Lançado em: {capsula.original_launch} │
            Lançamentos: {capsula.landings}
                <hr />
            </p>
        })

        return (
            <div>
                {this.state.etapa === 1 ? <div>
                    <br />
                Capsulas Lançadas:
                <br />
                    <br />
                    {this.state.capsulas.length === 0 && <div>Carregando...</div>}
                    <p>{renderCapsulas}</p></div> :

                    <div><GetOneCapsule capsule_serial={this.state.capsule_serial} /></div>}

            </div>
        )
    }
}

export default GetCapsules;