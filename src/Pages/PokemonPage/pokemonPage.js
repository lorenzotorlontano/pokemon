import React from "react";
import useGetPokemon from "../../Hooks/useGetPokemon";
import Grid from "@material-ui/core/Grid";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import "./style.css";
function PokemonPage() {
  const { data: pokemon } = useGetPokemon();
  return (
    <Grid container>
      {pokemon &&
        pokemon.results.map((val, index) => {
          return (
            <Grid
              key={index}
              className="containerList"
              item
              md={3}
              lg={3}
              xs={12}
            >
              <PokemonCard val={val} />
            </Grid>
          );
        })}
    </Grid>
  );
}

export default PokemonPage;
