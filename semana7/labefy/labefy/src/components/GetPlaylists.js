import React from 'react';
import axios from 'axios';

export class GetPlaylists extends React.Component {

    state = {
        playlists: [],
        playlist: '',
    }

    componentDidMount = () => {
        this.pegarPlaylists()
    }

    pegarPlaylists = async () => {
        try {
            const res = await axios
                .get(
                    `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists`,
                    {
                        headers: {
                            Authorization: "igor-chacon-epps"
                        }
                    })
                    this.setState({ playlists: res.data.result.list })
        } catch (err) {
            console.log(err.message)
        }
    }

    
    
    render () {

        const deletePlaylist = async (playlistId) => {
            if(window.confirm("Deseja realmente excluir essa playlist?")) {
                try {
                    const res = await axios
                        .delete(
                            `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`,
                            {
                                headers: {
                                    Authorization: "igor-chacon-epps"
                                }
                            })
                            this.pegarPlaylists()
                            alert(`A playlist foi excluída`)
                } catch (err) {
                    console.log(err.message)
                }
            } else {
                alert("Item não excluído.")
            }
            
    
        }

        const renderPlaylists = this.state.playlists.map((playlist) => {
            return <div> {playlist.name} <button onClick={() => {deletePlaylist(playlist.id)}} >X</button> <hr /> </div> 
        })

        


        return (
            <div>
                - Playlists -
                {renderPlaylists}
            </div>
        )
    }
}

export default GetPlaylists;