import React, { useState } from "react";

const CaughtPokemon = () => {
    const [caught, setCaught] = useState([]);
    const [pokemonNameInput, setPokemonNameInput] = useState("");
    // const pokemon = ["pikachu", "charmander", "charizard", "ditto", "jigglypuff"];
    const date = new Date().toLocaleDateString();

    const catchPokemon = () => {
        // const randomNumber = Math.floor(Math.random() * pokemon.length);
        if(pokemonNameInput) {
            setCaught(caught.concat(pokemonNameInput));
            setPokemonNameInput("")
        }
    }

    // function handleInputChange(event) {
    //     setPokemonNameInput(event.target.value);
    // }
    return (
        <div>
            <p>Caught {caught.length} Pokémon on {date}</p>
            <input 
             type="text"
             value={pokemonNameInput}
             onChange={(event) => setPokemonNameInput(event.target.value)}
            />
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