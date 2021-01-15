import React from 'react';
import PostAddMusicas from './components/PostAddMusicas.js'
import PostCriarPlaylists from './components/PostCriarPlaylists.js'
import GetMusicas from './components/GetMusicas.js'
import GetBuscarPlaylists from './components/GetBuscarPlaylists.js'
import GetPlaylists from './components/GetPlaylists.js'
import './App.css';

export class App extends React.Component {

  state = {
    etapa: 5,
  }

  render () {

    const irHome = () => {
      this.setState({ etapa: 1})
    }

    const irPlaylist = () => {
      this.setState({ etapa: 2 })
    }

    const irBusca = () => {
      this.setState({ etapa: 3 })
    }
    
    const irMusicas = () => {
      this.setState({ etapa: 4 })
    }

    const irCriarPlay = () => {
      this.setState({ etapa: 5 })
    }

    const irAddMusica = () => {
      this.setState({ etapa: 5 })
    }

    const renderEtapa = () => {
      switch (this.state.etapa) {
        case 1:
          return <h1>Bem vindo ao Labefy!</h1>
        case 2:
          return <GetPlaylists />
        case 3:
          return <GetBuscarPlaylists />
        case 4:
          return <GetMusicas />
        case 5:
          return <PostCriarPlaylists />
        case 6:
          return <PostAddMusicas />
        default:
          return <div> <h1>Bem vindo ao Labefy!</h1> </div>
      }
    }

    return (
      <div className="App">
        <header className="App-header">
         <div className="buttonDiv"> 
          <button onClick={() => {irHome()}}>Home</button>
          <button onClick={() => {irCriarPlay()}}>Criar Playlists</button>
          <button onClick={() => {irPlaylist()}}>Playlists</button> 
          <button onClick={() => {irBusca()}}>Buscar Playlists</button>
          <button onClick={() => {irMusicas()}}>Músicas</button>
          <button onClick={() => {irAddMusica()}}>Add música</button>
          
        </div>
        {renderEtapa()}
        </header>
      </div>
    )
  }
}

export default App;
