import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'
import React from 'react'
import './App.css';
import CardProfile from './components/CardProfile.js'
import MatchesList from './components/MatchesList.js'
import styled from "styled-components"
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';


const Body = styled.div`
    color: grey;
    margin: 3% 35% 5% 35%;
    padding: 0 0 2% 0;
    border: solid gray 2px;
    border-radius: 5%5ch;
    .divTopo {
      display: flex;
      justify-content: space-between;
      padding: 0 2% 0 3%;
      vertical-align: middle;
      align-items: center;
    }
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

  const limparMatches = () => {
    axios.put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/igor-chacon/clear"
    )
    .then(alert("Metches limpas! (ninguém viu...)"))
    .catch(err => console.log(err))
}

    const useStyles = makeStyles((theme) => ({
      button: {
        margin: theme.spacing(1),
      },
    }));

    const classes = useStyles();

  return (
    <div className="App">
      <Body>
        <div className="divTopo">
          <Button>
            <SupervisedUserCircleIcon 
            onClick={mudarTela}
            variant="contained"
            color="secondary"
            className={classes.button}
          />
          </Button>

          <h3>Astromatch</h3>

          <Button
            onClick={() => limparMatches()}
            color="secondary"
            className={classes.button}
            startIcon={<DeleteIcon />}
          />
        </div>
              
            <br />
            <br />
            <br />
            {tela ? <CardProfile /> : <MatchesList />}
      </Body>
        
    </div>
  );
}

export default App;
