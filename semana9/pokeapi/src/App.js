import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';
import PokeCards from './components/PokeCards/PokeCards.js';

export default function App() {

  const [pokeList, setPokelist] = useState([])
  const [pokeName, setPokeName] = useState("")

  const construirPokeLista = () => {
    axios.get(
      'https://pokeapi.co/api/v2/pokemon/?limit=151'
    )
    .then(res => setPokelist(res.data.results))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    construirPokeLista()
  }, [])

  const changePokeName = (event) => {
    setPokeName(event.target.value)
  }

  return (
    <div className="App">

      <select onChange={changePokeName}>
        <option value={""}>Nenhum</option>
        {pokeList.map(pokemon => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          )
        })}
      </select>
      
      <PokeCards pokemon={pokeName}/>
    </div>
  );
}
