import React from 'react';
import axios from 'axios';

export class PostCriarPlaylists extends React.Component {

    state = {
        playlists: [],
        playlistValue: "",
    }

    criarPlaylist = async () => {
        const body = {
            name: this.state.playlistValue
        }

        try {
            const res = await axios
                .post(
                    `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists`,
                    body,
                    {
                        headers: {
                            Authorization: "igor-chacon-epps"
                        }
                    })
            this.setState({ playlistValue: "" })
            alert('Cadastro feito com sucesso!')
        } catch (err) {
            console.log(err.message)
            alert("Erro ao cadastrar")
            if (err.message === "Request failed with status code 400") {
                alert("Essa playlist já existe")
            }
        }
    }
    render() {

        const onChangePlaylistValue = (e) => {
            this.setState({ playlistValue: e.target.value })
        }


        return (
            <div>
                <div>Criar Playlist</div>
                <from>
                    <label>Nome da playlist: </label>

                    <input
                        placeholder="Nome da playlist"
                        value={this.state.playlistValue}
                        onChange={onChangePlaylistValue}
                    />

                    <button onClick={this.criarPlaylist}>Salvar</button>
                </from>
            </div>
        )
    }
}

export default PostCriarPlaylists;