import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemonCurrent}) {

  const pokemonDisplay = pokemonCurrent.map((pokemon) => (
    <PokemonCard 
    key={pokemon.id}
    pokemons = {pokemon}


    />
  ))

  return (
    <Card.Group itemsPerRow={6}>
      <h1>{pokemonDisplay}</h1>
    </Card.Group>
  );
}

export default PokemonCollection;
