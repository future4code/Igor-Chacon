import React from 'react';
import axios from "axios";

export class ListarUsuarios extends React.Component {

    state = {
        usuarios: []
    }


    render() {

        const  pegarUsuarios = () => {
            axios
                .get(
                    "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
                    {
                        headers: {
                            Authorization: "igor-chacon-epps"
                        }
                    }
                )
                .then((resposta) => {
                    this.setState({ usuarios: resposta.data.result.list })
                })
                .catch((err) => {
                    console.log(err.message)
                })
        }

        return (
            <div>
                {pegarUsuarios()}
                Lista de Usuários
            </div>
        )
    }
}

export default ListarUsuarios;