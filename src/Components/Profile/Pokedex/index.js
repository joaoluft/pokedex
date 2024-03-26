import { useState } from "react";
import { PokemonModal } from "Components/PokemonModal";
import { PokemonCard } from "Components/PokemonCard";

export const Pokedex = ({ user }) => {
  const [viewModal, setViewModal] = useState({})

  return (
    <>
    <PokemonModal profile={true} data={viewModal} onClose={() => setViewModal({open: false})} />
    <h1 className="text-center py-6 uppercase text-gray-800 font-bold">Pokedex pessoal:</h1>
    <section className="px-24 md:px-10 pb-10 grid md:flex items-center md:justify-center gap-8 flex-wrap">
      { user.capturedPokemons.length > 0 ? (
      user.capturedPokemons.map(pokemon => (
          <PokemonCard profile pokemon={pokemon} onClick={() => setViewModal({current: pokemon, open: true})} />
      ))): (
        <h1 className="text-center text-xl md:text-3xl font-bold text-gray-600">Nenhum pokémon capturado!</h1>
      )}
    </section>
    </>
  )  
}