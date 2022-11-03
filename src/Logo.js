import React from "react";

const Logo = (props) => {
    const appName = props.appName

    return (
    <header>
      <h1>Welcome to the {appName}</h1>
      <img onClick={props.handleClick}
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        ></img>
    </header>
    )
}

export default Logo;


