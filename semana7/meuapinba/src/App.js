import React from 'react';
import axios from "axios";
import './App.css';


export class App extends React.Component {

  state = {
    times: [],
    time: {},
    jogador: [],
    nomeJogador: '',
    mostrarDetalhes: false,
    mostrarDetalhesTimes: false,
  }

  componentDidMount = () => {
    this.pegarTimes()
  }

  componentDidUpdate = () => {
    
  }

  pegarTimes =  async () => {
    try {
      const res = await axios
        .get(
          `https://free-nba.p.rapidapi.com/teams`,
          {
            headers: {
              'x-rapidapi-key': '',
              'x-rapidapi-host': 'free-nba.p.rapidapi.com'
            }, 
          }
        )
      this.setState({ times: res.data.data })
    } catch (err) {
      console.log(err.message)
    }
  }

 


  // ?search
  render() {

    const buscarJogador = async (x) => {
      try {
        const res = await axios
            .get(
              `https://free-nba.p.rapidapi.com/players/${x}`,
              {
                headers: {
                  'x-rapidapi-key': '628b1c43b9msh5b2220f9b3aa380p140c72jsnde71a7904a27',
                  'x-rapidapi-host': 'free-nba.p.rapidapi.com'
                },
              }
            )
            this.setState({ jogador: res.data })
            console.log(res.data)
            this.setState({ mostrarDetalhes: true })
      } catch (err) {
        console.log(err.message)
      }
    }

    const detalhesTimes =  async (x) => {
      try {
        const res = await axios
          .get(
            `https://free-nba.p.rapidapi.com/teams/${x}`,
            {
              headers: {
                'x-rapidapi-key': '628b1c43b9msh5b2220f9b3aa380p140c72jsnde71a7904a27',
                'x-rapidapi-host': 'free-nba.p.rapidapi.com'
              }, 
            }
          )
        this.setState({ time: res.data })
        this.setState({ mostrarDetalhesTimes: true })
      } catch (err) {
        console.log(err.message)
      }
    }

    const renderDetalhesTime = () => {
      return <p> Nome: {this.state.time.full_name} </p>
    }

    

    const renderTimes = this.state.times.map((time) => {
      return <p onClick={() => {detalhesTimes(time.id)}}> {time.id} - {time.full_name} <hr /> </p>
    })

    const esconderDetalhes = () => {
     this.setState({ mostrarDetalhes: false })
    }

    const esconderDetalhesTimes = () => {
      this.setState({ mostrarDetalhesTimes: false})
    }

    const renderDetalhes = () => {
      return <p onClick={() => {esconderDetalhes()}}>
              
               Nome: {this.state.jogador.first_name} {this.state.jogador.last_name} 
              <br/> 
              Time que atuou: {this.state.jogador.team.full_name}
              <br/> 
              Conferência em que jogou: {this.state.jogador.team.conference}
              <br/>
              {this.state.jogador.position === "" ? <p>Não está mais em atuação</p> :  <p>Posição: {this.state.jogador.position}</p>}
              </p>
    }

    return (
      <div className="App">
        <header className="App-header">

          <h3>Maiores cestinhas da NBA<h6>(clique no nome para detalhes)</h6> </h3>
          

          {this.state.mostrarDetalhes === false ? <div></div> : <h1>{renderDetalhes()}</h1>}
          
          
          <ol>
            <li onClick={() => {buscarJogador(2247)}}>Kareem Abdul-Jabbar</li>
            <li onClick={() => {buscarJogador(583)}}>Karl Malone</li>
            <li onClick={() => {buscarJogador(237)}}>LeBron James</li>
            <li onClick={() => {buscarJogador(1043)}}>Kobe Bryant</li>
            <li onClick={() => {buscarJogador(2931)}}>Michael Jordan</li>
          </ol>

       

          <p className="boxDetalhesTime" onClick={() => {esconderDetalhesTimes()}}>
            {this.state.mostrarDetalhesTimes === false ? <p></p> : 
            <div> 
              <p>Nome: {this.state.time.full_name}</p>
              <p>Conferência: {this.state.time.conference}</p>
              <p>Divisão: {this.state.time.division}</p>
              <p>Cidade: {this.state.time.city}</p>
            </div>}
          </p>
          <h5>Times da NBA:</h5>
          <p>{renderTimes}</p>
          

          
        </header>
      </div>
    )
  }
}

export default App;
