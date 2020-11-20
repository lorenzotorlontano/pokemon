import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useGetPokemonDetails from "../../Hooks/useGetPokemonDetails";
import WrapperCardAndTable from "../../Components/WrapperCardAndTable";

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
    <WrapperCardAndTable
      turnImg={turnImg}
      pokemonDetails={pokemonDetails}
      srcImg={srcImg}
      setTurnImg={setTurnImg}
    />
  );
}

export default DetailsPokemon;
