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

export default function CustomizedTables({
  pokemonDetails,
  setTurnImg,
  srcImg,
}) {
  let classes = useStyles();

  let [text, setText] = useState("BACK");

  let [isTurned, setIsTurned] = useState(false);

  let [isShiny, setIsShiny] = useState(false);

  let frontShinyImg = pokemonDetails && pokemonDetails.sprites.front_shiny;

  let back_defaultImg = pokemonDetails && pokemonDetails.sprites.back_default;

  let back_shinyImg = pokemonDetails && pokemonDetails.sprites.back_shiny;

  const handleTurn = () => {
    if (isTurned) {
      setIsTurned(false);
      isShiny ? setTurnImg(frontShinyImg) : setTurnImg(srcImg);
      setText("BACK");
    } else {
      setIsTurned(true);
      isShiny ? setTurnImg(back_shinyImg) : setTurnImg(back_defaultImg);
      setText("FRONT");
    }
  };

  const handleShiny = () => {
    if (isShiny) {
      setIsShiny(false);
      isTurned ? setTurnImg(back_defaultImg) : setTurnImg(srcImg);
    } else {
      setIsShiny(true);
      isTurned ? setTurnImg(back_shinyImg) : setTurnImg(frontShinyImg);
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
