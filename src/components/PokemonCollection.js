import React from "react";
import PokemonCard from "./PokemonCard";
import { Card} from "semantic-ui-react";

function PokemonCollection({pokemonCurrent}) {

  const pokemonDisplay = pokemonCurrent.map((pokemon) => (
    <PokemonCard 
    key={pokemon.id}
    pokemons = {pokemon}
    />
  ))

  return (
    <Card.Group itemsPerRow={6}>
      {pokemonDisplay}
    </Card.Group>
  );
}

export default PokemonCollection;
