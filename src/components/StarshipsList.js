import React from "react";
import ThemedStarship from "./Starship.js";
import T from "prop-types";

const StarshipsList = ({ starships, query }) => {
  return (
    <div className="StarshipList">
      {starships.results.map(starship => (
        <ThemedStarship
          key={starship.id}
          name={starship.name}
          model={starship.model}
          manufacturer={starship.manufacturer}
          cost={starship.cost_in_credits}
        />
      ))}
    </div>
  );
};

StarshipsList.propTypes = {
  starships: T.array.isRequired
};

export default StarshipsList;
