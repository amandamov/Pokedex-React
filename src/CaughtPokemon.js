import React, { useState } from "react";

const CaughtPokemon = () => {
    const [caught, setCaught] = useState([]);

    const date = new Date().toLocaleDateString();

    const catchPokemon = () => {
        setCaught(caught.concat("pikachu"));
    }
    return (
        <div>
            <p>Caught {caught.length} Pokémon on {date}</p>
            <button onClick={catchPokemon}>Let's catch Pokemons!</button>
            <ul>
                {caught.map((pokemon)=> (
                     <li>{pokemon}</li>
                ))}
            </ul>
        </div>
    )
  }

export default CaughtPokemon;