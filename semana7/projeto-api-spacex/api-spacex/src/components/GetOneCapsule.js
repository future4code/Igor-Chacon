import React from 'react';
import axios from "axios";

export class GetOneCapsule extends React.Component {

    state = {
        capsulas: [],
        capsula: '',
        codigoValue: '',
        capsule_serial: '',
    }

    componentDidMount = () => {

    }

    render() {

        const onChangeCodigoValue = (event) => {
            this.setState({ codigoValue: event.target.value });
        }

        const pegarCapsulas = async (codigoValue) => {
            try {
                const res = await axios
                    .get(
                        `https://api.spacexdata.com/v3/capsules/${codigoValue}`,
                    )
                this.setState({ capsulas: res.data })
            } catch (err) {
                console.log(`Erro: ${err.message} !!!`)
            }
        }

        

        return (
            <div>
                <from>
                    <label>Digite o código de série do lançamento: </label>
                    <input 
                    placeholder="Código de Série" 
                    value={this.state.codigoValue} 
                    onChange={onChangeCodigoValue} 
                    />
                    <button onClick={() => pegarCapsulas(this.state.codigoValue)}>Buscar</button>
                </from>
                <br />
                Detalhes:
                <br />
                Serial: {this.state.capsulas.capsule_serial} <br /> 
                Status: {this.state.capsulas.status}  <br /> 
                Tipo: {this.state.capsulas.type}<br /> 
                Dedalhes: {this.state.capsulas.details}<br /> 
                Lançamento original: {this.state.capsulas.original_launch}<br /> 
                Lançamentos: {this.state.capsulas.landings}<br />                
            </div>
        )
    }
}

export default GetOneCapsule;