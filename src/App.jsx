import "./App.css"
import { useState } from "react"
import PokemonCard from "./components/PokemonCard"

function App() {

  const [pokemonIndex, setPokemonIndex] = useState(0)

  const handleClickNext = () => {
    setPokemonIndex(pokemonIndex + 1)
  }
  
  const handleClickBack = () => {
    setPokemonIndex(pokemonIndex - 1)
  }
  

  const pokemonList = [
    {
        name: "Bulbasaur",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      {
        name: "Charmander",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      {
        name: "Squirtle",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      },
      {
        name: "Pikachu",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
      {
        name: "Mew",
    },
  ];

  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
      {pokemonIndex > 0 ? <button onClick={handleClickBack}>Back</button> : ""}
      {pokemonIndex < pokemonList.length-1 ? <button onClick={handleClickNext}>Next</button> : ""}
    </div>
  );
}

export default App;