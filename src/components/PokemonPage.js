import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const[pokemonList, setPokemonList] = useState([])
  const[searchTerm, setSearch] = useState('')

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
    .then((r) => r.json())
    .then(setPokemonList) //use the setter function to set initial list (no need to grab the json data and put it as an argument)
  },[]);

  const pokemonsToDisplay = pokemonList.filter((eachPoke) => 
    eachPoke.name.toLowerCase().includes(searchTerm.toLowerCase())
  )
  
  function handleUpdateAdd(newPokemon){
    setPokemonList([...pokemonList, newPokemon]);
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={handleUpdateAdd}/>
      <br />
      <Search searchPoke={searchTerm} onSearch={setSearch}/>
      <br />
      <PokemonCollection pokemonCurrent={pokemonsToDisplay}/>
      {/* replace pokemonList state with a variable (b/c the variable is used to filter the searched pokemon) */}
    </Container>
  );
}

export default PokemonPage;
