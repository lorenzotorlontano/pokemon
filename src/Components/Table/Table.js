import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MainTable from "../Table/MainTable";

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables({
  pokemonDetails,
  setTurnImg,
  srcImg,
}) {
  const classes = useStyles(),
    [text, setText] = useState("BACK"),
    [isTurned, setIsTurned] = useState(false),
    [isShiny, setIsShiny] = useState(false),
    frontShinyImg = pokemonDetails && pokemonDetails.sprites.front_shiny,
    backDefaultImg = pokemonDetails && pokemonDetails.sprites.back_default,
    backShinyImg = pokemonDetails && pokemonDetails.sprites.back_shiny;

  const handleTurn = () => {
    setIsTurned(!isTurned);
    setText(isTurned ? "BACK" : "FRONT");

    if (isTurned) {
      setTurnImg(isShiny ? frontShinyImg : srcImg);
    } else {
      setTurnImg(isShiny ? backShinyImg : backDefaultImg);
    }
  };

  const handleShiny = () => {
    setIsShiny(!isShiny);
    if (isShiny) {
      setTurnImg(isTurned ? backDefaultImg : srcImg);
    } else {
      setTurnImg(isTurned ? backShinyImg : frontShinyImg);
    }
  };

  return (
    <MainTable
      classes={classes}
      text={text}
      handleShiny={handleShiny}
      handleTurn={handleTurn}
      pokemonDetails={pokemonDetails}
    />
  );
}
