import { useState, useEffect } from 'react';
import axios from 'axios'
import React from 'react'
import './App.css';
import CardProfile from './components/CardProfile.js'
import MatchesList from './components/MatchesList.js'
import styled from "styled-components"

const Button = styled.button`
    background-color: lightgreen;
    margin: 0 5% 0 5%;
    border-radius: 10px;
    &:hover {
        color: white;
      }
`

const Body = styled.div`
    color: white;
    margin: 3% 35% 5% 35%;
    padding: 0 0 2% 0;
    background-color: grey;
    border: solid gray 2px
`

function App(props) {

  const [tela, setTela] = useState(true)

  const mudarTela = () => {
    if(tela === true) {
      setTela(false)
    } else {
      setTela(true)
    }
  }

  const limparMatches = () => {
    axios.put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/igor-chacon/clear"
    )
    .then(alert("Metches limpas! (ninguém viu...)"))
    .catch(err => console.log(err))
}

  return (
    <div className="App">
      <Body>
        <divButoes>
              <div>Astromatch</div>
              <br />
              <Button onClick={mudarTela} className="botao1">Matches</Button>
              <Button onClick={() => limparMatches()}>Limpar Matches</Button>
            </divButoes>
            <br />
            <br />
            <br />
            {tela ? <CardProfile /> : <MatchesList />}
      </Body>
        
    </div>
  );
}

export default App;
