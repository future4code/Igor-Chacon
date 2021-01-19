import React from 'react';
import axios from 'axios';

export class GetMusicas extends React.Component {

    state = {
        playlistValue: '',
        musicas: [],
        playlists: [],
        mostrarMusicas: false,
    }
    
    render () {

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
                    console.log(res.data.result.tracks)
            } catch (err) {
                console.log(err)
            }
        }

        const onChangePlaylistValue = (e) => {
            this.setState({ playlistValue: e.target.value })
    }

    const renderMusicas = this.state.musicas.map((musica) => {
        return <p> {musica.artist}: {musica.name} <br /> <audio controls> <source src={musica.url} type="audio/mpeg"/> </audio> </p>
    })

    const renderPlaylists = this.state.playlists.map((playlist) => {
        return <div> <br/> <p onClick={() => buscarMusicasDaPlaylist(playlist.id)}> Nome da Playlist: {playlist.name} <br/> </p> <hr /> </div> 
    })

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
                    console.log(res.data)
                    this.setState({ mostrarMusicas: true })
        } catch (err) {
            console.log(err.message)
        }
    }

        return (
            <div>
                <from>
                    <label>Busque uma playlist e clique nela para detalhes: </label>
                    <br/>
                    <input
                        placeholder="Nome da playlist"
                        value={this.state.playlistValue}
                        onChange={onChangePlaylistValue}
                    />

                    <button onClick={() => {buscarPlaylists(this.state.playlistValue)}}>Buscar</button>
                </from>
                {renderPlaylists}
                {renderMusicas}
                
            </div>
        )
    }
}

export default GetMusicas;