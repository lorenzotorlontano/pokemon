import React from "react";
import TableContent from "../../Components/Table/TableContent";
function MainTable({ classes, text, handleShiny, handleTurn, pokemonDetails }) {
  let name = pokemonDetails && pokemonDetails.moves[0].move.name;

  let ability = pokemonDetails && pokemonDetails.abilities[0].ability.name;

  let weight = pokemonDetails && pokemonDetails.weight;

  let height = pokemonDetails && pokemonDetails.height;

  let type = pokemonDetails && pokemonDetails.types[0].type.name;

  let experience = pokemonDetails && pokemonDetails.base_experience;

  return (
    <TableContent
      handleShiny={handleShiny}
      handleTurn={handleTurn}
      classes={classes}
      name={name}
      ability={ability}
      weight={weight}
      height={height}
      type={type}
      experience={experience}
      text={text}
    />
  );
}
export default MainTable;
