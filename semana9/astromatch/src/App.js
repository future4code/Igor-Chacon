import { useState, useEffect } from 'react';
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
    margin-left: 25%;
`

function App() {

  const [tela, setTela] = useState(true)

  const mudarTela = () => {
    if(tela === true) {
      setTela(false)
    } else {
      setTela(true)
    }
  }


  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={mudarTela}>Matches</Button>
        {tela ? <CardProfile /> : <MatchesList />}
        
      </header>
    </div>
  );
}

export default App;
