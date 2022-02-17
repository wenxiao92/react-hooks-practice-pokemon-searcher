import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const[pokemonList, setPokemonList] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
    .then((r) => r.json())
    .then(setPokemonList) //use the setter function to set initial list (no need to grab the json data and put it as an argument)
  },[])


  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search />
      <br />
      <PokemonCollection pokemonCurrent={pokemonList}/>
    </Container>
  );
}

export default PokemonPage;
