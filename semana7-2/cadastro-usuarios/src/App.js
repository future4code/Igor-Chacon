import React, { Component } from 'react';
import axios from "axios";
import './App.css';
import CadastroUsuarios from './components/CadastroUsuarios.js'
import ListarUsuarios from './components/ListarUsuarios.js'

export class App extends React.Component {

  state = {
    etapa: 2,
    usuarios: [],
    usuariosValue: '',
  }

  

  renderizarEtapa = () => {
    switch(this.state.etapa) {
      case 1:
        return <CadastroUsuarios />
      case 2:
        return <ListarUsuarios />
    }
  }

  render() {

    const mudarEtapa = () => {
      if (this.state.etapa == 1) {
        this.setState( {
          etapa: this.state.etapa + 1
        })
      } else {
        this.setState( {
          etapa: 1
        })
      }
    }

    const onChangeUsuarioValue = (event) => {
      this.setState({ usuarioValue: event.target.value });
  }

    return (
      <div className="App">
        <div className="App-header">

          { this.state.etapa == 1 ? 
          <button onClick={mudarEtapa}>Ir para lista</button> : 
          <button onClick={mudarEtapa}>Ir para cadastro</button> }

          { this.renderizarEtapa() }

        </div>
      </div>
    )
  }
}

export default App;
