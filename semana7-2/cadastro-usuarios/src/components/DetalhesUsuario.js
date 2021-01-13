import React from 'react';
import axios from "axios";

export class DetalhesUsuario extends React.Component {

    state = {
        usuario: ""
    }


    componentDidMount = () => {
        this.UsuarioDetalhes()
    }

    UsuarioDetalhes = (userId) => {
        axios
            .get(
                `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,
                {
                    headers: {
                        Authorization: "igor-chacon-epps"
                    }
                }
            )
            .then((resposta) => {
                this.setState({ usuario: resposta.data })
            })
            .catch((err) => {
                console.log(err.message)
            })
    }


    render() {

        return (
            <div>
                Detalhes do Usuário
                <br />
                {this.state.usuario.name}: {this.state.usuario.email}
            </div>
        )
    }
}

export default DetalhesUsuario;