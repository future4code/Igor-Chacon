import React, { Component } from 'react';
import './App.css';
import Etapa1 from './components/Etapa1.js';
import Etapa2 from './components/Etapa2.js';
import Etapa3 from './components/Etapa3.js';
import Final from './components/Final.js';

export class App extends React.Component {

  state = {
    etapa: 1,
  }

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />
      case 2:
        return <Etapa2 />
      case 3:
        return <Etapa3 />
      case 4:
        return <Final />
    }
  }


  render() {

    const irParaProximaEtapa = () => {

      if (this.state.etapa < 4) {
        this.setState( {
          etapa: this.state.etapa + 1
        })
      } else {
        this.setState( {
          etapa: 4
        })
      }

    }

    return (
      <div className="App">
        { this.renderizaEtapa() }
        <br />
        <br />
        <button onClick={irParaProximaEtapa}>Próxima Etapa</button>
      </div>
    )
  }
}

export default App;
