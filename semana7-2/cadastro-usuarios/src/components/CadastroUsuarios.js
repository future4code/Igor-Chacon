import React from 'react';
import axios from "axios";

export class CadastroUsuarios extends React.Component {
    state = {
        usuarios: [],
        usuarioValue: "",
        emailValue: "",
    }

    criarUsuario = () => {
        const body = {
            name: this.state.usuarioValue,
            email: this.state.emailValue
        }

        axios
            .post(
                "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
                body,
                {
                    headers: {
                        Authorization: "igor-chacon-epps"
                    }
                }
            )
            .then((res) => {
                this.setState({ usuarioValue: "" })
                this.setState({ emailValue: "" })
            })
            .catch((err) => {
                console.log(err.message)
            })
    }
    

    render() {
        const onChangeUsuarioValue = (event) => {
            this.setState({ usuarioValue: event.target.value });
        }
        const onChangeEmailValue = (event) => {
            this.setState({ emailValue: event.target.value })
        }

        return (
            <div>
                <from>
                    <label>Nome do Usuário: </label>

                    <input 
                    placeholder="Nome do usuário" 
                    value={this.state.usuarioValue} 
                    onChange={onChangeUsuarioValue} 
                    />

                    <br />

                    <label>E-mail do Usuário: </label>
                    <input 
                    placeholder="E-mail do usuário" 
                    value={this.state.emailValue} 
                    onChange={onChangeEmailValue} 
                    />

                    <br />

                    <button>Salvar</button>
                </from>
            </div>
        )
    }
}

export default CadastroUsuarios;