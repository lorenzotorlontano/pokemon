import Axios from "axios";
import { useQuery, QueryCache, ReactQueryCacheProvider } from "react-query";

const axiosInstance = Axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

const getPokemon = async () => {
  const { data } = await axiosInstance.get(`pokemon?limit=100&offset=200`);
  return data;
};

export default function useGetPokemon() {
  return useQuery(["pokemon"], getPokemon);
}
