import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import useGetPokemonDetails from "../../Hooks/useGetPokemonDetails";
import "./style.css";
import Table from "../../Components/Table/Table";
import Card from "../../Components/Card/Card";
function DetailsPokemon() {
  const { id } = useParams();
  const { data: pokemonDetails, isSuccess } = useGetPokemonDetails(id);

  const [turnImg, setTurnImg] = useState(null);

  const srcImg = pokemonDetails && pokemonDetails.sprites.front_default;

  useEffect(() => {
    if (isSuccess) {
      setTurnImg(srcImg);
    }
  }, [pokemonDetails]);

  return (
    <Grid className="containerCard" container>
      <Grid item md={5} lg={5} xs={12} className="cardImg">
        <Card
          turnImg={turnImg}
          pokemonDetails={pokemonDetails && pokemonDetails}
        />
      </Grid>
      <Grid item md={6} lg={6} xs={12} className="cardImg">
        <Table
          srcImg={srcImg}
          setTurnImg={setTurnImg}
          pokemonDetails={pokemonDetails}
        />
      </Grid>
    </Grid>
  );
}

export default DetailsPokemon;
