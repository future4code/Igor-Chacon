import React, { useState, useEffect } from "react";
import axios from "axios";

const PokeCards = (props) => {

    const [pokemon, setPokemon] = useState({})
    
    const pegarPokemon = (pokeName) => {
        axios.get(
            `https://pokeapi.co/api/v2/pokemon/${pokeName}`
        )
        .then(res => setPokemon(res.data))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        pegarPokemon(props.pokemon)
    }, [props.pokemon])

  return (
    <div>
        {props.pokemon && <div><p>Nome: {pokemon.name}</p>
        <p>Peso: {pokemon.weight} Kg</p>
        {pokemon.types && <p>Tipo: {pokemon.types[0].type.name}</p>}
        {pokemon.sprites && (
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        )}</div> }
    </div>
  );
}

export default PokeCards;
