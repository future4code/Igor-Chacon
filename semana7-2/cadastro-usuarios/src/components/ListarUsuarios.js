import React from 'react';
import axios from "axios";

export class ListarUsuarios extends React.Component {

    state = {
        usuarios: [],
        usuario: ''
    }

    componentDidMount = () => {
        this.pegarUsuarios()
    }


    pegarUsuarios = async () => {
        try {
            const resposta = await axios
                .get(
                    "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
                    {
                        headers: {
                            Authorization: "igor-chacon-epps"
                        }
                    })
            this.setState({ usuarios: resposta.data })
        } catch (err) {
            console.log(err.message)
        }
    }


    render() {

        const deletarUsuario = async (userId) => {
            try {
                if (window.confirm("Tem certeza que deseja excluir esse usuário?")) {
                    const request = await axios
                        .delete
                        (
                            `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,
                            {
                                headers: {
                                    Authorization: "igor-chacon-epps"
                                }
                            })
                    this.pegarUsuarios()
                    alert(`O usuário foi excluído.`)

                } else {
                    return alert("Usuário não excluído.")
                }
            } catch (err) {
                    console.log(`Erro: ${err.message}`)
                    alert(`Erro ao excluir o usuário. Ele não foi excluído.`)
                }
            }
        

        const chamarDetalhes = async (userId) => {
            try {
                const resposta = await axios
                .get(
                    `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,
                    {
                        headers: {
                            Authorization: "igor-chacon-epps"
                        }
                    })
                    this.setState({ usuario: resposta.data })
                    console.log(this.state.usuario.name)

                } catch(err) {
                    console.log(err.message)
                }
            }


        const renderUsuarios = this.state.usuarios.map((usuario) => {
            return <p key={usuario.id} onClick={() => chamarDetalhes(usuario.id)}>{usuario.name} <button onClick={() => deletarUsuario(usuario.id)}>X</button> </p>
        })

        const nomeUsuario = this.state.usuario.name
        const emailUsuario = this.state.usuario.email

        return (
            <div>
                Lista de Usuários
                {renderUsuarios}

                <div>
                    {nomeUsuario}
                    <br />
                    {emailUsuario}
                </div>

            </div>
        )
    }
}


export default ListarUsuarios;

