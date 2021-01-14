import React, { Component } from 'react';
import GetCapsules from './components/GetCapsules.js'
import axios from "axios";
import './App.css';

export class App extends React.Component {

  state = {
    etapa: 1,
  }

  renderEtapa = () => {
    switch(this.state.etapa) {
      case 1:
        return <GetCapsules />
      case 2:
        return <GetCapsules /> + "2"
      case 3:
        return <GetCapsules /> + "3"
      default:
        return <GetCapsules />
    }
  }

 

  render() {

    const mudarEtapa = () => {
      if (this.state.etapa < 3) {
        this.setState({ etapa: this.state.etapa + 1})
      } else {
        this.setState({ etapa: 1 })
      }
    }

    const renderLista = () => {
      this.setState({ etapa: 1 })
    }

    return (
      <div className="App">
        <header className="App-header">

          <button onClick={mudarEtapa}>Ir para próxima etapa</button>
          <button onClick={renderLista}>Ir para lista</button>

          { this.renderEtapa() }

        </header>
      </div>
    );
  }
}

export default App;
