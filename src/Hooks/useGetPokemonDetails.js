import Axios from "axios";
import { useQuery, QueryCache, ReactQueryCacheProvider } from "react-query";
const axiosInstance = Axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

const getPokemonDetails = async (key, id) => {
  const { data } = await axiosInstance.get(`pokemon/${id}`);
  return data;
};

export default function useGetPokemonDetails(id) {
  return useQuery(["popularMovies", id], getPokemonDetails);
}
