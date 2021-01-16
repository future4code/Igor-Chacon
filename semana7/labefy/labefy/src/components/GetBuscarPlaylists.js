import React from 'react';
import axios from 'axios';

export class GetBuscarPlaylists extends React.Component {

    state = {
        playlists: [],
        playlistValue: '',
    }
    
    render () {

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
            } catch (err) {
                console.log(err.message)
            }
        }

        const onChangePlaylistValue = (e) => {
                this.setState({ playlistValue: e.target.value })
        }

        const renderPlaylists = this.state.playlists.map((playlist) => {
            return <div> <p> Nome da Playlist: {playlist.name} <br/> Músicas: {playlist.url === undefined ? <span>Sem músicas</span>: <span> {playlist.url} </span> } </p> <hr /> </div> 
        })

        return (
            <div>
                <from>
                    <label>Busque uma playlist para detalhes: </label>
                    <br/>
                    <input
                        placeholder="Nome da playlist"
                        value={this.state.playlistValue}
                        onChange={onChangePlaylistValue}
                    />

                    <button onClick={() => {buscarPlaylists(this.state.playlistValue)}}>Buscar</button>
                </from>

                {renderPlaylists}

            </div>
        )
    }
}

export default GetBuscarPlaylists;