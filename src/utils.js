import pokemons from "./Constants/pokedex.json";
import trainers from "./Constants/trainers.json";
import unknown from "./Assets/Images/Trainers/unknown.png";

const padStartZero = (number) => {
  const length = 3;
  const numberStrignify = number.toString();

  if (numberStrignify.length < length) {
    return "0".repeat(length - numberStrignify.length) + numberStrignify;
  } else {
    return numberStrignify;
  }
};

export const getPokemonsData = async ({
  quantity,
  search,
  types,
  language,
}) => {
  let filteredList = pokemons;

  // Filtragem de pesquisa
  if (search !== "") {
    filteredList = filteredList.filter((pokemon) =>
      pokemon.name[language].toLowerCase().includes(search.toLowerCase())
    );
  }

  // Filtragem de tipos
  if (types.length > 0) {
    filteredList = filteredList.filter((pokemon) =>
      types.every((type) => pokemon.type.includes(type))
    );
  }

  // Filtragem por quantidade solicitada
  filteredList = filteredList.slice(0, quantity);

  // Importação dinâmica das imagens dos pokémons
  filteredList = await Promise.all(
    filteredList.map(async (pokemon) => {
      const pokemonIcon = await import(
        `Assets/Images/Pokemons/${padStartZero(pokemon.id)}.png`
      );

      return { ...pokemon, icon: pokemonIcon.default };
    })
  );
  
  // Retorno da lista montada e filtrada
  return filteredList;
};

export const getTrainersData = async () => {
  const mountedTrainers = await Promise.all(
    trainers.map(async (trainer) => {
      const trainerIcon = await import(
        `Assets/Images/Trainers/${trainer.icon}`
      );
      
      return { ...trainer, icon: trainerIcon.default };
    })
  );

  return mountedTrainers;
};

export const getTrainerData = async (id) => {
  if (id === null) return {name: "Nenhum", icon: unknown};
  const trainer = trainers[id-1];
  const specificTrainerIcon = await import(
    `Assets/Images/Trainers/${trainer.icon}`
  );
  return { ...trainer, icon: specificTrainerIcon.default };
};

export const getPokemonsTypes = async () => {
  let types = [];

  pokemons.forEach((pokemon) => {
    pokemon.type.forEach((type) => {
      if (!types.includes(type)) {
        types.push(type);
      }
    });
  });

  return types;
};