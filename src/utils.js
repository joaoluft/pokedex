import pokemons from "./Constants/pokedex.json";
import trainers from "./Constants/trainers.json";

export const getPokemonsData = async ({ quantity, search, types, language }) => {
    let filteredList = pokemons;

    if (search !== "") {
        filteredList = filteredList.filter(pokemon =>
            pokemon.name[language].toLowerCase().includes(search.toLowerCase())
        );
    }

    if (types.length > 0) {
        filteredList = filteredList.filter(pokemon =>
            types.every(type => pokemon.type.includes(type))
        );
    }

    return filteredList.slice(0, quantity);
}

export const getTrainersData = async () => {
    const mountedTrainers = await Promise.all(trainers.map(async (trainer) => {
        const module = await import(`./Assets/Images/Trainers/${trainer.icon}`);
        return {
            id: trainer.id,
            name: trainer.name,
            icon: module.default,
            gender: trainer.gender
        };
    }));

    return mountedTrainers;
}