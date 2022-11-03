import './App.css';
import React, { useState } from "react";
import Logo from './Logo';
import CaughtPokemon from './CaughtPokemon';
import BestPokemon from './BestPokemon';

function App(){

  function logWhenClicked() {
    console.log("Button was clicked!");
  }

  return (
    <div>
      <Logo appName="Pokedex" handleClick={logWhenClicked}/>
      <BestPokemon pokemonName="charmander"/>
      <CaughtPokemon />
    </div>)
}

export default App;

