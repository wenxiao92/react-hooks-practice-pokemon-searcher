import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({onAddPokemon}) {
  const [pokeForm, setAddPoke] = useState({
    name: "",
    hp: "",
    frontUrl: "",
    backUrl: "",
  })

  function handleChange(event){
    setAddPoke({...pokeForm, [event.target.name]: event.target.value,})
  }

  function handleSubmit(){
    const newPokemon = {
      name: pokeForm.name,
      hp: pokeForm.hp,
      sprites: {
        front: pokeForm.frontUrl,
        back: pokeForm.frontUrl
      },
    };

    fetch('http://localhost:3001/pokemon', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPokemon),
    })
    .then((r) => r.json())
    .then(onAddPokemon)
  }


  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name"
            value={pokeForm.name}
            onChange={handleChange}
           />
          <Form.Input fluid label="hp" placeholder="hp" name="hp"
            value={pokeForm.hp}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={pokeForm.frontUrl}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={pokeForm.backUrl}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
