import pokemons from "./Constants/pokedex.json";

export const getPokemonsData = async ({quantity, search, type, language}) => {
    let filteredList = pokemons;

    if (search !== "") {
        filteredList = filteredList.filter(pokemon =>
            pokemon.name[language].toLowerCase().includes(search.toLowerCase())
        );
    }

    if (type.length > 0) {
        filteredList = filteredList.filter(pokemon =>
            pokemon.name[language].toLowerCase().includes(search.toLowerCase())
        );
    }

    return filteredList.slice(0, quantity);
}