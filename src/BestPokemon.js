import React from "react";

const BestPokemon = (props) => {
    let abilities = ['Anticipation', 'Adaptability', 'Run-Away']
    return (
      <div>
        <p>My favorite Pokémon is {props.pokemonName}</p>
        <ul>
          {abilities.map((ability)=> <li>{ability}</li>)}
        </ul>
      </div>
      
    );
  }

export default BestPokemon;