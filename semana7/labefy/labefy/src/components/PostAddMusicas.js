import React from 'react';
import axios from 'axios';

export class PostAddMusicas extends React.Component {

    state = {
        playlists: [],
        playlist: '',
        artistNameValue: '',
        musicNameValue: '',
        musicURLValue: '',
        mostrarCadastro: false,
        musicas: [],
    }

    

    

   
    
    render () {

        const addMusicToPlaylist = async (playlistId) => {
            const body = {
                name: this.state.musicNameValue,
                artist: this.state.artistNameValue,
                url: this.state.musicURLValue
            }
    
            try {
                const res = await axios
                    .post(
                        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`,
                        body,
                        {
                            headers: {
                                Authorization: "igor-chacon-epps"
                            }
                        })
                this.setState({ artistNameValue: "", musicNameValue: "", musicURLValue: ""})
                alert("cadastro feito com sucesso!")
            } catch (err) {
                alert(err)
            }
        }

        const  buscarPlaylists = async (playlistName) => {
            try {
                const res = await axios
                    .get(
                        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/search?name=${playlistName}`,
                        {
                            headers: {
                                Authorization: "igor-chacon-epps"
                            }
                        })
                        this.setState({ playlists: res.data.result.playlist })
            } catch (err) {
                console.log(err.message)
            }
        }

        const onChangePlaylistNameValue = (e) => {
            this.setState({ playlist: e.target.value })
        }

        const onChangeMusicNameValue = (e) => {
            this.setState({ musicNameValue: e.target.value })
        }

        const onChangeArtistNameValue = (e) => {
            this.setState({ artistNameValue: e.target.value })
        }

        const onChangeMusicURLValue = (e) => {
            this.setState({ musicURLValue: e.target.value })
        }

        const buscarMusicasDaPlaylist = async (playlistId) => {
            try {
                const res = await axios
                    .get(
                        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`,
                        {
                            headers: {
                                Authorization: "igor-chacon-epps"
                            }
                        })
                    this.setState({ musicas: res.data.result.tracks })
                    console.log("buscarMusicasDaPlaylist")
            } catch (err) {
                console.log(err)
            }
        }

        const renderMusicas = this.state.musicas.map((musica) => {
            return <p> {musica.name} </p>
        })


        const renderPlaylists = this.state.playlists.map((playlist) => {
            return (
            <div> 
                <p> Nome da Playlist: {playlist.name} <br/></p> 
                <div>
                    <input
                    placeholder="Nome da Música"
                    value={this.state.musicNameValue}
                    onChange={onChangeMusicNameValue}
                        />
                    <br/>

                    <input
                    placeholder="Nome do Artista ou banda"
                    value={this.state.artistNameValue}
                    onChange={onChangeArtistNameValue}
                        />
                    <br/>

                    <input
                    placeholder="URL da música"
                    value={this.state.musicURLValue}
                    onChange={onChangeMusicURLValue}
                    />
                    <br/>

                    <button onClick={() => addMusicToPlaylist(playlist.id)}>Salvar</button>
                    </div>
                    <hr /> 
                    
            </div> 
            )
        })

        const mostrarCadastroBotao = () => {
            alert("true")
            this.setState({ mostrarCadastro: true })
        }



        return (
            <div>
                Adicione músicas a sua playlist!

                <br/>

                <from>
                    <label>Nome da playlist: </label>
                    <br/>

                    <input
                        placeholder="Nome da Playlist"
                        value={this.state.playlist}
                        onChange={onChangePlaylistNameValue}
                    />
                    <br/>

                    <button onClick={() => mostrarCadastroBotao()} onClick={() => buscarPlaylists(this.state.playlist)}>Buscar Playlist</button>

                    {renderPlaylists}
                    
                    <br/>
                    <br/>
                    <br/>
                    <br/>

                    
                </from>

            </div>
        )
    }
}

export default PostAddMusicas;