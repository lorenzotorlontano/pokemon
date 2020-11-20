import React from "react";
import Grid from "@material-ui/core/Grid";
import "../../src/Pages/DetailsPokemon/style.css";
import Table from "../../src/Components/Table/Table";
import Card from "../../src/Components/Card/Card";
function WrapperCardAndTable({ turnImg, pokemonDetails, srcImg, setTurnImg }) {
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

export default WrapperCardAndTable;
