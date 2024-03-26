import { useEffect, useState, useContext } from "react";
import { getPokemonsData, getPokemonsTypes } from "utils";
import { PokedexContext } from "Contexts/PokedexContext";

export const usePokemonsList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [types, setTypes] = useState([]);
  const { config } = useContext(PokedexContext);
  const [filter, setFilter] = useState({
    quantity: 20,
    search: "",
    types: []
  });

  useEffect(() => {
    getPokemonsTypes()
      .then((res) => {
        setTypes(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    getPokemonsData({...filter, language: config.language})
      .then((res) => {
        setPokemons(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [filter, config.language]);

  const updateSearchFilter = (value) => {
    setFilter((prevFilter) => ({ ...prevFilter, search: value }));
    setFilter((prevFilter) => ({ ...prevFilter, quantity: 20 }));
  };

  const addTypeFilter = (type) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      types: [...prevFilter.types, type],
    }));
    setFilter((prevFilter) => ({ ...prevFilter, quantity: 20 }));
  };

  const removeTypeFilter = (type) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      types: prevFilter.types.filter((item) => item !== type),
    }));
    setFilter((prevFilter) => ({ ...prevFilter, quantity: 20 }));
  };

  const loadMorePokemons = () => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      quantity: prevFilter.quantity + 20,
    }));
  };

  return {
    pokemons,
    types,
    filter,
    updateSearchFilter,
    addTypeFilter,
    removeTypeFilter,
    loadMorePokemons,
  };
};