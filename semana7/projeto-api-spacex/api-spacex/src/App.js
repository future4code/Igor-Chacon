import React from 'react';
import GetCapsules from './components/GetCapsules.js'
import GetUpcomingCapsules from './components/GetUpcomingCapsules.js'
import GetPastCapsules from './components/GetPastCapsules.js'
import GetOneCapsule from './components/GetOneCapsule.js'
// import axios from "axios";
import './App.css';
import GetMissoes from './components/GetMissoes.js';

export class App extends React.Component {

  state = {
    etapa: 1,
  }

  renderEtapa = () => {
    switch(this.state.etapa) {
      case 1:
        return <GetCapsules />
      case 2:
        return <GetUpcomingCapsules />
      case 3:
        return <GetPastCapsules />
      case 4:
        return <GetOneCapsule />
      case 5:
        return <GetMissoes />
      default:
        return <GetCapsules />
    }
  }

 

  render() {

    const mudarEtapa = () => {
      if (this.state.etapa < 5) {
        this.setState({ etapa: this.state.etapa + 1})
      } else {
        this.setState({ etapa: 1 })
      }
    }

    const renderLista = () => {
      this.setState({ etapa: 1 })
    }

    const renderNovos = () => {
      this.setState({ etapa: 2 })
    }
    
    const renderAntigos = () => {
      this.setState({ etapa: 3 })
    }
    const renderBusca = () => {
      this.setState({ etapa: 4 })
    }

    const renderMissoes = () => {
      this.setState({ etapa: 5 })
    }

    

    return (
      <div className="App">
        <header className="App-header">

          <div className="botoes">
            <button  onClick={mudarEtapa}>Próxima etapa</button>
            <button onClick={renderLista}>Lista</button>
            <button onClick={renderBusca}>Busca</button>
            <button onClick={renderAntigos}>Lançamentos Antigos</button>
            <button onClick={renderNovos}>Lançamentos Novos</button>
            <button onClick={renderMissoes}> Missões</button>
          </div>
          

          { this.renderEtapa() }

        </header>
      </div>
    );
  }
}

export default App;
