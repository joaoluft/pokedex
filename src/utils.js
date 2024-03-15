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

    let filteredTrainers = {
        male: [],
        female: []
    };

    trainers.forEach(async (trainer) => {
        const trainerIcon = await import(`./Assets/Images/Trainers/${trainer.icon}`).then((module) => {
            return module.default;
        }).catch(err => {
            console.error("Não foi possível carregar o som do personagem", err);
        });

        filteredTrainers[trainer.gender].push({
            id: trainer.id,
            name: trainer.name,
            icon: trainerIcon,
            gender: trainer.gender
        });
    });

    return filteredTrainers;
}