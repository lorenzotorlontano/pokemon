import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import MainTable from "../Table/MainTable";

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables({ pokemonDetails, setTurnImg }) {
  const classes = useStyles();

  const [text, setText] = useState("BACK");

  const [isTurned, setIsTurned] = useState(false);

  const [isShiny, setIsShiny] = useState(false);

  const handleTurn = () => {
    if (isTurned) {
      setIsTurned(false);
      isShiny
        ? setTurnImg(pokemonDetails && pokemonDetails.sprites.front_shiny)
        : setTurnImg(pokemonDetails && pokemonDetails.sprites.front_default);
      setText("BACK");
    } else {
      setIsTurned(true);
      isShiny
        ? setTurnImg(pokemonDetails && pokemonDetails.sprites.back_shiny)
        : setTurnImg(pokemonDetails && pokemonDetails.sprites.back_default);
      setText("FRONT");
    }
  };

  const handleShiny = () => {
    if (isShiny) {
      setIsShiny(false);
      isTurned
        ? setTurnImg(pokemonDetails && pokemonDetails.sprites.back_default)
        : setTurnImg(pokemonDetails && pokemonDetails.sprites.front_default);
    } else {
      setIsShiny(true);
      isTurned
        ? setTurnImg(pokemonDetails && pokemonDetails.sprites.back_shiny)
        : setTurnImg(pokemonDetails && pokemonDetails.sprites.front_shiny);
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
