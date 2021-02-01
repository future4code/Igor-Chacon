import React from 'react';
import axios from "axios";

export class GetOneCapsule extends React.Component {

    state = {
        capsulas: [],
        capsula: '',
        codigoValue: '',
        capsule_serial: '',
        mostrarDetalhes: false,
    }

    componentDidMount = () => {

    }

    render() {

        const onChangeCodigoValue = (event) => {
            this.setState({ codigoValue: event.target.value });
        }

        const pegarCapsulas = async () => {
            try {
                const res = await axios
                    .get(
                        `https://api.spacexdata.com/v3/capsules/${this.props.capsule_serial}`,
                    )
                this.setState({ capsulas: res.data })
                if (this.state.mostrarDetalhes === false) {
                    this.setState({ mostrarDetalhes: true })
                }
            } catch (err) {
                console.log(`Erro: ${err.message} !!!`)
            }
        }

        const buscarCapsulas = async (capsule_serial) => {
            try {
                const res = await axios
                    .get(
                        `https://api.spacexdata.com/v3/capsules/${capsule_serial}`,
                    )
                this.setState({ capsulas: res.data })
                if (this.state.mostrarDetalhes === false) {
                    this.setState({ mostrarDetalhes: true })
                }
            } catch (err) {
                console.log(`Erro: ${err.message} !!!`)
            }
        }
        

        

        return (
            <div>
                <from>
                <br />
                    <label>Digite o código de série do lançamento: </label>
                    <input 
                    placeholder="Código de Série" 
                    value={this.state.codigoValue} 
                    onChange={onChangeCodigoValue} 
                    />
                    
                    <button onClick={pegarCapsulas(this.state.codigoValue), () => buscarCapsulas(this.state.codigoValue)}>Buscar</button>
                </from>
                <br />
                {this.state.mostrarDetalhes === false ? <div></div> :
                    <div>
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
                }

            </div>
        )
    }
}

export default GetOneCapsule;