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
                    this.setState({ playlists: res.data })
                    console.log(res.data)
        } catch (err) {
            console.log(err.message)
        }
    }
    
    render () {

        // const renderPlaylists = this.state.playlists.map((playlist) => {
        //     return <p> {playlist.id} </p>
        // })


        return (
            <div>
                GetPlaylists

            </div>
        )
    }
}

export default GetPlaylists;