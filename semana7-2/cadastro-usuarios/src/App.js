import React, { Component } from 'react';
import axios from "axios";
import './App.css';
import CadastroUsuarios from './components/CadastroUsuarios.js'
import ListarUsuarios from './components/ListarUsuarios.js'
import DetalhesUsuario from './components/DetalhesUsuario.js'

export class App extends React.Component {

  state = {
    etapa: 1,
  }

  

  renderizarEtapa = () => {
    switch(this.state.etapa) {
      case 1:
        return <CadastroUsuarios />
      case 2:
        return <ListarUsuarios />
      case 3:
        return <DetalhesUsuario />
      default:
        return <CadastroUsuarios />
    }
  }

  render() {

    const mudarEtapa = () => {
      if (this.state.etapa === 1) {
        this.setState( {
          etapa: this.state.etapa + 1
        })
      } else {
        this.setState( {
          etapa: 1
        })
      }
    }

 

    return (
      <div className="App">
        <div className="App-header">

          <div  className="divCadastro" >{ this.renderizarEtapa() }</div>
          

          <div>
            { this.state.etapa === 2 ? 
            <button onClick={mudarEtapa}>Ir para cadastro</button> : 
            <button onClick={mudarEtapa}>Ir para lista</button> }
          </div>

        </div>
      </div>
    )
  }
}

export default App;
