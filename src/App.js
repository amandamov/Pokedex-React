import logo from './logo.svg';
import './App.css';
import React from 'react';

function App(){
  return (
    <div>
      <Logo />
      <BestPokemon pokemonName="charmander"/>
      <CaughtPokemon />
    </div>)
}

// function Logo(){
//   return(
//     <header>
//       <h1>Welcome to the Pokedex</h1>
//       <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"></img>
//     </header>
//   )
// }
//transform in arrow function

const Logo = () => {
  const appName = "Pokedex"
  return(<header>
    <h1>Welcome to the {appName}</h1>
    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"></img>
  </header>
  )
}

const CaughtPokemon = () => {
  const date = new Date().toLocaleDateString();
  return (
    <p>Caught 0 Pokémon on {date}</p>
  )
}


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


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;

