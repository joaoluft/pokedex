import { useEffect, useState } from "react";
import { getPokemonsData, getPokemonsTypes } from "../../utils";
import { Button } from "./../Button";
import { InputSearch } from "../InputSearch";
import { SelectType } from "../SelectType";
import { LanguageSelector } from "../LanguageSelector";

export const PokemonsList = ({ language }) => {
  const [pokemons, setPokemons] = useState([]);
  const [types, setTypes] = useState([]);
  const [filter, setFilter] = useState({
    quantity: 10,
    search: "",
    types: [],
    language: language,
  });

  useEffect(() => {
    getPokemonsTypes()
      .then((res) => {
        setTypes(res);
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    getPokemonsData(filter)
      .then((res) => {
        setPokemons(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [filter]);

  const changeFilterValue = (filter, value) => {
    setFilter((prevFilter) => ({ ...prevFilter, [filter]: value }));
  };

  const filterSearchHandler = (event) => {
    changeFilterValue("search", event.target.value);
  };

  const addTypeFilterHandler = (event) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      types: [...prevFilter.types, event.target.value],
    }));
  };

  const remTypeFilterHandler = (type) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      types: prevFilter.types.filter((item) => item !== type),
    }));
  };

  return (
    <section className="px-12 pt-6">
      <div className="flex gap-4 items-center justify-center">
        <LanguageSelector />
        <InputSearch
          onChange={filterSearchHandler}
          placeholder="Pikachu, Charizard..."
        />
        <SelectType onChange={addTypeFilterHandler} types={types} />
      </div>

      <div className="flex animation-all gap-2 items-center justify-center pt-4 pb-6">
        {filter.types.map((filter) => (
          <div
            onClick={() => remTypeFilterHandler(filter)}
            key={filter}
            className="text-white 
                    flex gap-1 
                    items-center 
                    justify-center 
                    bg-[#c7a008] 
                    px-2 
                    rounded-full 
                    py-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>

            <span className="text-sm">{filter}</span>
          </div>
        ))}
      </div>

      <div className="flex gap-4 flex-wrap">
        {pokemons &&
          pokemons.map((pokemon) => (
            <div className="flex flex-col justify-center" key={pokemon.id}>
              <img
                className="bg-gray-200 p-3 rounded-lg"
                src={pokemon.icon}
                alt=""
              />
              <span className="text-center">{pokemon.name[language]}</span>
            </div>
          ))}
      </div>

      <Button
        onClick={() => changeFilterValue("quantity", filter.quantity + 10)}
      >
        Ver mais...
      </Button>
    </section>
  );
};
