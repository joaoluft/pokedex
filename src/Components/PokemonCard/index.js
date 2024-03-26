import { useContext } from "react";
import { PokedexContext } from "Contexts/PokedexContext";
import { typesColors } from "Constants/types";

export const PokemonCard = ({ profile = false, pokemon, ...props }) => {

  const { config } = useContext(PokedexContext);

  return (
    <div
      {...props}
      className="
      cursor-pointer 
      flex 
      flex-col 
      justify-center 
      bg-gray-100 
      p-3 
      rounded-xl"
      key={pokemon.id}>
      <img
        draggable="false"
        className="bg-gray-200/75 p-3 rounded-lg md:h-36"
        src={pokemon.icon}
        alt="Imagem pokemon"
      />

      {!profile ? (
        <span className="text-center py-2 text-gray-700">
          {pokemon.name[config.language]}
        </span>
      ) : (
        <>
          <span className="text-center py-2 text-gray-700">
            {pokemon.surname}
          </span>

          <span className="text-center text-xs pb-2 text-gray-500">
            {pokemon.name[config.language]}
          </span>
        </>
      )}

      <div className="flex gap-2 items-center justify-center">
        {pokemon.type.map((type) => (
          <div
            key={type + pokemon.id}
            className={`text-gray-100 text-xs rounded-lg px-2 py-1 bg-[${typesColors[type]}]`}>
            {type}
          </div>
        ))}
      </div>
    </div>
  )
}