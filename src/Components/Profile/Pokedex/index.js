import { useContext, useState } from "react";
import { typesColors } from "./../../../Constants/types";
import { PokedexContext } from "./../../../Contexts/PokedexContext";
import { PokemonModal } from "../../PokemonModal";

export const Pokedex = ({ user }) => {
  const { config } = useContext(PokedexContext);
  const [viewModal, setViewModal] = useState({})

  return (
    <>
    <PokemonModal profile={true} data={viewModal} onClose={() => setViewModal({open: false})} />
    <h1 className="text-center py-6 uppercase text-gray-800 font-bold">Pokedex pessoal:</h1>
    <section className="px-24 md:px-10 pb-10 grid md:flex items-center md:justify-center gap-8 flex-wrap">
      { user.capturedPokemons.length > 0 ? (
      user.capturedPokemons.map(pokemon => (
        <div
          onClick={() => setViewModal({current: pokemon, open: true})}
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
  
          <span className="text-center py-2 text-gray-700">
            {pokemon.surname}
          </span>
  
          <span className="text-center text-xs pb-2 text-gray-500">
            {pokemon.name[config.language]}
          </span>
  
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
      ))): (
        <h1 className="text-center text-xl md:text-3xl font-bold text-gray-600">Nenhum pokémon capturado!</h1>
      )}
    </section>
    </>
  )  
}