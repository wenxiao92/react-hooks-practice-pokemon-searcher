import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemons}) {
  const {name, hp, sprites} = pokemons
  const [flipImg, setImg] = useState(true)

  function handleImgFlip(){
    setImg((backFront) => !backFront)
  }

  let image = flipImg ? sprites.front : sprites.back

  return (
    <Card>
      {/* put click event on first div. Otherwise, only a portion of the card will work */}
      <div onClick={handleImgFlip}>
        <div className="image">
          <img src={image} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
